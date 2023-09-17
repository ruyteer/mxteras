import { CreatePixPreference } from "../../../../infra/services/mercado-pago/create-pix-preference";
import { CreatePreference } from "../../../../infra/services/mercado-pago/create-preference";
import { CreatePreferenceController } from "../../../../presentation/controllers/preference/create-preference";
import { Controller } from "../../../../presentation/protocols";

export const makeCreatePreference = (): Controller => {
  const mercadoPago = new CreatePreference();
  const pix = new CreatePixPreference();
  return new CreatePreferenceController(mercadoPago, pix);
};
