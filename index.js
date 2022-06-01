const inquirer = require("inquirer");
const qutions = require("./lib/Questions");
const Creathtml = require('./lib/Creathtml');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

class Startcreate{
    constructor(){
        this.manager;
        this.engineer=[];
        this.intern=[];
    }
    start(){
        inquirer.prompt(qutions.manager).then((answer) =>{
            this.manager = new Manager(answer);
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
                const data = {manager:this.manager, engineer:[...this.engineer], intern:[...this.intern]}
                console.log("final data",data);
                const createHtml = new Creathtml(data);
                createHtml.createFile();
            }
            
        })
    }
    engineerQ(){
        inquirer.prompt(qutions.engineer).then((answer) => {
            this.engineer = [...this.engineer,new Engineer(answer)];
            this.addMore();
        })
    }

    internQ(){
        inquirer.prompt(qutions.intern).then((answer) => {
            this.intern = [...this.intern, new Intern(answer)];
            this.addMore();
        })
    }
}

const startCreatPage = new Startcreate();
startCreatPage.start();

module.exports = Startcreate;
