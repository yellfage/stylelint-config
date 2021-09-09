/* eslint-disable import/no-commonjs */

module.exports = {
  rules: {
    /**
     * Possible errors
     */

    // https://stylelint.io/user-guide/rules/list/color-no-invalid-hex
    'color-no-invalid-hex': [true],

    // https://stylelint.io/user-guide/rules/list/font-family-no-duplicate-names
    'font-family-no-duplicate-names': [true, { ignoreFontFamilyNames: [] }],

    // https://stylelint.io/user-guide/rules/list/font-family-no-missing-generic-family-keyword
    'font-family-no-missing-generic-family-keyword': [
      true,
      { ignoreFontFamilies: [] },
    ],

    // https://stylelint.io/user-guide/rules/list/named-grid-areas-no-invalid
    'named-grid-areas-no-invalid': [true],

    // https://stylelint.io/user-guide/rules/list/function-calc-no-unspaced-operator
    'function-calc-no-unspaced-operator': [true],

    // https://stylelint.io/user-guide/rules/list/function-linear-gradient-no-nonstandard-direction
    'function-linear-gradient-no-nonstandard-direction': [true],

    // https://stylelint.io/user-guide/rules/list/string-no-newline
    'string-no-newline': [true],

    // https://stylelint.io/user-guide/rules/list/unit-no-unknown
    'unit-no-unknown': [true, { ignoreUnits: [], ignoreFunctions: [] }],

    // https://stylelint.io/user-guide/rules/list/property-no-unknown
    'property-no-unknown': [
      true,
      {
        ignoreProperties: [],
        ignoreSelectors: [],
        ignoreAtRules: [],
        checkPrefixed: true,
      },
    ],

    // https://stylelint.io/user-guide/rules/list/keyframe-declaration-no-important
    'keyframe-declaration-no-important': [true],

    // https://stylelint.io/user-guide/rules/list/declaration-block-no-duplicate-custom-properties
    'declaration-block-no-duplicate-custom-properties': [true],

    // https://stylelint.io/user-guide/rules/list/declaration-block-no-duplicate-properties
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: 'consecutive-duplicates-with-different-values',
        ignoreProperties: [],
      },
    ],

    // https://stylelint.io/user-guide/rules/list/declaration-block-no-shorthand-property-overrides
    'declaration-block-no-shorthand-property-overrides': [true],

    // https://stylelint.io/user-guide/rules/list/block-no-empty
    'block-no-empty': [true, { ignore: [] }],

    // https://stylelint.io/user-guide/rules/list/selector-pseudo-class-no-unknown
    'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: [] }],

    // https://stylelint.io/user-guide/rules/list/selector-pseudo-element-no-unknown
    'selector-pseudo-element-no-unknown': [true, { ignorePseudoElements: [] }],

    // https://stylelint.io/user-guide/rules/list/selector-type-no-unknown
    'selector-type-no-unknown': [
      true,
      { ignore: ['custom-elements'], ignoreTypes: [] },
    ],

    // https://stylelint.io/user-guide/rules/list/media-feature-name-no-unknown
    'media-feature-name-no-unknown': [true, { ignoreMediaFeatureNames: [] }],

    // https://stylelint.io/user-guide/rules/list/at-rule-no-unknown
    'at-rule-no-unknown': [true, { ignoreAtRules: [] }],

    // https://stylelint.io/user-guide/rules/list/comment-no-empty
    'comment-no-empty': [true],

    // https://stylelint.io/user-guide/rules/list/no-descending-specificity
    'no-descending-specificity': [true, { ignore: [] }],

    // https://stylelint.io/user-guide/rules/list/no-duplicate-at-import-rules
    'no-duplicate-at-import-rules': [true],

    // https://stylelint.io/user-guide/rules/list/no-duplicate-selectors
    'no-duplicate-selectors': [true, { disallowInList: false }],

    // https://stylelint.io/user-guide/rules/list/no-empty-source
    'no-empty-source': [true],

    // https://stylelint.io/user-guide/rules/list/no-extra-semicolons
    'no-extra-semicolons': [true],

    // https://stylelint.io/user-guide/rules/list/no-invalid-double-slash-comments
    'no-invalid-double-slash-comments': [true],

    // https://stylelint.io/user-guide/rules/list/no-invalid-position-at-import-rule
    'no-invalid-position-at-import-rule': [true],

    /**
     * Limit language features
     */

    // https://stylelint.io/user-guide/rules/list/alpha-value-notation
    'alpha-value-notation': ['number', { exceptProperties: [] }],

    // https://stylelint.io/user-guide/rules/list/hue-degree-notation
    'hue-degree-notation': ['angle'],

    // https://stylelint.io/user-guide/rules/list/color-function-notation
    'color-function-notation': ['legacy'],

    // https://stylelint.io/user-guide/rules/list/color-named
    'color-named': ['never', { ignore: [], ignoreProperties: [] }],

    // https://stylelint.io/user-guide/rules/list/color-no-hex
    // 'color-no-hex': [true],

    // https://stylelint.io/user-guide/rules/list/length-zero-no-unit
    'length-zero-no-unit': [true, { ignore: [] }],

    // https://stylelint.io/user-guide/rules/list/font-weight-notation
    'font-weight-notation': ['numeric', { ignore: [] }],

    // https://stylelint.io/user-guide/rules/list/function-allowed-list
    // 'function-allowed-list': [],

    // https://stylelint.io/user-guide/rules/list/function-disallowed-list
    'function-disallowed-list': [],

    // https://stylelint.io/user-guide/rules/list/function-url-no-scheme-relative
    // 'function-url-no-scheme-relative': [true],

    // https://stylelint.io/user-guide/rules/list/function-url-scheme-allowed-list
    // 'function-url-scheme-allowed-list': [],

    // https://stylelint.io/user-guide/rules/list/function-url-scheme-disallowed-list
    'function-url-scheme-disallowed-list': [],

    // https://stylelint.io/user-guide/rules/list/keyframes-name-pattern
    'keyframes-name-pattern': [/^([a-z][a-z0-9]*)(-[a-z0-9]+)*$/],

    // https://stylelint.io/user-guide/rules/list/number-max-precision
    'number-max-precision': [2, { ignoreUnits: [] }],

    // https://stylelint.io/user-guide/rules/list/time-min-milliseconds
    'time-min-milliseconds': [1, { ignore: [] }],

    // https://stylelint.io/user-guide/rules/list/unit-allowed-list
    // 'unit-allowed-list': [],

    // https://stylelint.io/user-guide/rules/list/unit-disallowed-list
    'unit-disallowed-list': [],

    // https://stylelint.io/user-guide/rules/list/shorthand-property-no-redundant-values
    'shorthand-property-no-redundant-values': [true],

    // https://stylelint.io/user-guide/rules/list/value-no-vendor-prefix
    'value-no-vendor-prefix': [true, { ignoreValues: [] }],

    // https://stylelint.io/user-guide/rules/list/custom-property-pattern
    'custom-property-pattern': [/^([a-z][a-z0-9]*)(-[a-z0-9]+)*$/],

    // https://stylelint.io/user-guide/rules/list/property-allowed-list
    // 'property-allowed-list': [],

    // https://stylelint.io/user-guide/rules/list/property-disallowed-list
    'property-disallowed-list': [],

    // https://stylelint.io/user-guide/rules/list/property-no-vendor-prefix
    'property-no-vendor-prefix': [true, { ignoreProperties: [] }],

    // https://stylelint.io/user-guide/rules/list/declaration-block-no-redundant-longhand-properties
    'declaration-block-no-redundant-longhand-properties': [
      true,
      { ignoreShorthands: [] },
    ],

    // https://stylelint.io/user-guide/rules/list/declaration-no-important
    'declaration-no-important': [true],

    // https://stylelint.io/user-guide/rules/list/declaration-property-unit-allowed-list
    'declaration-property-unit-allowed-list': [
      { '/^animation/': ['s'], '/^transition/': ['s'] },
      { ignore: [] },
    ],

    // https://stylelint.io/user-guide/rules/list/declaration-property-unit-disallowed-list
    // 'declaration-property-unit-disallowed-list': [],

    // https://stylelint.io/user-guide/rules/list/declaration-property-value-allowed-list
    // 'declaration-property-value-allowed-list': [],

    // https://stylelint.io/user-guide/rules/list/declaration-property-value-disallowed-list
    // 'declaration-property-value-disallowed-list': [],

    // https://stylelint.io/user-guide/rules/list/declaration-block-single-line-max-declarations
    'declaration-block-single-line-max-declarations': [1],

    // https://stylelint.io/user-guide/rules/list/selector-attribute-name-disallowed-list
    'selector-attribute-name-disallowed-list': ['class', 'id'],

    // https://stylelint.io/user-guide/rules/list/selector-attribute-operator-allowed-list
    // 'selector-attribute-operator-allowed-list': [],

    // https://stylelint.io/user-guide/rules/list/selector-attribute-operator-disallowed-list
    'selector-attribute-operator-disallowed-list': [],

    // https://stylelint.io/user-guide/rules/list/selector-class-pattern
    'selector-class-pattern': [
      /^([a-z][a-z0-9]*)(-[a-z0-9]+)*$/,
      { resolveNestedSelectors: false },
    ],

    // https://stylelint.io/user-guide/rules/list/selector-combinator-allowed-list
    // 'selector-combinator-allowed-list': [],

    // https://stylelint.io/user-guide/rules/list/selector-combinator-disallowed-list
    'selector-combinator-disallowed-list': [],

    // https://stylelint.io/user-guide/rules/list/selector-disallowed-list
    'selector-disallowed-list': [],

    // https://stylelint.io/user-guide/rules/list/selector-id-pattern
    'selector-id-pattern': [/^([a-z][a-z0-9]*)(-[a-z0-9]+)*$/],

    // https://stylelint.io/user-guide/rules/list/selector-max-attribute
    'selector-max-attribute': [3, { ignoreAttributes: [] }],

    // https://stylelint.io/user-guide/rules/list/selector-max-class
    'selector-max-class': [3],

    // https://stylelint.io/user-guide/rules/list/selector-max-combinators
    'selector-max-combinators': [3],

    // https://stylelint.io/user-guide/rules/list/selector-max-compound-selectors
    'selector-max-compound-selectors': [3],

    // https://stylelint.io/user-guide/rules/list/selector-max-empty-lines
    'selector-max-empty-lines': [0],

    // https://stylelint.io/user-guide/rules/list/selector-max-id
    'selector-max-id': [0, { ignoreContextFunctionalPseudoClasses: [] }],

    // https://stylelint.io/user-guide/rules/list/selector-max-pseudo-class
    'selector-max-pseudo-class': [3],

    // https://stylelint.io/user-guide/rules/list/selector-max-specificity
    'selector-max-specificity': ['0,3,0'],

    // https://stylelint.io/user-guide/rules/list/selector-max-type
    // 'selector-max-type': [3, { ignore: [], ignoreTypes: [] }],

    // https://stylelint.io/user-guide/rules/list/selector-max-universal
    'selector-max-universal': [1],

    // https://stylelint.io/user-guide/rules/list/selector-nested-pattern
    // 'selector-nested-pattern': [],

    // https://stylelint.io/user-guide/rules/list/selector-no-qualifying-type
    // 'selector-no-qualifying-type': [true, { ignore: [] }],

    // https://stylelint.io/user-guide/rules/list/selector-no-vendor-prefix
    'selector-no-vendor-prefix': [true, { ignoreSelectors: [] }],

    // https://stylelint.io/user-guide/rules/list/selector-pseudo-class-allowed-list
    // 'selector-pseudo-class-allowed-list': [],

    // https://stylelint.io/user-guide/rules/list/selector-pseudo-class-disallowed-list
    'selector-pseudo-class-disallowed-list': [],

    // https://stylelint.io/user-guide/rules/list/selector-pseudo-element-allowed-list
    // 'selector-pseudo-element-allowed-list': [],

    // https://stylelint.io/user-guide/rules/list/selector-pseudo-element-colon-notation
    'selector-pseudo-element-colon-notation': ['double'],

    // https://stylelint.io/user-guide/rules/list/selector-pseudo-element-disallowed-list
    'selector-pseudo-element-disallowed-list': [],

    // https://stylelint.io/user-guide/rules/list/media-feature-name-allowed-list
    // 'media-feature-name-allowed-list': [],

    // https://stylelint.io/user-guide/rules/list/media-feature-name-disallowed-list
    'media-feature-name-disallowed-list': [],

    // https://stylelint.io/user-guide/rules/list/media-feature-name-no-vendor-prefix
    'media-feature-name-no-vendor-prefix': [true],

    // https://stylelint.io/user-guide/rules/list/media-feature-name-value-allowed-list
    // 'media-feature-name-value-allowed-list': [],

    // https://stylelint.io/user-guide/rules/list/custom-media-pattern
    'custom-media-pattern': [/^([a-z][a-z0-9]*)(-[a-z0-9]+)*$/],

    // https://stylelint.io/user-guide/rules/list/at-rule-allowed-list
    // 'at-rule-allowed-list': [],

    // https://stylelint.io/user-guide/rules/list/at-rule-disallowed-list
    'at-rule-disallowed-list': [],

    // https://stylelint.io/user-guide/rules/list/at-rule-no-vendor-prefix
    'at-rule-no-vendor-prefix': [true],

    // https://stylelint.io/user-guide/rules/list/at-rule-property-required-list
    // 'at-rule-property-required-list': [],

    // https://stylelint.io/user-guide/rules/list/comment-pattern
    'comment-pattern': [''],

    // https://stylelint.io/user-guide/rules/list/comment-word-disallowed-list
    'comment-word-disallowed-list': [],

    // https://stylelint.io/user-guide/rules/list/max-nesting-depth
    'max-nesting-depth': [3, { ignore: [], ignoreAtRules: [] }],

    // https://stylelint.io/user-guide/rules/list/no-unknown-animations
    // 'no-unknown-animations': [true],

    /**
     * Stylistic issues
     */

    // https://stylelint.io/user-guide/rules/list/color-hex-case
    'color-hex-case': ['lower'],

    // https://stylelint.io/user-guide/rules/list/color-hex-length
    'color-hex-length': ['long'],

    // https://stylelint.io/user-guide/rules/list/font-family-name-quotes
    'font-family-name-quotes': ['always-unless-keyword'],

    // https://stylelint.io/user-guide/rules/list/function-comma-newline-after
    // 'function-comma-newline-after': [],

    // https://stylelint.io/user-guide/rules/list/function-comma-newline-before
    // 'function-comma-newline-before': [],

    // https://stylelint.io/user-guide/rules/list/function-comma-space-after
    'function-comma-space-after': ['always-single-line'],

    // https://stylelint.io/user-guide/rules/list/function-comma-space-before
    'function-comma-space-before': ['never'],

    // https://stylelint.io/user-guide/rules/list/function-max-empty-lines
    'function-max-empty-lines': [0],

    // https://stylelint.io/user-guide/rules/list/function-name-case
    'function-name-case': ['lower', { ignoreFunctions: [] }],

    // https://stylelint.io/user-guide/rules/list/function-parentheses-newline-inside
    'function-parentheses-newline-inside': ['always-multi-line'],

    // https://stylelint.io/user-guide/rules/list/function-parentheses-space-inside
    'function-parentheses-space-inside': ['never'],

    // https://stylelint.io/user-guide/rules/list/function-url-quotes
    'function-url-quotes': ['always'],

    // https://stylelint.io/user-guide/rules/list/function-whitespace-after
    'function-whitespace-after': ['always'],

    // https://stylelint.io/user-guide/rules/list/number-leading-zero
    'number-leading-zero': ['always'],

    // https://stylelint.io/user-guide/rules/list/number-no-trailing-zeros
    'number-no-trailing-zeros': [true],

    // https://stylelint.io/user-guide/rules/list/string-quotes
    'string-quotes': ['single', { avoidEscape: true }],

    // https://stylelint.io/user-guide/rules/list/unit-case
    'unit-case': ['lower'],

    // https://stylelint.io/user-guide/rules/list/value-keyword-case
    'value-keyword-case': [
      'lower',
      { ignoreKeywords: [], ignoreProperties: [], ignoreFunctions: [] },
    ],

    // https://stylelint.io/user-guide/rules/list/value-list-comma-newline-after
    'value-list-comma-newline-after': ['never-multi-line'],

    // https://stylelint.io/user-guide/rules/list/value-list-comma-newline-before
    'value-list-comma-newline-before': ['never-multi-line'],

    // https://stylelint.io/user-guide/rules/list/value-list-comma-space-after
    'value-list-comma-space-after': ['always-single-line'],

    // https://stylelint.io/user-guide/rules/list/value-list-comma-space-before
    'value-list-comma-space-before': ['never'],

    // https://stylelint.io/user-guide/rules/list/value-list-max-empty-lines
    'value-list-max-empty-lines': [0],

    // https://stylelint.io/user-guide/rules/list/custom-property-empty-line-before
    // 'custom-property-empty-line-before': [
    //   'always',
    //   {
    //     except: [],
    //     ignore: [],
    //   },
    // ],

    // https://stylelint.io/user-guide/rules/list/property-case
    'property-case': ['lower'],

    // https://stylelint.io/user-guide/rules/list/declaration-bang-space-after
    'declaration-bang-space-after': ['never'],

    // https://stylelint.io/user-guide/rules/list/declaration-bang-space-before
    'declaration-bang-space-before': ['always'],

    // https://stylelint.io/user-guide/rules/list/declaration-colon-newline-after
    'declaration-colon-newline-after': ['always-multi-line'],

    // https://stylelint.io/user-guide/rules/list/declaration-colon-space-after
    'declaration-colon-space-after': ['always-single-line'],

    // https://stylelint.io/user-guide/rules/list/declaration-colon-space-before
    'declaration-colon-space-before': ['never'],

    // https://stylelint.io/user-guide/rules/list/declaration-empty-line-before
    // 'declaration-empty-line-before': ['never'],

    // https://stylelint.io/user-guide/rules/list/declaration-block-semicolon-newline-after
    'declaration-block-semicolon-newline-after': ['always'],

    // https://stylelint.io/user-guide/rules/list/declaration-block-semicolon-newline-before
    'declaration-block-semicolon-newline-before': ['never-multi-line'],

    // https://stylelint.io/user-guide/rules/list/declaration-block-semicolon-space-after
    'declaration-block-semicolon-space-after': ['always-single-line'],

    // https://stylelint.io/user-guide/rules/list/declaration-block-semicolon-space-before
    'declaration-block-semicolon-space-before': ['never'],

    // https://stylelint.io/user-guide/rules/list/declaration-block-trailing-semicolon
    'declaration-block-trailing-semicolon': ['always', { ignore: [] }],

    // https://stylelint.io/user-guide/rules/list/block-closing-brace-empty-line-before
    'block-closing-brace-empty-line-before': ['never', { except: [] }],

    // https://stylelint.io/user-guide/rules/list/block-closing-brace-newline-after
    'block-closing-brace-newline-after': ['always', { ignoreAtRules: [] }],

    // https://stylelint.io/user-guide/rules/list/block-closing-brace-newline-before
    'block-closing-brace-newline-before': ['always'],

    // https://stylelint.io/user-guide/rules/list/block-closing-brace-space-after
    'block-closing-brace-space-after': [
      'always-single-line',
      'always-multi-line',
    ],

    // https://stylelint.io/user-guide/rules/list/block-closing-brace-space-before
    // 'block-closing-brace-space-before': [],

    // https://stylelint.io/user-guide/rules/list/block-opening-brace-newline-after
    'block-opening-brace-newline-after': ['always'],

    // https://stylelint.io/user-guide/rules/list/block-opening-brace-newline-before
    // 'block-opening-brace-newline-before': [],

    // https://stylelint.io/user-guide/rules/list/block-opening-brace-space-after
    'block-opening-brace-space-after': [
      'always-single-line',
      'always-multi-line',
    ],

    // https://stylelint.io/user-guide/rules/list/block-opening-brace-space-before
    'block-opening-brace-space-before': ['always'],

    // https://stylelint.io/user-guide/rules/list/selector-attribute-brackets-space-inside
    'selector-attribute-brackets-space-inside': ['never'],

    // https://stylelint.io/user-guide/rules/list/selector-attribute-operator-space-after
    'selector-attribute-operator-space-after': ['never'],

    // https://stylelint.io/user-guide/rules/list/selector-attribute-operator-space-before
    'selector-attribute-operator-space-before': ['never'],

    // https://stylelint.io/user-guide/rules/list/selector-attribute-quotes
    'selector-attribute-quotes': ['always'],

    // https://stylelint.io/user-guide/rules/list/selector-combinator-space-after
    'selector-combinator-space-after': ['always'],

    // https://stylelint.io/user-guide/rules/list/selector-combinator-space-before
    'selector-combinator-space-before': ['always'],

    // https://stylelint.io/user-guide/rules/list/selector-descendant-combinator-no-non-space
    'selector-descendant-combinator-no-non-space': [true],

    // https://stylelint.io/user-guide/rules/list/selector-pseudo-class-case
    'selector-pseudo-class-case': ['lower'],

    // https://stylelint.io/user-guide/rules/list/selector-pseudo-class-parentheses-space-inside
    'selector-pseudo-class-parentheses-space-inside': ['never'],

    // https://stylelint.io/user-guide/rules/list/selector-pseudo-element-case
    'selector-pseudo-element-case': ['lower'],

    // https://stylelint.io/user-guide/rules/list/selector-type-case
    'selector-type-case': ['lower', { ignoreTypes: [] }],

    // https://stylelint.io/user-guide/rules/list/selector-list-comma-newline-after
    'selector-list-comma-newline-after': ['always-multi-line'],

    // https://stylelint.io/user-guide/rules/list/selector-list-comma-newline-before
    'selector-list-comma-newline-before': ['never-multi-line'],

    // https://stylelint.io/user-guide/rules/list/selector-list-comma-space-after
    'selector-list-comma-space-after': ['always-single-line'],

    // https://stylelint.io/user-guide/rules/list/selector-list-comma-space-before
    'selector-list-comma-space-before': ['never'],

    // https://stylelint.io/user-guide/rules/list/rule-empty-line-before
    'rule-empty-line-before': [
      'always',
      { except: ['after-single-line-comment', 'first-nested'] },
    ],

    // https://stylelint.io/user-guide/rules/list/media-feature-colon-space-after
    'media-feature-colon-space-after': ['always'],

    // https://stylelint.io/user-guide/rules/list/media-feature-colon-space-before
    'media-feature-colon-space-before': ['never'],

    // https://stylelint.io/user-guide/rules/list/media-feature-name-case
    'media-feature-name-case': ['lower'],

    // https://stylelint.io/user-guide/rules/list/media-feature-parentheses-space-inside
    'media-feature-parentheses-space-inside': ['never'],

    // https://stylelint.io/user-guide/rules/list/media-feature-range-operator-space-after
    'media-feature-range-operator-space-after': ['always'],

    // https://stylelint.io/user-guide/rules/list/media-feature-range-operator-space-before
    'media-feature-range-operator-space-before': ['always'],

    // https://stylelint.io/user-guide/rules/list/media-query-list-comma-newline-after
    'media-query-list-comma-newline-after': ['always-multi-line'],

    // https://stylelint.io/user-guide/rules/list/media-query-list-comma-newline-before
    // 'media-query-list-comma-newline-before': [],

    // https://stylelint.io/user-guide/rules/list/media-query-list-comma-space-after
    'media-query-list-comma-space-after': ['always-single-line'],

    // https://stylelint.io/user-guide/rules/list/media-query-list-comma-space-before
    'media-query-list-comma-space-before': ['never'],

    // https://stylelint.io/user-guide/rules/list/at-rule-empty-line-before
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['first-nested', 'blockless-after-same-name-blockless'],
        ignore: ['after-comment'],
        ignoreAtRules: [],
      },
    ],

    // https://stylelint.io/user-guide/rules/list/at-rule-name-case
    'at-rule-name-case': ['lower'],

    // https://stylelint.io/user-guide/rules/list/at-rule-name-newline-after
    // 'at-rule-name-newline-after': [],

    // https://stylelint.io/user-guide/rules/list/at-rule-name-space-after
    'at-rule-name-space-after': ['always-single-line'],

    // https://stylelint.io/user-guide/rules/list/at-rule-semicolon-newline-after
    'at-rule-semicolon-newline-after': ['always'],

    // https://stylelint.io/user-guide/rules/list/at-rule-semicolon-space-before
    'at-rule-semicolon-space-before': ['never'],

    // https://stylelint.io/user-guide/rules/list/comment-empty-line-before
    'comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-comment', 'stylelint-commands'],
        ignoreComments: [],
      },
    ],

    // https://stylelint.io/user-guide/rules/list/comment-whitespace-inside
    'comment-whitespace-inside': 'always',

    // https://stylelint.io/user-guide/rules/list/indentation
    'indentation': [
      2,
      {
        baseIndentLevel: 1,
        indentInsideParens: 'once-at-root-twice-in-block',
        indentClosingBrace: false,
        except: [],
        ignore: [],
      },
    ],

    // https://stylelint.io/user-guide/rules/list/linebreaks
    'linebreaks': ['unix'],

    // https://stylelint.io/user-guide/rules/list/max-empty-lines
    'max-empty-lines': [1, { ignore: [] }],

    // https://stylelint.io/user-guide/rules/list/max-line-length
    'max-line-length': [
      80,
      { ignore: [], ignorePattern: /https?:\/\/[0-9,a-z]*.*/ },
    ],

    // https://stylelint.io/user-guide/rules/list/no-eol-whitespace
    'no-eol-whitespace': [true, { ignore: [] }],

    // https://stylelint.io/user-guide/rules/list/no-missing-end-of-source-newline
    'no-missing-end-of-source-newline': [true],

    // https://stylelint.io/user-guide/rules/list/no-empty-first-line
    'no-empty-first-line': [true],

    // https://stylelint.io/user-guide/rules/list/unicode-bom
    'unicode-bom': ['never'],

    // https://stylelint.io/user-guide/rules/list/no-irregular-whitespace
    'no-irregular-whitespace': [true],
  },
}
