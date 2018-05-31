import GitHub from '@octokit/rest';
import {
  READ_ONLY_SCOPE,
  REPOSITORY_SCOPE,
  ORGANIZATION_SCOPE,
  PUBLIC_KEY_SCOPE,
  REPOSITORY_HOOK_SCOPE,
  GIST_SCOPE,
  NOTIFICATIONS_SCOPE,
  USER_SCOPE,
  DELETE_REPOSITORY_SCOPE,
  DISCUSSION_SCOPE,
  GPG_KEY_SCOPE,
} from './scopes';

const scopeToApiValue = Object.freeze({
  [READ_ONLY_SCOPE]: '',
  [REPOSITORY_SCOPE.EVERYTHING]: 'repo',
  [ORGANIZATION_SCOPE.EVERYTHING]: 'admin:org',
  [PUBLIC_KEY_SCOPE.EVERYTHING]: 'admin:public_key',
  [REPOSITORY_HOOK_SCOPE.EVERYTHING]: 'admin:repo_hook',
  [GIST_SCOPE]: 'gist',
  [NOTIFICATIONS_SCOPE]: 'notifications',
  [USER_SCOPE.EVERYTHING]: 'user',
  [DELETE_REPOSITORY_SCOPE]: 'delete_repo',
  [DISCUSSION_SCOPE.EVERYTHING]: 'write:discussion',
  [GPG_KEY_SCOPE.EVERYTHING]: 'admin:gpg_key',
});

const generateToken = async ({
  username,
  password,
  twoFactorAuthenticationCode,
  reason,
  scopes,
}) => {
  const apiValues = scopes.map(scope => scopeToApiValue[scope]);
  const client = new GitHub();
  client.authenticate({
    type: 'basic',
    username,
    password,
  });

  const parameters = {
    note: reason,
    scopes: apiValues,
  };

  if (twoFactorAuthenticationCode) {
    parameters.headers = { 'X-GitHub-OTP': twoFactorAuthenticationCode };
  }

  const response = await client.authorization.create(parameters);

  return {
    token: response.data.token,
    id: response.data.id,
  };
};

export default generateToken;
