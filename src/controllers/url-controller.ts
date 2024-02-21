import { Request, Response, NextFunction } from "express";

const getUrl = async (req: Request, res: Response, _next: NextFunction) => {
  const { hash } = req.params;
  console.log(hash);

  if (hash) res.json({ status: "ok", message: "fino" });
  else res.json({ status: "ok", message: "no" });
};

const createUrl = async (req: Request, res: Response, _next: NextFunction) => {
  const { body: data } = req;
  console.log(data);
};

export default { getUrl, createUrl };
