const Employee = require('../lib/Employee');

test("testing the getSchool function", function(){
    let school = "clown"
    let Emp = new Employee(school) 
    expect(Emp.school).toBe("clown")
})