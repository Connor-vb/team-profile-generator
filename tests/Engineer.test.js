const Engineer = require('../lib/Engineer');

test("testing the getGithub function", function(){
    let github = "Git"
    let Eng = new Engineer('name', 'id', 'email', github) 
    expect(Eng.github).toBe("Git")
})