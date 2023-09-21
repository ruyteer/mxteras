import { ICreatePreference } from "../../contracts/create-preference";
import { badResponse, okResponse } from "../../helpers/http-response";
import { Controller, httpRequest, httpResponse } from "../../protocols";

export class CreatePreferenceController implements Controller {
  constructor(
    private readonly createPreference: ICreatePreference,
    private readonly createPixPreference: ICreatePreference
  ) {}

  async handle(httpRequest?: httpRequest): Promise<httpResponse> {
    try {
      const { name, description, image, price, quantity, method, email } =
        httpRequest.req.body;

      if (method === "pix") {
        const preference = await this.createPixPreference.create({
          name,
          description,
          image,
          price: parseFloat(price),
          quantity: parseInt(quantity),
          userEmail: email,
        });

        return okResponse(preference);
      }
      const preferenceId = await this.createPreference.create({
        name,
        description,
        image,
        price: parseFloat(price),
        quantity: parseInt(quantity),
        userEmail: email,
      });

      return okResponse(preferenceId);
    } catch (error) {
      return badResponse(error);
    }
  }
}
