import { write } from 'clipboardy';

import promptReason from './prompters/reason';
import promptBasicPermissions from './prompters/basicPermissions';
import { promptBasicAuthentication } from './prompters/basicAuthentication';
import { promptTwoFactorAuthenticationCode } from './prompters/twoFactorAuthenticationCode';

import generateToken from './tokenGenerator';

const isTwoFactorAuthenticationError = error => (
  !!error
    && !!error.message
    && JSON.parse(error.message).message === 'Must specify two-factor authentication OTP code.'
);

const createPersonalAccessToken = async () => {
  const { username, password } = await promptBasicAuthentication();
  const { scopes } = await promptBasicPermissions();
  const { reason } = await promptReason();

  try {
    const { token } = await generateToken({
      username,
      password,
      scopes,
      reason,
    });
    await write(token);
    console.log('💯  Copied personal access token to clipboard!');
  } catch (error) {
    if (isTwoFactorAuthenticationError(error)) {
      const { twoFactorAuthenticationCode } = await promptTwoFactorAuthenticationCode();
      const { token } = await generateToken({
        username,
        password,
        scopes,
        reason,
        twoFactorAuthenticationCode,
      });
      await write(token);
      console.log('💯  Copied personal access token to clipboard!');
    } else {
      throw error;
    }
  }
};

export default createPersonalAccessToken;
