import GitHub from '@octokit/rest';

const isValidUsername = async (username) => {
  try {
    await new GitHub().users.getForUser({ username });
    return true;
  } catch (e) {
    return false;
  }
};

export default isValidUsername;
