const username = process.env.SONAR_SCANNER_USERNAME;
const password = process.env.SONAR_SCANNER_PASSWORD;
const token = process.env.SONAR_SCANNER_TOKEN;
const scanner = require("sonarqube-scanner");
scanner(
  {
    serverUrl: "http://localhost:9000",

    token: "squ_b07fd4cb7a4bd41ae029b4f2ac9aded3f3ecfb21",
    options: {
      "sonar.sources": "./src",
    },
  },
  () => process.exit()
);