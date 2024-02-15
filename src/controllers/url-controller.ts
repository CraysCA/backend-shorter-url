import { Request, Response, NextFunction } from "express";

const getUrl = async (req: Request, res: Response, _next: NextFunction) => {
  const { hash } = req.params;
  console.log(hash);

  if (hash) res.json({ status: "ok", message: "fino" });
  else res.json({ status: "ok", message: "no" });
};

export default { getUrl };
