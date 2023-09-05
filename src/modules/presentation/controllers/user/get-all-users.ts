import { GetAllUsersService } from "../../../data/services/user/get-all-users";
import { badResponse, okResponse } from "../../helpers/http-response";
import { Controller, httpRequest, httpResponse } from "../../protocols";

export class GetAllUserController implements Controller {
  constructor(private readonly getAllUserUseCase: GetAllUsersService) {}

  async handle(httpRequest?: httpRequest): Promise<httpResponse> {
    try {
      const users = await this.getAllUserUseCase.getAll();

      return okResponse(users);
    } catch (error) {
      return badResponse(error);
    }
  }
}
