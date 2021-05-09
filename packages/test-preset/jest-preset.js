// @flow

const path = require('path');

const distPath = path.join(__dirname, 'dist');

module.exports = {
  setupFilesAfterEnv: [path.join(distPath, 'setupTestingLibrary.js')],
  testMatch: ['**/__tests__/**/?(*.)+(spec|test).js'],
};
