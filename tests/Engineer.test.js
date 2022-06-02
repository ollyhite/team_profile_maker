const Engineer = require("../lib/Engineer");

describe('Engineer class',()=>{
    it('test for github is string',()=>{
        const info = {name:"jerry", id:"1", email:"jerry@gmail.com", github:"jerry123"}
        const engineer = new Engineer(info);
        expect(typeof engineer.github).toBe("string")
    })
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
    describe(('engineerSection'),()=>{
        it("check engineerSection is return string or not", ()=>{
        const engineer = new Engineer("jerry", "1", "jerry@gmail.com","jerry123");
        expect(typeof engineer.engineerSection()).toBe("string");
        })
    })
})