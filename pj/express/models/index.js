import { Sequelize } from "sequelize";
import configFile from "../config/config.json" assert { type: "json" };
import User from "./join.js";

const env = process.env.NODE_ENV || "development";

const config = configFile[env];
const db = { User };

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

User.init(sequelize);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
export { User };
