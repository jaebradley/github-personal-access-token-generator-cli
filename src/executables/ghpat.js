#!/usr/bin/env node

import program from 'commander';

import pkg from '../../package.json';
import createPersonalAccessToken from '../createPersonalAccessToken';

const execute = async () => {
  try {
    await createPersonalAccessToken();
  } catch (e) {
    console.error('😞  Rut ro, an error occurred');
    console.error(e);
  }
};

program.version(pkg.version)
  .description('Create GitHub Personal Access Tokens from the command line')
  .parse(process.argv);

execute();
