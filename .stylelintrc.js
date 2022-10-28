module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-recess-order',
  ],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'mixin',
          'include',
          'tailwind',
          'extend',
          'apply',
          'variants',
          'responsive',
          'screen',
        ],
      },
    ],
    'selector-pseudo-element-no-unknown': [true, { ignorePseudoElements: ['v-deep'] }],
  },
};
