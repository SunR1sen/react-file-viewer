// Copyright (c) 2017 PlanGrid, Inc.

import React, { Component } from "react";
import PropTypes from "prop-types";
import "styles/main.scss";
import withFetching from "./fetch-wrapper";

import {
  DocxViewer,
  VideoViewer,
  XlsxViewer,
  XBimViewer,
  UnsupportedViewer,
  PhotoViewerWrapper,
  AudioViewer,
  PdfViewer,
} from "./drivers";

import AcceptableExtensions from "../utils/formats";

class FileViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
    this.containerRef = React.createRef();
  }

  componentDidMount() {
    const container = this.containerRef.current;
    const height = container ? container.clientHeight : 0;
    const width = container ? container.clientWidth : 0;
    this.setState({ height, width });
  }

  getDriver() {
    switch (this.props.fileType) {
      case "xlsx": {
        const newProps = Object.assign({}, this.props, {
          responseType: "arraybuffer",
        });
        return withFetching(XlsxViewer, newProps);
      }
      case "jpg":
      case "jpeg":
      case "gif":
      case "bmp":
      case "png": {
        return PhotoViewerWrapper;
      }
      case "pdf": {
        return PdfViewer;
      }
      case "docx": {
        return DocxViewer;
      }
      case "mp3": {
        return AudioViewer;
      }
      case "webm":
      case "mp4": {
        return VideoViewer;
      }
      case "wexbim": {
        return XBimViewer;
      }
      default: {
        return UnsupportedViewer;
      }
    }
  }

  render() {
    const Driver = this.getDriver(this.props);
    return (
      <div className="pg-viewer-wrapper">
        <div className="pg-viewer" id="pg-viewer" ref={this.containerRef}>
          <Driver
            {...this.props}
            width={this.state.width}
            height={this.state.height}
          />
        </div>
      </div>
    );
  }
}

FileViewer.AcceptableExtensions = AcceptableExtensions;

FileViewer.propTypes = {
  fileType: PropTypes.string.isRequired,
  filePath: PropTypes.string.isRequired,
  onError: PropTypes.func,
  errorComponent: PropTypes.element,
  unsupportedComponent: PropTypes.element,
};

FileViewer.defaultProps = {
  onError: () => null,
  errorComponent: null,
  unsupportedComponent: null,
};

export default FileViewer;
module.exports = FileViewer;
