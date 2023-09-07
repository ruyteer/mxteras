import { IFirebaseUpload } from "../contracts/firebase-upload";
import { badResponse, okResponse } from "../helpers/http-response";
import { Controller, httpRequest, httpResponse } from "../protocols";

export class UploadFile implements Controller {
  constructor(private readonly firebaseUpload: IFirebaseUpload) {}

  async handle(httpRequest?: httpRequest): Promise<httpResponse> {
    try {
      const files = httpRequest.req.files;
      const fileUrl = await this.firebaseUpload.uploadFile(files);
      httpRequest.req.files.firebaseUrl = fileUrl;

      return okResponse();
    } catch (error) {
      return badResponse(error);
    }
  }
}
