module.exports = {
  customSyntax: 'postcss-html',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue'
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'at-rule-no-unknown': null,
    'number-leading-zero': 'never',
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'no-empty-source': true,
    'max-empty-lines': 2,
    'no-descending-specificity': null,
    'no-missing-end-of-source-newline': null,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep']
      }
    ]
  }
}
