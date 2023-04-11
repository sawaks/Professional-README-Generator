// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is your name of the project?',
},
{
    type: 'input',
    name: 'description',
    message: 'Write down the description of your project.',
},
{
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project? ',
},
{
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use. Include screenshots as needed.'
},
{
    type: 'input',
    name: 'credits',
    message: 'Write down your collaborators, if any, with links to their GitHub profiles.'
},
{
    type: 'input',
    name: 'contributing',
    message: 'what is the contribution info?',
},
{
    type: 'input',
    name: 'tests',
    message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.',
},
{
    type: 'list',
    name: 'license',
    message: 'Choose which license.',
    choices: ['MIT', 'ISC', 'GNUAGPLv3', 'GNUGPLv2', 'GNULGPLv3', 'Apache', 'BSD2', 'BSD3', 'Boost', 'CC0', 'Eclipse', 'Mozilla', 'Unlicense'],
    filter(val) {
        return val.toLowerCase();
    }
},
{
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?',

},
{
    type: 'input',
    name: 'email',
    message: 'Write down your Email.',

},
]
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return inquirer.prompt(data).then((data) => {

        const readmeOutput = markdown.generateMarkdown(data)
        console.log(readmeOutput);

        fs.writeFile(fileName, readmeOutput, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('file writing successful');
            }
        });
    })
}

// TODO: Create a function to initialize app
function init() {
    writeToFile('README.md', questions);
}

// Function call to initialize app
init();
