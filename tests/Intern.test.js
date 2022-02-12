const Intern = require('../lib/Intern');

test("testing the getSchool function", function(){
    let school = "clown"
    let Int = new Intern('name', 'id', 'email', school) 
    expect(Int.school).toBe("clown")
})