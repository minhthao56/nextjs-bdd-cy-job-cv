// const I18NextHttpBackend = require("i18next-http-backend/cjs");

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de"],
  },
  // use: [I18NextHttpBackend],
  // serializeConfig: false,
  // debug: true,
  // backend: {
  //   loadPath: "http://localhost:3002/locales/{{lng}}/{{ns}}.json",
  // },
  reloadOnPrerender: true,
};
