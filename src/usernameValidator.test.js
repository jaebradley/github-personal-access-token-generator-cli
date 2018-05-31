import GitHub, { getForUser } from '@octokit/rest';
import isValidUsername from './usernameValidator';

jest.mock('@octokit/rest');

describe('usernameValidator', () => {
  beforeEach(() => {
    GitHub.mockClear();
    getForUser.mockClear();
  });

  it('successfully validates username', async () => {
    expect(await isValidUsername('jaebaebae')).toBe(true);
    expect(getForUser).toHaveBeenCalledTimes(1);
    expect(getForUser).toHaveBeenCalledWith({ username: 'jaebaebae' });
  });

  it('fails to validate username', async () => {
    expect(await isValidUsername()).toBe(false);
    expect(getForUser).toHaveBeenCalledTimes(1);
    expect(getForUser).toHaveBeenCalledWith({ username: undefined });
    expect(getForUser).toThrowError('Unknown username: undefined');
  });
});
