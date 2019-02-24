// https://stylelint.io/user-guide/configuration/
module.exports = {
  extends: 'stylelint-config-standard',

  // https://stylelint.io/user-guide/rules/
  rules: {
    'block-no-empty': null,
    'unit-whitelist': ['px', 'rem', '%']
  }
}
