import { Request, Response } from "express";

export default (error: any, _req: Request, res: Response) => {
  console.log("holaa");
  return res.status(500).json({ error: error.message });
};
