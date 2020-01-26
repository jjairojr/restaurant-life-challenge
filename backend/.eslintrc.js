module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: ["airbnb-base", "prettier"],
  plugins: ["prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    //pluggin prettier for error
    "prettier/prettier": "error",

    //for not use this in class
    "class-methods-use-this": "off",

    //modified params in sequelize
    "no-param-reassign": "off",

    //write variables in camelCase or not
    "camelcase": "off",

    //enable unused vars
    "no-unused-vars": ["error", { argsIgnorePattern: "next" }]
  }
};