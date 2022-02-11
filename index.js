const inquirer = require('inquirer');
const fs = require('fs');

let ranId = () => {
    let id = Math.floor(Math.random() * 100050)
    return id;
}
// Employee questions
inquirer.prompt([
    // Manager
    {
        type: 'input',
        name: 'mgr-name',
        message: 'What is the managers name?'
    },
    {
        type: 'input',
        name: 'mgr-onum',
        message: 'What is the managers office number?'
    },
    {
        type: 'input',
        name: 'mgr-email',
        message: 'What is the managers email?'
    },
    {
        type: 'List',
        name: 'mgr-id',
        message: 'What is the managers ID number?',
        choices: [ranId(), ranId()]
    },
// intern 1
    {
        type: 'input',
        name: 'intern1',
        message: 'What is this interns name?'
    },
    {
        type: 'input',
        name: 'i1-email',
        message: 'What is this interns email?'
    },
    {
        type: 'input',
        name: 'i1-school',
        message: 'What school did this intern go to?'
    },
    {
        type: 'List',
        name: 'i1-id',
        message: 'What is this employees id?',
        choices: [ranId(), ranId()]
    }
// Engineer 1
    {
        type: 'input',
        name: 'engine1',
        message: 'What is this engineers name?'
    },
    {
        type: 'input',
        name: 'e1-email',
        message: 'What is this engineers email?'
    },
    {
        type: 'input',
        name: 'e1-github',
        message: 'What is this engineers GitHub?'
    },
    {
        type: 'List',
        name: 'e1-id',
        message: 'What is this employees id?',
        choices: [ranId(), ranId()]
    }
])
    .then(data => {
        fs.writeFileSync("./Dist/team-profile.html", `
# ${data.title}

## Description
${data.Description}

## GitHub
${data.GitHub}

## License
${data.License}

## Dependencies
${data.Dependencies}

## Contributions
${data.Contributions}

## Deployed Links


## Init
${data.Init}
        `)
    })