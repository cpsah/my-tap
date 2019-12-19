module.exports = {
  root: true,
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true
  },
  extends: ["plugin:react/recommended", "standard", "eslint:recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 'off',
    "react/jsx-uses-vars": 1,
    "react/display-name": 1,
    // enable additional rules
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],

    // disable rules from base configurations
    "no-console": "off",
    "no-unexpected-multiline": "warn",
    "space-before-function-paren": ["error", {
      "anonymous": "always",
      "named": "ignore",
      "asyncArrow": "always"
    }]
  }
};
