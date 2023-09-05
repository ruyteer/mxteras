import { IFirebaseUpload } from "../../../presentation/contracts/firebase-upload";
import { FileViewModel } from "../../../presentation/views/file";
import { bucket } from "./firebase-config";

export class FirebaseUpload implements IFirebaseUpload {
  async uploadFile(file: FileViewModel): Promise<string> {
    return new Promise(async (resolve, reject) => {
      const newFile = bucket.file(file.originalname);

      const stream = newFile.createWriteStream({
        metadata: {
          contentType: file.mimetype,
        },
      });

      stream.on("error", (error) => {
        reject(new Error(error.message));
      });

      stream.on("finish", async () => {
        await newFile.makePublic();

        const signedUrl = await newFile.getSignedUrl({
          action: "read",
          expires: "03-01-2500",
        });

        resolve(signedUrl[0]);
      });

      stream.end(file.buffer);
    });
  }
}
