import { Router } from "express";

import urlRoutes from "./url-routes";

const router = Router();

router.use("/link", urlRoutes);

export default router;
