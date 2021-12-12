const envValidation = require("./validation");

async function getConfig() {
  return new Promise((resolve, reject) => {
    const port = process.env.PORT;
    const dbCollection = process.env.MONGODB_COLLECTION;
    const mongourl = process.env.MONGODB_URL;
    const jwtSecret = process.env.JWT_SECRET;

    let config = {
      db: mongourl + dbCollection,
      port: port,
      secret: jwtSecret,
      env: "production",
      appUrl: null,
      appName: "Express Boilerplate - PRODUCTION",
    };
    if (process.env.APP_URL) config.appUrl = process.env.APP_URL;
    if (process.env.APP_NAME) config.appName = process.env.APP_NAME;
    let checkConfig = validation(config);
    if (checkConfig) return resolve(config);
    else {
      console.log("PRODUCTION ENVIRONMENT CRASH!");
      process.exit();
    }
  });
}

module.exports.getConfig = getConfig;
