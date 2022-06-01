const fs = require("fs");
const templete = require("./templete");

class Creathtml{
    constructor(data){
        console.log("data in Creathtml",data);
        this.data = data
        this.manager = data.manager
        this.engineer = data.engineer
        this.intern = data.intern
    }


    // builtPage(){
    //     const managersection = new
    //     this.createFile();
    // }

    createFile(){
        const finalpage = `
        ${templete.htmlTop}
        ${this.manager}
        ${this.engineer}
        ${this.intern}
        ${templete.htmlTop}
        `
        fs.writeFile('index.html',finalpage,(err)=>{
        err? console.log(err):console.log("creat html");
    })
    }
}

module.exports = Creathtml;