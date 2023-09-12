import { DeleteUserService } from "../../../data/services/user/delete-user";
import { badResponse, okResponse } from "../../helpers/http-response";
import { Controller, httpRequest, httpResponse } from "../../protocols";

export class DeleteUserController implements Controller {
  constructor(private readonly deleteUserUseCase: DeleteUserService) {}

  async handle(httpRequest?: httpRequest): Promise<httpResponse> {
    try {
      const { id } = httpRequest.req.params;

      await this.deleteUserUseCase.delete(id);

      return okResponse();
    } catch (error) {
      return badResponse(error);
    }
  }
}
