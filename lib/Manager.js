const Startcreate = require("./Startcreat")

class Manager extends Startcreate{
    constructor(name, id, email, officeNum){
        this.name = name
        this.id = id
        this.email = email
        this.officeNum = officeNum
    }
    managerQ(){
        inquirer.prompt(qutions.engineer).then((answer) => {
            console.log("answer",answer);
            answer.managerName = this.name;
            answer.managerId = this.id;
            answer.engineerEmail = this.email;
            answer.managerOfficeNum = this.officeNum;
            this.addMore();
        })
    }
}