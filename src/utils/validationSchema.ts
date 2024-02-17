import { parse, ValiError } from "valibot";

export const validationSchema = (schema: any, data: object) => {
  try {
    return parse(schema, data);
  } catch (error) {
    if (error instanceof ValiError) {
      console.error(error.message);
    }
  }
};
