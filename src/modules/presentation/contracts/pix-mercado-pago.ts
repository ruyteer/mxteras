import { PixMercadoPagoRequest } from "../views/mercado-pago";

export interface PixMercadoPago {
  createPix(data: PixMercadoPagoRequest): Promise<PixMercadoPagoResponse>;
}

export interface PixMercadoPagoResponse {
  status: string;
  status_detail: string;
  id: string;
  date: string;
  paymentMethod: string;
  paymentUrl: string;
}
