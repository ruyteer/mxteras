export type IPayer = {
  email: string;
  identification: {
    type: string;
    number: string;
  };
};

export type MercadoPagoRequest = {
  installments: number;
  issuer_id: string;
  payer: IPayer;
  payment_method_id: string;
  token: string;
  transaction_amount: number;
};
