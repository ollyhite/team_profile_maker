const inquirer = require("inquirer");
const qutions = require("./Questions");
const Creathtml = require('./Creathtml');

class Startcreate{
    constructor(){
        this.manager;
        this.engineer=[];
        this.intern=[];
    }
    start(){
        inquirer.prompt(qutions.manager).then((answer) =>{
            // console.log("answer",answer);
            this.manager = answer;
            console.log("this.manager",this.manager);
            this.addMore();
        })
    }
    addMore(){
        inquirer.prompt(qutions.addMore).then((answer)=>{
            console.log("type",answer);
            if(answer.addType === "Engineer"){
                this.engineerQ();
            }else if(answer.addType === "Intern"){
                this.internQ();
            }else{
                console.log("finished the q, create the filte");
                const data = {manager:this.manager, engineer:this.engineer, intern:this.intern}
                console.log(data);
                console.log("Startcreate data", new Creathtml(data));
            }
            
        })
    }
    engineerQ(){
        inquirer.prompt(qutions.engineer).then((answer) => {
            console.log("answer",answer);
            this.engineer.push(answer)
            console.log("this.engineer",this.engineer);
            this.addMore();
        })
    }

    internQ(){
        inquirer.prompt(qutions.intern).then((answer) => {
            console.log("answer",answer);
            this.intern.push(answer)
            console.log("this.intern",this.intern);
            this.addMore();
        })
    }
}


module.exports = Startcreate;
