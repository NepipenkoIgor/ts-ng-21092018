module.exports = (config) => {
  config.set({
    frameworks: ["jasmine", "karma-typescript"],
    files: [
      "**/*.ts"
    ],
    preprocessors: {
      "**/*.ts": ["karma-typescript"]
    },
    reporters: ["progress", "karma-typescript"],
    browsers: ["ChromeHeadless"],
    singleRun: "true",
    //logLevel: config.LOG_DEBUG,
    karmaTypescriptConfig: {
      tsconfig: "./tsconfig.json",
      reports: {
        "html": "coverage",
        "text-summary": ""
      }
    }
  })
}