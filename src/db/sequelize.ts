import { Sequelize, DataTypes } from "sequelize";

import { db } from "../config/environment";

const sequelize = new Sequelize(db.name, db.user, db.password, {
  host: db.host,
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Conexión establecida correctamente.");
  })
  .catch((error) => {
    console.error("No se pudo conectar a la base de datos:", error);
  });
