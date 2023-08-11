module.exports = {
  babel: {
    plugins: ["@emotion"],
    presets: [
      "@emotion/babel-preset-css-prop",
      [
        "@babel/preset-react",
        { runtime: "automatic", importSource: "@emotion/react" },
      ],
      "@babel/preset-typescript",
    ],
  },
};
