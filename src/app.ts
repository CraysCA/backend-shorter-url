import express from "express";
import cors from "cors";
import routes from "./routes";

import { server } from "./config/environment";

import "./db/sequelize";
//import dependencies from "./config/dependencies";

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(server.port, () =>
  console.info(`Server up on port: ${server.port}`)
);
