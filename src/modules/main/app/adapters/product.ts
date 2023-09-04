import { Request, Response } from "express";
import { Controller } from "../../../presentation/protocols";

export function productAdapt(controller: Controller) {
  return async (req: Request, res: Response) => {
    const response = await controller.handle({ req });

    res.status(response.statusCode).json(response.body);
  };
}
