import { GetOneUserService } from "../../../data/services/user/get-one-user";
import { badResponse, okResponse } from "../../helpers/http-response";
import { Controller, httpRequest, httpResponse } from "../../protocols";

export class GetOneUserController implements Controller {
  constructor(private readonly getOneUserUseCase: GetOneUserService) {}

  async handle(httpRequest?: httpRequest): Promise<httpResponse> {
    try {
      const { id } = httpRequest.req.params;

      const user = await this.getOneUserUseCase.findOne(id);

      return okResponse(user);
    } catch (error) {
      return badResponse(error);
    }
  }
}
