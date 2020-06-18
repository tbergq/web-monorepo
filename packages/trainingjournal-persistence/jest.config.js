// @flow

const path = require('path');
const { findMonorepoRoot } = require('@adeira/monorepo-utils');

module.exports = {
  rootDir: __dirname,
  testEnvironment: 'node',
  setupFilesAfterEnv: ([
    path.join(findMonorepoRoot(), 'scripts', 'setupTrainingjournalTests.js'),
  ] /*: string[] */),
};