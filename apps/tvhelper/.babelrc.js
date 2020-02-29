// @flow

const plugins = [
  [
    "babel-plugin-styled-components",
    {
      "ssr": true
    }
  ],
  'relay',
  '@babel/plugin-proposal-class-properties',
];

const isMonorepoBabelNode = process.argv.includes('--isBabelNode');

const prodAndDev = {
  presets:  ['next/babel', ['@adeira/babel-preset-adeira', { target:  isMonorepoBabelNode ? 'js' : 'js-esm' }]],
  plugins,
};


module.exports = {
  env: {
    production: prodAndDev,
    development: prodAndDev,
    test: {
      presets: ['@adeira/babel-preset-adeira', 'next/babel'],
      plugins,
    },
  },
};

