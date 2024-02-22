import { Request, Response, NextFunction } from "express";
import { parse, ValiError } from "valibot";
import { Schema } from "../../types";

export const validationHandler =
  (schema: Schema) => (req: Request, res: Response, next: NextFunction) => {
    try {
      const { body, params, query } = req;

      if (schema.body) parse(schema.body, body);
      if (schema.query) parse(schema.query, query);
      if (schema.params) parse(schema.params, params);
      next();
    } catch (error) {
      if (error instanceof ValiError) {
        let field;
        if (error?.issues[0]?.path) field = error?.issues[0]?.path[0].key;
        error.message = error.message.replace(/"/g, "");
        const messageError = `${error.message}, field: ${field}`;
        console.error(messageError);
        res.status(400).json({ success: false, message: messageError });
      }
    }
  };
