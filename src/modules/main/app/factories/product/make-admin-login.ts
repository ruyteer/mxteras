import { CreateTokenJwt } from "../../../../infra/services/jwt/create-token";
import { AdminLoginController } from "../../../../presentation/controllers/user/admin-login";
import { Controller } from "../../../../presentation/protocols";

export const makeAdminLogin = (): Controller => {
  const createJwt = new CreateTokenJwt();

  return new AdminLoginController(createJwt);
};
