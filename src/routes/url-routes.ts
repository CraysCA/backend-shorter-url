import express from "express";
import urlController from "../controllers/url-controller";
const router = express();

router.get("/:hash", urlController.getUrl);

export default router;
