declare module "react-file-viewer" {

  export type AcceptableFileExts =
    | "png"
    | "jpeg"
    | "gif"
    | "bmp"
    | "pdf"
    | "csv"
    | "xlsx"
    | "docx"
    | "mp4"
    | "webm"
    | "mp3";
  export interface FileViewerProps {
    fileType: AcceptableFileExts;

    filePath: string;
    onError?: (e: unknown) => void | null;
    errorComponent?: React.Component<FileViewerProps & { error: unknown }>;
    unsupportedComponent?: React.Component;
  }

  export default class FileViewer extends React.Component<FileViewerProps> {
    static AcceptableExtensions: Array<AcceptableFileExts>
  }
}
