import { MercadoPagoRequest } from "../views/mercado-pago";

export interface IMercadoPagoCreateOrder {
  create(data: MercadoPagoRequest): Promise<any>;
}
