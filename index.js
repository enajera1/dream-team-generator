const inquirer = require('inquirer');


const checkCheck = () => {
  return inquirer.prompt({
    type: 'input',
    name: 'check',
    message: 'Is this thing on?'
  })
} 

checkCheck(); 