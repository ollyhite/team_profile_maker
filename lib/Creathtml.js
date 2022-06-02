const fs = require("fs");
const templete = require("./templete");

//bring all data in Creathtml and put all temeplete togther to render page
class Creathtml{
    constructor(data){
        this.data = data
        this.manager = data.manager
        this.engineer = data.engineer
        this.intern = data.intern
    }

    createFile(){
        //engineer and intern are Array to for loop to render
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