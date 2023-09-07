import { FileViewModel } from "../views/file";

export interface IFirebaseUpload {
  uploadFile(files: FileViewModel[]): Promise<string[]>;
}
