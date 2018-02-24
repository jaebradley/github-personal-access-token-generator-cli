import inquirer from 'inquirer';

import {
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
} from '../scopes';

const REPOSITORY_FULL_ACCESS = 'Full control of all repositories';
const ORGANIZATION_FULL_ACCESS = 'Full control of orgs and teams';
const PUBLIC_KEY_FULL_ACCESS = 'Full control of user public keys';
const REPOSITORY_HOOK_FULL_ACCESS = 'Full control of repository hooks';
const CREATE_GISTS = 'Create gists';
const ACCESS_NOTIFICATIONS = 'Access notifications';
const USER_FULL_ACCESS = 'Update all user data';
const DELETE_REPOSITORIES = 'Delete repositories';
const DISCUSSIONS_FULL_ACCESS = 'Read and write team discussions';
const GPG_KEYS_FULL_ACCESS = 'Full control of user gpg keys';

const choices = [
  REPOSITORY_FULL_ACCESS,
  ORGANIZATION_FULL_ACCESS,
  PUBLIC_KEY_FULL_ACCESS,
  REPOSITORY_HOOK_FULL_ACCESS,
  CREATE_GISTS,
  ACCESS_NOTIFICATIONS,
  USER_FULL_ACCESS,
  DELETE_REPOSITORIES,
  DISCUSSIONS_FULL_ACCESS,
  GPG_KEYS_FULL_ACCESS,
];

const defaults = [
  REPOSITORY_FULL_ACCESS,
];

const choicesToScopes = Object.freeze({
  [REPOSITORY_FULL_ACCESS]: REPOSITORY_SCOPE.EVERYTHING,
  [ORGANIZATION_FULL_ACCESS]: ORGANIZATION_SCOPE.EVERYTHING,
  [PUBLIC_KEY_FULL_ACCESS]: PUBLIC_KEY_SCOPE.EVERYTHING,
  [REPOSITORY_HOOK_FULL_ACCESS]: REPOSITORY_HOOK_SCOPE.EVERYTHING,
  [CREATE_GISTS]: GIST_SCOPE,
  [ACCESS_NOTIFICATIONS]: NOTIFICATIONS_SCOPE,
  [USER_FULL_ACCESS]: USER_SCOPE.EVERYTHING,
  [DELETE_REPOSITORIES]: DELETE_REPOSITORY_SCOPE,
  [DISCUSSIONS_FULL_ACCESS]: DISCUSSION_SCOPE.EVERYTHING,
  [GPG_KEYS_FULL_ACCESS]: GPG_KEY_SCOPE.EVERYTHING,
});

const promptBasicPermissions = async () => {
  const { permissions } = await inquirer.prompt([
    {
      name: 'permissions',
      message: 'Select your personal access token permissions',
      type: 'checkbox',
      default: defaults,
      choices,
    },
  ]);

  return { scopes: permissions.map(permission => choicesToScopes[permission]) };
};

export default promptBasicPermissions;
