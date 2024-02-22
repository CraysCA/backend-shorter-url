import { Router } from "express";

import urlRoutes from "./url-routes";

const router = Router();

export default (dependencies) => {
  router.use("/link", urlRoutes(dependencies));

  return router;
};
