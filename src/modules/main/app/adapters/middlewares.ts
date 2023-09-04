import { NextFunction, Request, Response } from "express";
import { Controller } from "../../../presentation/protocols";

export const middlewareAdapt = (controller: Controller) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const response = await controller.handle({ req });
    if (response.statusCode === 400) {
      res.status(400).json(response.body);
    } else {
      next();
    }
  };
};
