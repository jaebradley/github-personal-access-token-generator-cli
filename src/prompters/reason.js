import inquirer from 'inquirer';

const promptReason = async () => (
  inquirer.prompt([
    {
      name: 'reason',
      message: 'Reason for Personal Access Token',
      type: 'input',
      validate: answer => answer && answer.length > 0,
    },
  ])
);

export default promptReason;
