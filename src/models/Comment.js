module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      message: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      underscored: true,
      timestamps: true,
    }
  );
  Comment.associate = (db) => {
    Comment.belongsTo(db.User, {
      foreignKey: {
        name: "userId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    });
    Comment.belongsTo(db.Column, {
      foreignKey: {
        name: "columnId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    });
  };
  return Comment;
};
