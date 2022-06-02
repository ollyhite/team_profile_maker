const Employee = require("../lib/Employee");

describe('Employee class',()=>{
    it('test for name, id, email is string',()=>{
        const employee = new Employee("jerry", "1", "jerry@gmail.com");
        expect(typeof employee.name).toBe("string")
        expect(typeof employee.id).toBe("string")
        expect(typeof employee.email).toBe("string")
    })
    it('test for id should over 0',()=>{
        const employee = new Employee("jerry", "1", "jerry@gmail.com");
        const idNum = parseInt(employee.id);
        expect(idNum).toBeGreaterThan(0);
    })
    it('test for email format is correct',()=>{
        const employee = new Employee("jerry", "1", "jerry@gmail.com");
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(employee.email)
        expect(valid).toBe(true);
    })
    it('test for email format is incorrect',()=>{
        const employee = new Employee("jerry", "1", "jerrygmail.com");
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(employee.email)
        expect(valid).toBe(false);
    })
    describe(('getName'),()=>{
        it("is getName return same name value", ()=>{
        const employee = new Employee("jerry", "1", "jerry@gmail.com");
        const {name} = employee;
        expect(employee.getName()).toBe(name);
        })
    })
    describe(('getId'),()=>{
        it("is getId return same id value", ()=>{
        const employee = new Employee("jerry", "1", "jerry@gmail.com");
        const {id} = employee;
        expect(employee.getId()).toBe(id);
    })
    })
    describe(('getEmail'),()=>{
        it("is getEmail return same email value", ()=>{
        const employee = new Employee("jerry", "1", "jerry@gmail.com");
        const {email} = employee;
        expect(employee.getEmail()).toBe(email);
        })
    })
    describe(('getRole'),()=>{
        it("getRole should return Employee", ()=>{
        const employee = new Employee("jerry", "1", "jerry@gmail.com");
        expect(employee.getRole()).toBe("Employee");
        })
    })
})