// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// const fileName = 'README.md'

// TODO: Create an array of questions for user input
const questions = [
    'Project Title:',
    'Description:',
    'Installation Instructions:',
    'Usage Information:',
    'Contribution Guidelines:',
    'Test Instuctions:',
    'GitHub username:',
    'Email:'
];

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: questions[0]
        },
        {
            type: 'input',
            name: 'description',
            message: questions[1]
        },
        {            
            type: 'input',
            name: 'installinstructions',
            message: questions[2]
        },
        {            
            type: 'input',
            name: 'usage',
            message: questions[3]
        },
        {            
            type: 'input',
            name: 'contrib',
            message: questions[4]
        },
        {            
            type: 'input',
            name: 'testinstructions',
            message: questions[5]
        },
        {            
            type: 'input',
            name: 'githubUser',
            message: questions[6]
        },
        {            
            type: 'input',
            name: 'email',
            message: questions[7]
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choice a license:',
            choices: [
                'No License',
                'Apache License 2.0',
                'GNU General Public License v3.0',
                'MIT License',
                'BSD 2-Clause "Simplified" License',
                'BSD 3-Clause "New" or "Revised" License',
                'Boost Software License 1.0',
                'Creative Commons Zero v1.0 Universal',
                'Eclipse Public License 2.0',
                'GNU Affero General Public License v3.0',
                'GNU General Public License v2.0',
                'GNU Lesser Public License v2.1',
                'Mozilla Public License 2.0',
                'The Unlicense'
            ]
        }
    ])
    // .then((answers) => {
    //     console.log(answers);
    //     const markdown = generateMarkdown(answers);
    //     writeToFile('README.md', JSON.stringify(markdown));
    // })
};


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.err(err) : console.log('Success!') );

}

// TODO: Create a function to initialize app
const init = () => {
    promptUser()
        .then((answers) => {
            const markdown = generateMarkdown(answers);
            writeToFile('README.md', markdown);
        });
}



// Function call to initialize app
init();

