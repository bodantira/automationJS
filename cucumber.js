module.exports = {
    default: {
      require: ["features/step-definitions/*.js"],
      format: ["json:reports/cucumber.json"],
      paths: ["features/*.feature"]
    }
  };
  