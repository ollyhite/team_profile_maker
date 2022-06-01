const Employee = require("../lib/Employee");

describe('Employee class',()=>{
    it('test for name, id, email',()=>{
        const employee = new Employee("jerry", "1", "jerry@gmail.com");
        expect(typeof employee.name).toBe("string")
        expect(typeof employee.id).toBe("string")
        expect(typeof employee.email).toBe("string")
    })
    it("is getName have name", ()=>{
        const employee = new Employee("jerry", "1", "jerry@gmail.com");
        const {name} = employee;
        expect(employee.getName()).toBe(name);
    })
    it("is getID have name", ()=>{
        const employee = new Employee("jerry", "1", "jerry@gmail.com");
        const {id} = employee;
        expect(employee.getId()).toBe(id);
    })
    it("is getEmail have name", ()=>{
        const employee = new Employee("jerry", "1", "jerry@gmail.com");
        const {email} = employee;
        expect(employee.getEmail()).toBe(email);
    })
    it("getRole", ()=>{
        const employee = new Employee("jerry", "1", "jerry@gmail.com");
        const {name} = employee;
        expect(employee.getRole()).toBe("Employee");
    })
})