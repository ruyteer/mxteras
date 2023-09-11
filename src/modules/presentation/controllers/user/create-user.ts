import { CreateUserService } from "../../../data/services/user/create-user";
import { badResponse, okResponse } from "../../helpers/http-response";
import { Controller, httpRequest, httpResponse } from "../../protocols";

export class CreateUserController implements Controller {
  constructor(private readonly createUserUseCase: CreateUserService) {}

  async handle(httpRequest?: httpRequest): Promise<httpResponse> {
    try {
      const { nickname, email, number, name } = httpRequest.req.body;

      const user = await this.createUserUseCase.create({
        name,
        nickname,
        email,
        number,
      });

      return okResponse(user.id);
    } catch (error) {
      return badResponse(error);
    }
  }
}
