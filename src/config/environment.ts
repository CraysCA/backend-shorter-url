import "dotenv/config";
import { validationSchema } from "../utils/validationSchema";
import { serverSchema, dbSchema } from "./schemas/environment-schema";
import { Server, Database } from "../types";

export const server: Server = validationSchema(serverSchema, {
  port: Number(process.env.PORT),
});

export const db: Database = validationSchema(dbSchema, {
  name: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  dialect: process.env.DB_DIALECT,
});
