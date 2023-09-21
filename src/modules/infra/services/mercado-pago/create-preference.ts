import mercadopago from "mercadopago";
import { ICreatePreference } from "../../../presentation/contracts/create-preference";
import { PreferenceProduct } from "../../../presentation/views/preference-product";

export class CreatePreference implements ICreatePreference {
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
        back_urls: {
          success: `https://www.mxteras.com/payment/success/${orderId}`,
          failure: `https:www.mxteras.com/error`,
          pending: `https://www.mxteras.com/payment/success/${orderId}`,
        },
      });

      return mpResponse;
    } catch (error) {
      throw new Error(error);
    }
  }
}
