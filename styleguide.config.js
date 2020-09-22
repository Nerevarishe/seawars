// const path = require("path");

module.exports = {
  components: "src/components/**/[A-Z]*.js",
  ignore: [
    "**/*Styled.js",
    "**/*Position.js",
    "**/Fonts.js",
    "**/GlobalStyle.js",
  ],
  // template: {
  //   head: {
  //     links: [
  //       {
  //         rel: "stylesheet",
  //         href:
  //           "INSERT FONT CDN LINK",
  //       },
  //     ],
  //   },
  // },
  // styleguideComponents: {
  //   Wrapper: path.join(__dirname, "src/styled-components/theme/Theme.js"),
  // },
};
