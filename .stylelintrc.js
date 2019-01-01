// https://stylelint.io/user-guide/configuration/

module.exports = {
  "processors": [
    "stylelint-processor-styled-components"
  ],
  "extends": [
    "stylelint-config-recommended",
    "stylelint-config-styled-components"
  ],

  // https://stylelint.io/user-guide/rules/
  "rules": {
    "color-no-invalid-hex": true,
    "unit-whitelist": ['px', 'rem', '%']
  }
}
