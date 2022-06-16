module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "plugin:nuxt/recommended"
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    semi: [1, "always"],
    quotes: [2, "double"]
  }
};
