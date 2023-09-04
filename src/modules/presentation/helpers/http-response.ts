import { httpResponse } from "../protocols/http";

export const badResponse = (error: Error): httpResponse => ({
  statusCode: 400,
  body: error.message,
});

export const okResponse = (data?: any): httpResponse => ({
  statusCode: 200,
  body: data,
});
