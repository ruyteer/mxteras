import jwt from "jsonwebtoken";
import { CheckAdminProtocol } from "../../../presentation/contracts/jwt-verify-token";
import { InvalidJwtToken } from "../errors/invalid-jwt-token";

export class CheckAdminJwtService implements CheckAdminProtocol {
  async checkAdmin(token: string): Promise<void> {
    try {
      jwt.verify(token, process.env.SECRET);
    } catch (error) {
      throw new InvalidJwtToken();
    }
  }
}
