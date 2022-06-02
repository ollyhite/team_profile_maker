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
    //start questions
    start(){
        console.log("Welcome to the team generator!");
        // console.log("Use 'npm run reset' to reset the dist/folder");
        console.log("Please Build your team");
        inquirer.prompt(qutions.manager).then((answer) =>{
            this.manager = new Manager(answer);
            //ask add more ppl(position) or not
            this.addMore();
        })
    }
    //add more ppl function
    addMore(){
        inquirer.prompt(qutions.addMore).then((answer)=>{
            console.log("type",answer);
            if(answer.addType === "Engineer"){
                this.engineerQ();
            }else if(answer.addType === "Intern"){
                this.internQ();
            }else{
                //if finished adding ppl, will go to render page function
                console.log("finished the q, create the filte");
                const data = {manager:this.manager, engineer:[...this.engineer], intern:[...this.intern]}
                console.log("final data",data);
                const createHtml = new Creathtml(data);
                createHtml.createFile();
            }
            
        })
    }
    //if user choose engineer, will show engineer question
    engineerQ(){
        inquirer.prompt(qutions.engineer).then((answer) => {
            this.engineer = [...this.engineer,new Engineer(answer)];
            this.addMore();
        })
    }
    //if user choose intern, will show intern question
    internQ(){
        inquirer.prompt(qutions.intern).then((answer) => {
            this.intern = [...this.intern, new Intern(answer)];
            this.addMore();
        })
    }
}
//trigger the questions to start
const startCreatPage = new Startcreate();
startCreatPage.start();

module.exports = Startcreate;
