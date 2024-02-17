export = (sequelize, DataTypes) => {
  const Url = sequelize.define(
    "Url",
    {
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
      timestamps: false,
      underscored: true,
      freezeTableName: true,
    }
  );
  // Url.sync({ force: true });

  return Url;
};
