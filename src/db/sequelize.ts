import { Sequelize } from "sequelize";

import { db } from "../config/environment";

const connection = new Sequelize(db.name, db.user, db.password, {
  host: db.host,
  dialect: "mysql",
});

connection
  .authenticate()
  .then(() => {
    console.log("Conexión establecida correctamente.");
  })
  .catch((error) => {
    console.error("No se pudo conectar a la base de datos:", error);
  });

export default connection;
