import mercadopago from "mercadopago";
import { ICreatePreference } from "../../../presentation/contracts/create-preference";
import { PreferenceProduct } from "../../../presentation/views/preference-product";

export class CreatePixPreference implements ICreatePreference {
  async create(product: PreferenceProduct): Promise<any> {
    mercadopago.configure({
      access_token: process.env.MERCADO_PAGO_ACESS,
    });
    const orderId = Math.floor(Math.random() * Math.pow(10, 6));

    try {
      const mpResponse = await mercadopago.preferences.create({
        items: [
          {
            title: product.name,
            unit_price: product.price,
            quantity: product.quantity,
            picture_url: product.image,
          },
        ],
        binary_mode: true,
        back_urls: {
          success: `http://localhost:5173/payment/success/${orderId}`,
        },
        auto_return: "all",
        payment_methods: {
          excluded_payment_types: [
            {
              id: "credit_card",
            },
            {
              id: "debit_card",
            },
            { id: "atm" },
            {
              id: "ticket",
            },
          ],

          installments: 1,
          default_payment_method_id: "pix",
        },
      });

      return mpResponse;
    } catch (error) {
      throw new Error(error);
    }
  }
}
