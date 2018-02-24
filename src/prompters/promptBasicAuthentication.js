import inquirer from 'inquirer';
import isValidUsername from '../usernameValidator';


const validateUsername = async (username) => {
  const isValid = await isValidUsername(username);

  if (isValid) {
    return true;
  }

  return `${username} is not a valid username`;
};

const validatePassword = (password) => {
  if (password && password.length > 0) {
    return true;
  }

  return 'Please enter a valid password';
};

const promptBasicAuthentication = async () => (
  inquirer.prompt([
    {
      name: 'username',
      message: 'Input your GitHub Username',
      validate: validateUsername,
      type: 'input',
    },
    {
      name: 'password',
      message: 'Input your GitHub password',
      validate: validatePassword,
      type: 'password',
    },
  ])
);

export {
  validateUsername,
  validatePassword,
  promptBasicAuthentication,
};
