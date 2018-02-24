#!/usr/bin/env node

import program from 'commander';

import pkg from '../../package.json';

program.version(pkg.version)
  .description('Create GitHub Personal Access Tokens from the command line')
  .command('create', 'Create GitHub Personal Access Token')
  .parse(process.argv);
