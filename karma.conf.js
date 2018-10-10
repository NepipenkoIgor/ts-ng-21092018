module.exports = (config) => {
  config.set({
    frameworks: ["jasmine", "karma-typescript"],
    files: [
      { pattern: "./lesson/AleksyutinRoman/**/*.ts" }
    ],
    preprocessors: {
      "**/*.ts": ["karma-typescript"]
    },
    reporters: ["progress", "karma-typescript"],
    browsers: ["Chrome"],
    singleRun: "true",
    logLevel: config.LOG_DEBUG,
    karmaTypescriptConfig: {
      tsconfig: "./lesson/AleksyutinRoman/tsconfig.json",
      reports: {
        "html": "coverage",
        "text-summary": ""
      }
    }
  })
}