import { object, number, integer, string, optional } from "valibot";

export const createUrl = {
  body: object({
    url: string(),
    userId: optional(number([integer()])),
  }),
};
