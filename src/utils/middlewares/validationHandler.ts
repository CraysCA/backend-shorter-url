import { Request, Response, NextFunction } from "express";
import { parse, ValiError } from "valibot";

export const validationHandler =
  (schema: any) => (req: Request, res: Response, next: NextFunction) => {
    try {
      const { body, params, query } = req;

      if (schema.body) parse(schema.body, body);
      if (schema.query) parse(schema.query, query);
      if (schema.params) parse(schema.params, params);
      next();
    } catch (error) {
      if (error instanceof ValiError) {
        // const field = error?.issues[0]?.path[0].key ;
        //console.log(field);
        error.message = error.message.replace(/"/g, "");
        console.error(error.message);
        res.status(400).json({ success: false, message: error.message });
      }
    }
  };
