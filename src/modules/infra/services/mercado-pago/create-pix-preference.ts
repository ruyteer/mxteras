import mercadopago from "mercadopago";
import { ICreatePreference } from "../../../presentation/contracts/create-preference";
import { PreferenceProduct } from "../../../presentation/views/preference-product";

export class CreatePixPreference implements ICreatePreference {
  async create(product: PreferenceProduct): Promise<any> {
    const orderId = Math.floor(Math.random() * Math.pow(10, 6));
    mercadopago.configure({ access_token: process.env.MERCADO_PAGO_ACESS });
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
          success: `https://www.mxteras.com/payment/success/${orderId}`,
          failure: `https:www.mxteras.com/error`,
          pending: `https://www.mxteras.com/payment/success/${orderId}`,
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

      // const mpResponse = await mercadopago.payment.create({
      //   transaction_amount: product.price,
      //   payment_method_id: "pix",
      //   installments: 1,

      //   payer: {
      //     email: product.userEmail,
      //   },
      //   callback_url: `https://mxteras.com/payment/success/${orderId}`,
      // });

      return mpResponse;
    } catch (error) {
      throw new Error(error);
    }
  }
}
