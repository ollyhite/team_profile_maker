const Intern = require("../lib/Intern")

describe(('Intern class'),()=>{
    it('test for school',()=>{
        const info = {name:"jerry", id:"1", email:"jerry@gmail.com", school:"DU"}
        const intern = new Intern(info);
        expect(typeof intern.school).toBe("string")
    })
    it('test for school not empty',()=>{
        const info = {name:"jerry", id:"1", email:"jerry@gmail.com", school:"DU"}
        const intern = new Intern(info);
        expect(intern.school.trim().length).toBeGreaterThan(0);
    })
    describe(('getSchool'),()=>{
        it("is getSchool return same school value", ()=>{
        const intern = new Intern("jerry", "1", "jerry@gmail.com", "DU");
        const {school} = intern;
        expect(intern.getSchool()).toBe(school);
        })
    })
    describe(('getRole'),()=>{
        it("getRole should return Intern", ()=>{
        const intern = new Intern("jerry", "1", "jerry@gmail.com");
        expect(intern.getRole()).toBe("Intern");
        })
    })
    describe(('internSection'),()=>{
        it("check internSection is return string or not", ()=>{
        const intern = new Intern("jerry", "1", "jerry@gmail.com","jerry123");
        expect(typeof intern.internSection()).toBe("string");
        })
    })
})