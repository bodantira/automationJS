module.exports = {
    default: {
      require: ["features/step_definitions/*.js"],
      format: ["json:reports/cucumber_report.json"],
      tags: process.env.TAG || "@smoke" // Default to @smoke if no tag is provided
    }
  };
  