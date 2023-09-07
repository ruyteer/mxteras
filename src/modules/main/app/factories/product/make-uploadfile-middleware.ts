import { FirebaseUpload } from "../../../infra/services/firebase/firebase-upload";
import { UploadFile } from "../../../presentation/middlewares/upload-file";
import { Controller } from "../../../presentation/protocols";

export const makeUploadMiddleware = (): Controller => {
  const service = new FirebaseUpload();
  return new UploadFile(service);
};
