const Intern = require("../lib/Intern")

describe(('Intern class'),()=>{
    //  it('test for school',()=>{
    //     const intern = new Intern("jerry", "1", "jerry@gmail.com","DU");
    //     expect(typeof intern.school).toBe("string")
    // })
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
})