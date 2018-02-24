#!/usr/bin/env node

/* eslint-disable no-console */

import createPersonalAccessToken from '../createPersonalAccessToken';

const execute = async () => {
  try {
    await createPersonalAccessToken();
  } catch (e) {
    console.error('😞  Rut ro, an error occurred');
    console.error(e);
  }
};

execute();
