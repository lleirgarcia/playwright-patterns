// cucumber.js
module.exports = {
  default: {
    paths: ["cucumber/features/"],
    require: ["cucumber/steps/**/*.ts"],
    requireModule: ["ts-node/register"],
    formatOptions: {
      snippetInterface: "async-await"
    },
    format: [
      "progress-bar",
      "summary",
      ["html", "cucumber-reports/cucumber-report.html"],
      "json:cucumber-reports/cucumber-report.json"
    ]
  }
};
