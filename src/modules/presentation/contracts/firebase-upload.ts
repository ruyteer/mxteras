import { FileViewModel } from "../views/file";

export interface IFirebaseUpload {
  uploadFile(file: FileViewModel): Promise<string>;
}
