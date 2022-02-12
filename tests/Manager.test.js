const Employee = require('../lib/Employee');

test("testing the getOfficeNumber function", function(){
    let officenum = "7"
    let Mgr = new Employee(officenum) 
    expect(Mgr.officenum).toBe("7")
})