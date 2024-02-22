import express from "express";
import urlController from "../controllers/url-controller";
import { validationHandler } from "../utils/middlewares/validationHandler";
import { createUrl } from "../config/schemas/url-schema";

const router = express();

export default (dependencies) => {
  const controller = urlController(dependencies);

  router.get("/:hash", controller.getUrl);

  router.post("/", validationHandler(createUrl), controller.createUrl);

  return router;
};
