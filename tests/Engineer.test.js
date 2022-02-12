const Employee = require('../lib/Employee');

test("testing the getGithub function", function(){
    let github = "Git"
    let Eng = new Engineer(github) 
    expect(Eng.github).toBe("Git")
})