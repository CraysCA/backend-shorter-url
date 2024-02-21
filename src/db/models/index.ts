import connection from "../sequelize";
import { DataTypes } from "sequelize";

import urlModels from "./url-models";

const models = {
  url: urlModels(connection, DataTypes),
};

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

export default models;
