const Engineer = require("../lib/Engineer");

describe('Engineer class',()=>{
    // it('test for name, id, email is string',()=>{
    //     const engineer = new Engineer("jerry", "1", "jerry@gmail.com");
    //     expect(typeof engineer.name).toBe("string")
    //     expect(typeof engineer.id).toBe("string")
    //     expect(typeof engineer.email).toBe("string")
    // })
    // it('test for github is string',()=>{
    //     const engineer = new Engineer("jerry", "1", "jerry@gmail.com","jerry123");
    //     expect(typeof engineer.github).toBe("string")
    // })
    // it('test for id should over 0',()=>{
    //     const engineer = new Engineer("jerry", "1", "jerry@gmail.com");
    //     const idNum = parseInt(engineer.id);
    //     expect(idNum).toBeGreaterThan(0);
    // })
    // it('test for email format is correct',()=>{
    //     const engineer = new Engineer("jerry", "1", "jerry@gmail.com");
    //     valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(engineer.email)
    //     expect(valid).toBe(true);
    // })
    // it('test for email format is incorrect',()=>{
    //     const engineer = new Engineer("jerry", "1", "jerrygmail.com");
    //     valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(engineer.email)
    //     expect(valid).toBe(false);
    // })
    // describe(('getName'),()=>{
    //     it("is getName have name", ()=>{
    //     const engineer = new Engineer("jerry", "1", "jerry@gmail.com");
    //     const {name} = engineer;
    //     expect(engineer.getName()).toBe(name);
    //     })
    // })
    // describe(('getId'),()=>{
    //     it("is getID have name", ()=>{
    //     const engineer = new Engineer("jerry", "1", "jerry@gmail.com");
    //     const {id} = engineer;
    //     expect(engineer.getId()).toBe(id);
    // })
    // })
    // describe(('getEmail'),()=>{
    //     it("is getEmail have name", ()=>{
    //     const engineer = new Engineer("jerry", "1", "jerry@gmail.com");
    //     const {email} = engineer;
    //     expect(engineer.getEmail()).toBe(email);
    //     })
    // })
    describe(('getGithub'),()=>{
        it("is getGithub return same github value", ()=>{
        const engineer = new Engineer("jerry", "1", "jerry@gmail.com", "jerry123");
        const {github} = engineer;
        expect(engineer.getGithub()).toBe(github);
        })
    })
    describe(('getRole'),()=>{
        it("getRole should return Engineer", ()=>{
        const engineer = new Engineer("jerry", "1", "jerry@gmail.com","jerry123");
        expect(engineer.getRole()).toBe("Engineer");
        })
    })
})