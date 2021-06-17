require("dotenv").config();

module.exports = {
  development: {
    host: process.env.HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    dialect: process.env.DIALECT,
    operatorsAliases: process.env.OPERATORS_ALIASES,
    port: process.env.DB_PORT,
    define: {
      timestamps: process.env.TIMESTAMPS,
      underscored: process.env.UNDERSCORED,
      underscoredAll: process.env.UNDERSCORED_ALL,
    },
  },
  test: {
    host: process.env.HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    dialect: process.env.DIALECT,
    operatorsAliases: process.env.OPERATORS_ALIASES,
    port: process.env.DB_PORT,
    define: {
      timestamps: process.env.TIMESTAMPS,
      underscored: process.env.UNDERSCORED,
      underscoredAll: process.env.UNDERSCORED_ALL,
    },
  },
  production: {
    host: process.env.HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    dialect: process.env.DIALECT,
    operatorsAliases: process.env.OPERATORS_ALIASES,
    port: process.env.DB_PORT,
    define: {
      timestamps: process.env.TIMESTAMPS,
      underscored: process.env.UNDERSCORED,
      underscoredAll: process.env.UNDERSCORED_ALL,
    },
  },
};
