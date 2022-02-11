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
        name: 'mgrName',
        message: 'What is the managers name?'
    },
    {
        type: 'input',
        name: 'mgrOnum',
        message: 'What is the managers office number?'
    },
    {
        type: 'input',
        name: 'mgrEmail',
        message: 'What is the managers email?'
    },
    {
        type: 'List',
        name: 'mgrId',
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
        name: 'i1Email',
        message: 'What is this interns email?'
    },
    {
        type: 'input',
        name: 'i1School',
        message: 'What school did this intern go to?'
    },
    {
        type: 'List',
        name: 'i1Id',
        message: 'What is this employees id?',
        choices: [ranId(), ranId()]
    },
// Engineer 1
    {
        type: 'input',
        name: 'engine1',
        message: 'What is this engineers name?'
    },
    {
        type: 'input',
        name: 'e1Email',
        message: 'What is this engineers email?'
    },
    {
        type: 'input',
        name: 'e1Github',
        message: 'What is this engineers GitHub?'
    },
    {
        type: 'List',
        name: 'e1Id',
        message: 'What is this employees id?',
        choices: [ranId(), ranId()]
    }
])
    .then(data => {
        fs.writeFileSync("./dist/team-profile.html", `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="card employee-card">
      <div class="card-header">
          <h2 class="card-title">${data.mgrName}</h2>
          <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${data.mgrId}</li>
              <li class="list-group-item">Email: <a href="mailto:${data.mgrEmail}">${data.mgrEmail}</a></li>
              <li class="list-group-item">Office number: ${data.mgrOnum}</li>
          </ul>
      </div>
  </div>

    <div class="card employee-card">
      <div class="card-header">
          <h2 class="card-title">${data.engine1}</h2>
          <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Engineer</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${data.eqId}</li>
              <li class="list-group-item">Email: <a href="mailto:${data.e1Email}">${data.e1Email}</a></li>
              <li class="list-group-item">GitHub: ${data.e1Github}</li>
          </ul>
      </div>
  </div>

    <div class="card employee-card">
      <div class="card-header">
          <h2 class="card-title">${data.intern1}</h2>
          <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Intern</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${data.i1Id}</li>
              <li class="list-group-item">Email: <a href="mailto:${data.i1Email}">${data.i1Email}</a></li>
              <li class="list-group-item">School: ${data.i1School}</li>
          </ul>
      </div>
  </div>
  
</body>
</html>
        `)
    })