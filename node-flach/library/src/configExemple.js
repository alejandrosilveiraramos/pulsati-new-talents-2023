
const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: "",
  database: "",
  username: "",
  password: "",
  host: "",
  port: ,
  dialectOptions: { connectTimeout: 30000 },
});

// syncronize with our table in DB. If the table is not aready exist, it creates.

sequelize.sync();

exports.getConfigDb = () => sequelize;