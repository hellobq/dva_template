// https://stylelint.io/user-guide/configuration/

module.exports = {
  "extends": [
    "stylelint-config-recommended",
    "stylelint-config-styled-components"
  ],
  "processors": [
    "stylelint-processor-styled-components"
  ],

  // https://stylelint.io/user-guide/rules/
  "rules": {
    "color-no-invalid-hex": true,
    "unit-whitelist": ['px', 'rem', '%']
  }
}
