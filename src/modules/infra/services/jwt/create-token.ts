import jwt from "jsonwebtoken";
import { CreateTokenProtocol } from "../../../presentation/contracts/jwt-create-token";

export class CreateTokenJwt implements CreateTokenProtocol {
  create(): string {
    const token = jwt.sign({ isAdmin: true }, process.env.SECRET, {
      expiresIn: "1h",
    });

    return token;
  }
}
