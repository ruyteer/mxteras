import { MercadoPagoRequest } from "../views/mercado-pago";

export interface IMercadoPagoCreateOrder {
  create(data: MercadoPagoRequest): Promise<any>;
}

export interface MercadoPagoResponse {
  status: number;
  status_detail: string;
  id: string;
  date: string;
  paymentMethod: string;
}
