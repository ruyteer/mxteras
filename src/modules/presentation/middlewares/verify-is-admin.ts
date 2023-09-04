import { CheckAdminProtocol } from "../contracts/jwt-verify-token";
import { HeadersNotFoundError } from "../errors/headers-not-found";
import { badResponse, okResponse } from "../helpers/http-response";
import { Controller, httpRequest, httpResponse } from "../protocols";

export class VerifyIsAdmin implements Controller {
  constructor(private readonly jwtVerifyToken: CheckAdminProtocol) {}

  async handle(httpRequest: httpRequest): Promise<httpResponse> {
    try {
      const headers = httpRequest.req.headers["authorization"];

      if (!headers) {
        throw new HeadersNotFoundError();
      }

      const token = headers && headers.split(" ")[1];

      await this.jwtVerifyToken.checkAdmin(token);

      return okResponse();
    } catch (error) {
      return badResponse(error);
    }
  }
}
