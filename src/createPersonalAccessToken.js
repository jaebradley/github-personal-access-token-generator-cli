import promptBasicPermissions from './prompters/basicPermissions';

const createPersonalAccessToken = async () => {
  const { scopes } = await promptBasicPermissions();
};

export default createPersonalAccessToken;
