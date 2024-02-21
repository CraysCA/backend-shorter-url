import express from "express";
import urlController from "../controllers/url-controller";
import { validationHandler } from "../utils/middlewares/validationHandler";
import { createUrl } from "../config/schemas/url-schema";

const router = express();

router.get("/:hash", urlController.getUrl);

router.post("/", validationHandler(createUrl), urlController.createUrl);

export default router;
