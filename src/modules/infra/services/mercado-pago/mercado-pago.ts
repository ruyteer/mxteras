import {
  IMercadoPagoCreateOrder,
  MercadoPagoResponse,
} from "../../../presentation/contracts/mercado-pago";
import mercadopago from "mercadopago";
import { MercadoPagoRequest } from "../../../presentation/views/mercado-pago";

export class MercadoPagoCreateOrder implements IMercadoPagoCreateOrder {
  async create(data: MercadoPagoRequest): Promise<MercadoPagoResponse> {
    mercadopago.configurations.setAccessToken(process.env.MERCADO_PAGO_ACESS);

    try {
      const mpResponse = await mercadopago.payment.save(data);

      const { status, status_detail, id, payment_type_id, date_approved } =
        mpResponse.body;

      const response = {
        status,
        status_detail,
        id,
        date: date_approved,
        paymentMethod: payment_type_id,
      };

      return response;
    } catch (error) {
      throw new Error(`MercadoPagoInternalError: ${error}`);
    }
  }
}
