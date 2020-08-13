process.env.NODE_ENV = process.env.NODE_ENV || "development";

const environment = require("./environment");

const customDevConf = {
  devServer: {
    open: true,
    openPage: `http://localhost:${process.env.PORT}`,
  },
};

environment.config.merge(customDevConf);

module.exports = environment.toWebpackConfig();
