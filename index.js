const inquirer = require('inquirer');
const fs = require('fs');

let ranId = () => {
    let id = Math.floor(Math.random() * 100050)
    return id;
}

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
// 
    {
        type: 'input',
        name: 'Dependencies',
        message: 'List any dependencies (if applicable)'
    },
    {
        type: 'input',
        name: 'Contributions',
        message: 'Who or what contributions were made?',
        default: 'N/A'
    },
    {
        type: 'input',
        name: 'Init',
        message: 'List any commands (if any) to start the project.',
        default: 'N/A'
    }
])
    .then(data => {
        fs.writeFileSync("./Dist/README.md", `
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