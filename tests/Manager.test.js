const Manager = require("../lib/Manager")

describe(('Manager class'),()=>{
    it('test for officeNum is string', () => {
        const info = {name:"jerry", id:"1", email:"jerry@gmail.com", officeNum:"123"}
        const manager = new Manager(info);
        expect(typeof manager.officeNum).toBe("string");
    })
    describe(('getRole'),()=>{
        it("getRole should return Manager", ()=>{
        const manager = new Manager("jerry", "1", "jerry@gmail.com","123");
        expect(manager.getRole()).toBe("Manager");
        })
    })
    describe(('managerSection'),()=>{
        it("check managerSection is return string or not", ()=>{
        const manager = new Manager("jerry", "1", "jerry@gmail.com","jerry123");
        expect(typeof manager.managerSection()).toBe("string");
        })
    })
})