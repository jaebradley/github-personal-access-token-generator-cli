import inquirer from 'inquirer';

import { ORGANIZATION_SCOPE } from '../scopes';

const FULL_CONTROL = 'Full control of orgs and teams';
const READ_AND_WRITE = 'Read and write org and team membership';
const READ = 'Read org and team membership';

const choices = [
  { name: READ_AND_WRITE },
  { name: READ },
];

const defaults = [READ];

const choicesToScopeValue = Object.freeze({
  READ_AND_WRITE: ORGANIZATION_SCOPE.READ_AND_WRITE,
  READ: ORGANIZATION_SCOPE.READ,
});

const promptOrganizationPermissions = async () => {
  const { organizationPermissions } = await inquirer.prompt([
    {
      name: 'organizationPermissions',
      message: 'Select your organization permissions',
      type: 'checkbox',
      default: defaults,
      choices,
    },
  ]);

  const repositoryScopes = repositoryPermissions.map(permission => choicesToScopeValue[permission]);
  return { repositoryScopes };
};

export default promptRepositoryPermissions;
