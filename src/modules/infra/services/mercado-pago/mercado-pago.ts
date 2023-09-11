import { IMercadoPagoCreateOrder } from "../../../presentation/contracts/mercado-pago";
import mercadopago from "mercadopago";
import { MercadoPagoRequest } from "../../../presentation/views/mercado-pago";

export class MercadoPagoCreateOrder implements IMercadoPagoCreateOrder {
  async create(data: MercadoPagoRequest): Promise<any> {
    mercadopago.configurations.setAccessToken(
      "TEST-368180986906150-011619-b1a5debe3fac59a66c2d8f6e9a18ae5e-513282474"
    );

    try {
      const mpResponse = await mercadopago.payment.save(data);

      const { status, status_detail, id } = mpResponse.body;

      console.log(mpResponse.body);

      const response = {
        status,
        status_detail,
        id,
      };

      return response;
    } catch (error) {
      throw new Error(`MercadoPagoError: ${error}`);
    }
  }
}
