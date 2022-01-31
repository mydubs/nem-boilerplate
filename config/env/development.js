const validation = require("./validation");

async function getConfig() {
  return new Promise((resolve, reject) => {
    const port = process.env.PORT || 3000;
    const dbCollection = process.env.MONGODB_COLLECTION || "express-dev";
    const mongourl = process.env.MONGODB_URL || 'mongodb://localhost"27017';
    const jwtSecret = process.env.JWT_SECRET || "jwtsecret";
    const appName = process.env.APP_NAME || "NEM Boilerplate";

    let config = {
      db: mongourl + dbCollection,
      port: port,
      secret: jwtSecret,
      env: "development",
      feUrl: null,
      appName: appName + " - DEVELOPMENT",
    };
    if (process.env.FE_URL) config.feUrl = process.env.FE_URL;
    if (process.env.APP_NAME) config.appName = process.env.APP_NAME;
    let checkConfig = validation(config);
    if (checkConfig) return resolve(config);
    else {
      console.log("DEVELOPMENT ENVIRONMENT CRASH!");
      process.exit();
    }
  });
}

module.exports.getConfig = getConfig;
