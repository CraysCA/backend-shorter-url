export = (sequelize, DataTypes) => {
  const Url = sequelize.define(
    "url",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      url: {
        type: DataTypes.STRING,
      },
      hash: {
        type: DataTypes.STRING,
      },
      userId: {
        type: DataTypes.INTEGER,
      },
    },

    {
      timestamps: true,
      underscored: true,
      freezeTableName: true,
    }
  );
  Url.sync({ force: true });

  return Url;
};
