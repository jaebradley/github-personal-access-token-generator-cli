import inquirer from 'inquirer';

import { REPOSITORY_SCOPE } from '../scopes';

const FULL_ACCESS = 'Full repository access';
const COMMIT_STATUS = 'Access commit status';
const DEPLOYMENT_STATUS = 'Access deployment status';
const PUBLIC_REPOSITORIES = 'Access public repositories';
const REPOSITORY_INVITATIONS = 'Access repository invitations';

const choices = [
  { name: FULL_ACCESS },
  { name: COMMIT_STATUS },
  { name: DEPLOYMENT_STATUS },
  { name: PUBLIC_REPOSITORIES },
  { name: REPOSITORY_INVITATIONS },
];

const defaults = [COMMIT_STATUS, DEPLOYMENT_STATUS, PUBLIC_REPOSITORIES, REPOSITORY_INVITATIONS];

const choicesToScopeValue = Object.freeze({
  FULL_ACCESS: REPOSITORY_SCOPE.EVERYTHING,
  COMMIT_STATUS: REPOSITORY_SCOPE.COMMIT_STATUS,
  DEPLOYMENT_STATUS: REPOSITORY_SCOPE.DEPLOYMENT_STATUS,
  PUBLIC_REPOSITORIES: REPOSITORY_SCOPE.PUBLIC_REPOSITORY,
  REPOSITORY_INVITATIONS: REPOSITORY_SCOPE.INVITE_COLLABORATORS,
});

const promptRepositoryPermissions = async () => {
  const { repositoryPermissions } = await inquirer.prompt([
    {
      name: 'repositoryPermissions',
      message: 'Select your repository code permissions',
      type: 'checkbox',
      default: defaults,
      choices,
    },
  ]);

  const repositoryScopes = repositoryPermissions.map(permission => choicesToScopeValue[permission]);
  return { repositoryScopes };
};

export default promptRepositoryPermissions;
