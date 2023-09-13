import mercadopago from "mercadopago";
import {
  PixMercadoPago,
  PixMercadoPagoResponse,
} from "../../../presentation/contracts/pix-mercado-pago";
import { PixMercadoPagoRequest } from "../../../presentation/views/mercado-pago";

export class CreatePixMercadoPago implements PixMercadoPago {
  async createPix(
    data: PixMercadoPagoRequest
  ): Promise<PixMercadoPagoResponse> {
    mercadopago.configurations.setAccessToken(process.env.MERCADO_PAGO_ACESS);

    try {
      const mpResponse = await mercadopago.payment.create({
        payer: data.formData.payer,
        payment_method_id: data.formData.payment_method_id,
        transaction_amount: data.formData.transaction_amount,
        installments: 1,
      });

      const {
        status,
        status_detail,
        id,
        payment_type_id,
        date_created,
        point_of_interaction,
      } = mpResponse.body;

      const response = {
        status,
        status_detail,
        id,
        date: date_created,
        paymentMethod: payment_type_id,
        paymentUrl: point_of_interaction.transaction_data.ticket_url,
      };

      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
}
