// @flow

/* eslint-disable no-unused-vars */
const OFF = 0;
const WARNING = 1;
const ERROR = 2;
/* eslint-enable no-unused-vars */

module.exports = {
  rules: {
    'adeira/no-internal-flow-type': OFF, // This rule doesn't make sense here, since imports are not available to flow-typed defs
    'flowtype/no-existential-type': OFF, // Some flow-types modules still use this 😞
    'import/no-extraneous-dependencies': OFF,
    'flowtype/no-dupe-keys': OFF,
  },
};
