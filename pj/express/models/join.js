import Sequelize from "sequelize";

class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: Sequelize.STRING(255),
        },
        userid: {
          type: Sequelize.STRING(255),
        },
        pw: {
          type: Sequelize.STRING(255),
        },
      },
      {
        sequelize,
        modelName: "User",
        tableName: "Users",
        timestamps: true,
        paranoid: true,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
}

export default User;
