require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});

const define = {
  timestamps: true,
  underscored: true,
  underscoredAll: true,
}

module.exports = {
  development: {
    host: process.env.HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    dialect: process.env.DIALECT || "postgres",
    logging: false,
    operatorsAliases: process.env.OPERATORS_ALIASES,
    port: process.env.DB_PORT,
    define
  },
  test: {
    host: process.env.HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    dialect: process.env.DIALECT || "sqlite",
    logging: false,
    storage: process.env.STORAGE,
    operatorsAliases: process.env.OPERATORS_ALIASES,
    port: process.env.DB_PORT,
    define
  },
  production: {
    host: process.env.HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    dialect: process.env.DIALECT || "postgres",
    logging: false,
    operatorsAliases: process.env.OPERATORS_ALIASES,
    port: process.env.DB_PORT,
    define
  },
};
