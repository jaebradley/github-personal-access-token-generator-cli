import inquirer from 'inquirer';

const validateAuthenticationCode = code => !!code && code.length > 0;

const promptTwoFactorAuthenticationCode = async () => (
  inquirer.prompt([
    {
      name: 'twoFactorAuthenticationCode',
      validate: validateAuthenticationCode,
      type: 'password',
      message: 'Enter your two-factor authentication code',
    },
  ])
);

export { validateAuthenticationCode, promptTwoFactorAuthenticationCode };
