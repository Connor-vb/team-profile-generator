const Employee = require('../lib/Employee');

test("testing the get name function", function(){
    let name = "bob"
    let Emp = new Employee(name) 
    expect(Emp.name).toBe("bob")
})
