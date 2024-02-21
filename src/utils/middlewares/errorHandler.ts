import { Request, Response } from "express";

export const errorHandler = (error: any, _req: Request, res: Response) => {
  return res.status(500).send(error.message);
};
