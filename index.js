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
// MANAGER
    <div class="card employee-card">
      <div class="card-header">
          <h2 class="card-title">mary</h2>
          <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: bob</li>
              <li class="list-group-item">Email: <a href="mailto:${data.mgr-email}">${data.mgr-email}</a></li>
              <li class="list-group-item">Office number: sadfyey</li>
          </ul>
      </div>
  </div>
  
// ENGINEER
    <div class="card employee-card">
      <div class="card-header">
          <h2 class="card-title">mary</h2>
          <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: bob</li>
              <li class="list-group-item">Email: <a href="mailto:${data.e1-email}">${data.e1-email}</a></li>
              <li class="list-group-item">Office number: sadfyey</li>
          </ul>
      </div>
  </div>

// INTERN
    <div class="card employee-card">
      <div class="card-header">
          <h2 class="card-title">mary</h2>
          <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: bob</li>
              <li class="list-group-item">Email: <a href="mailto:${data.i1-email}">${data.i1-email}</a></li>
              <li class="list-group-item">Office number: sadfyey</li>
          </ul>
      </div>
  </div>
</body>
</html>
        `)
    })