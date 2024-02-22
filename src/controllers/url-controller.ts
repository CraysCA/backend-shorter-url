import { Request, Response, NextFunction } from "express";

export default (dependencies) => {
  const { urlRepository } = dependencies.dependencies;

  const getUrl = async (req: Request, res: Response, _next: NextFunction) => {
    const { hash } = req.params;
    console.log(hash);

    if (hash) res.json({ status: "ok", message: "fino" });
    else res.json({ status: "ok", message: "no" });
  };

  const createUrl = async (req: Request, res: Response, next: NextFunction) => {
    const { body: data } = req;

    try {
      throw new Error("esto se jodio");
      const a = await urlRepository.createUrl(data);
      a
        ? res.status(201).json({ status: "ok", data: a })
        : res.status(400).json({ status: "error", data: {} });
    } catch (error) {
      next(error);
    }
  };

  return { getUrl, createUrl };
};
