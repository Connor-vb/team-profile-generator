const Manager = require('../lib/Manager');

test("testing the getOfficeNumber function", function(){
    let officenum = "7"
    let Mgr = new Manager('name', 'id', 'email', officenum) 
    expect(Mgr.officeNumber).toBe("7")
})