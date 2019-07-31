const OFF = 0 // eslint-disable-line no-unused-vars
const WARN = 1 // eslint-disable-line no-unused-vars
const ERROR = 2 // eslint-disable-line no-unused-vars

module.exports = {
  root: true,
  env: {
    browser: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint", "prettier",
  ],
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
  ],
  rules: {
    "global-require": OFF,
    "no-nested-ternary": OFF,
    "prettier/prettier": ERROR,
    "react/jsx-filename-extension": OFF,
    "react/react-in-jsx-scope": OFF,
    "jsx-a11y/anchor-is-valid": OFF,
    "@typescript-eslint/explicit-member-accessibility": OFF,
    "@typescript-eslint/explicit-function-return-type": OFF,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".ts", ".tsx"],
      },
    },
  },
}
