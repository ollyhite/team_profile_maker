const Manager = require("../lib/Manager")

describe(('Manager class'),()=>{
    // it(('test for officeNum',()=>{
    //     const manager = new Manager("jerry", "1", "jerry@gmail.com","123");
    //     const {officeNum} = manager
    //     expect(typeof manager.officeNum).toBe("string");
    // }))
    describe(('getRole'),()=>{
        it("getRole", ()=>{
        const manager = new Manager("jerry", "1", "jerry@gmail.com","123");
        expect(manager.getRole()).toBe("Manager");
        })
    })
})