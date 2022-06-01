const fs = require("fs");
const templete = require("./templete");

class Creathtml{
    constructor(data){
        // console.log("data in Creathtml",data);
        this.data = data
        this.manager = data.manager
        this.engineer = data.engineer
        this.intern = data.intern
    }


    createFile(){
        const engineerArray = this.engineer.map((item)=>item.engineerSection())
        const internArray = this.intern.map((item)=>item.internSection())

        const finalpage = `
        ${templete.htmlTop}
        ${this.manager.managerSection()}
        ${engineerArray.join(" ")}
        ${internArray.join(" ")}
        ${templete.htmlBotton}
        `
        
        fs.writeFile('index.html',finalpage,(err)=>{
        err? console.log(err):console.log("Your team profile html page created!!!!");
    })
    }
}

module.exports = Creathtml;