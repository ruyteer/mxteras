import { MissingParamError } from "../../../data/errors";
import { CreateTokenProtocol } from "../../contracts/jwt-create-token";
import { InvalidAdminCredentials } from "../../errors/invalid-credentials";
import { badResponse, okResponse } from "../../helpers/http-response";
import { Controller, httpRequest, httpResponse } from "../../protocols";

export class AdminLoginController implements Controller {
  constructor(private readonly jwtCreateToken: CreateTokenProtocol) {}

  async handle(httpRequest?: httpRequest): Promise<httpResponse> {
    try {
      const requiredFields = ["email", "password"];
      const { email, password } = httpRequest.req.body;

      for (const field of requiredFields) {
        if (!httpRequest.req.body[field]) {
          throw new MissingParamError(field);
        }
      }

      if (email != "admin@gmail.com" || password != "admin") {
        throw new InvalidAdminCredentials();
      }

      return okResponse(this.jwtCreateToken.create());
    } catch (error) {
      return badResponse(error);
    }
  }
}
