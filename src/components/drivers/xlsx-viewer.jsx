// Copyright (c) 2017 PlanGrid, Inc.

import React, { Component } from "react";
import XLSX from "xlsx";
import "../../styles/xslx-table.scss";
import { formatDate } from "../../utils/helper";

class XlxsViewer extends Component {
  constructor(props) {
    super(props);
    this.state = this.parse();
  }

  parse() {
    const dataArr = new Uint8Array(this.props.data);
    const arr = [];

    for (let i = 0; i !== dataArr.length; i += 1) {
      arr.push(String.fromCharCode(dataArr[i]));
    }

    const parser = new window.DOMParser();
    const workbook = XLSX.read(arr.join(""), {
      type: "binary",
      cellDates: true,
    });
    const names = workbook.SheetNames;
    const sheets = names.map((name) => {
      const currentSheet = workbook.Sheets[name];
      const keys = Object.keys(currentSheet);

      keys.forEach((key) => {
        const cellData = currentSheet[key];
        if (cellData.t === "d" && /^\d{2}\/\d{2}\/\d{2}$/g.test(cellData.w)) {
          cellData.w = formatDate(cellData.w);
        }
      });

      const sheet = XLSX.utils.sheet_to_html(currentSheet);
      return parser.parseFromString(sheet, "text/html").body.innerHTML;
    });

    return { sheets, names, curSheetIndex: 0 };
  }

  renderSheetNames(names) {
    const sheets = names.map((name, index) => (
      <input
        key={name}
        type="button"
        value={name}
        onClick={() => {
          this.setState({ curSheetIndex: index });
        }}
      />
    ));

    return <div className="sheet-names">{sheets}</div>;
  }

  renderSheetData(sheet) {
    return (
      <div
        className="xlsx-container"
        dangerouslySetInnerHTML={{
          __html: sheet,
        }}
      />
    );
  }

  render() {
    const { sheets, names, curSheetIndex } = this.state;
    return (
      <div className="spreadsheet-viewer">
        {this.renderSheetNames(names)}
        {this.renderSheetData(sheets[curSheetIndex || 0])}
      </div>
    );
  }
}

export default XlxsViewer;
