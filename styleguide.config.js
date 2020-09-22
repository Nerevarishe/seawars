const path = require("path");

module.exports = {
  components: "src/components/**/[A-Z]*.js",
  ignore: ["**/*Styled.js", "**/*Position.js", "**/Fonts.js"],
  require: [
    path.join(__dirname, "node_modules/normalize.css/normalize.css"),
  ],
  styleguideComponents: {
    Wrapper: path.join(__dirname, "src/react-styleguidist/Wrapper.js"),
  },
};
