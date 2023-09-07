import { CheckAdminJwtService } from "../../../infra/services/jwt/check-admin";
import { VerifyIsAdmin } from "../../../presentation/middlewares/verify-is-admin";
import { Controller } from "../../../presentation/protocols";

export const makeMiddlewareProduct = (): Controller => {
  const jwtVerifyToken = new CheckAdminJwtService();
  return new VerifyIsAdmin(jwtVerifyToken);
};
