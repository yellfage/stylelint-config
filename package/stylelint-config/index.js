/* eslint-disable import/no-commonjs */

module.exports = {
  extends: ['./rules/core', './rules/order'].map(require.resolve),
  plugins: ['stylelint-no-unsupported-browser-features', 'stylelint-order'],
  rules: {
    'plugin/no-unsupported-browser-features': [
      true,
      {
        severity: 'warning',
      },
    ],
  },
}
