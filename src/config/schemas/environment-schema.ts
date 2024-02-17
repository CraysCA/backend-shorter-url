import { object, number, integer, string, optional } from "valibot";

export const serverSchema = object({
  port: number([integer()]),
});

export const dbSchema = object({
  name: string(),
  host: string(),
  port: optional(number([integer()])),
  user: string(),
  password: string(),
  dialect: string(),
});
