// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown.js');


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
    type: 'checkbox',
    name: 'contents',
    message: 'Choose which contents you use.',
    choices: ['Installation', 'Usage', 'Credits', 'Contributing', 'Tests', 'Questions', 'License'],

},
{
    type: 'editor',
    name: 'installation',
    message: 'What are the steps required to install your project? ',
    default: '1. \n2. \n3. \n4. ',
},
{
    type: 'editor',
    name: 'usage',
    message: 'Provide instructions and examples for use. Include screenshots as needed.',
    default: '1. \n2. \n3. \n4. ',
},
{
    type: 'editor',
    name: 'credits',
    message: 'Write down your collaborators, if any, with links to their GitHub profiles.',
    default: '* \n* \n* \n* ',
},
{
    type: 'editor',
    name: 'contributing',
    message: 'what is the contribution info?',
    default: '* \n* \n* \n* ',

},
{
    type: 'input',
    name: 'tests',
    message: 'Go the extra mile and write tests for your application.',
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
