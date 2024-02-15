import { Sequelize } from "sequelize";

import { db } from "../config/environment";
if (db.name && db.user && db.password && db.host && db.dialect) {
  const sequelize = new Sequelize(db.name, db.user, db.password, {
    host: db.host,
    dialect: "mysql",
  });

  const testConnection = async () => {
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  };

  testConnection();
}
