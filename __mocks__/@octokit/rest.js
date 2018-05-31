const getForUser = jest.fn(({ username } = {}) => {
  if (!username) {
    throw new Error(`Unknown username: ${username}`);
  }
});

const constructor = jest.fn(() => ({
  users: { getForUser },
}));

const GitHub = constructor;

export default GitHub;
export { getForUser };
