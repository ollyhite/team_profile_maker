class Intern{
    constructor(name, id, email, github){
        this.name = name
        this.id = id
        this.email = email
        this.school = school
    }
    internQ(){
        inquirer.prompt(qutions.intern).then((answer) => {
            console.log("answer",answer);
            answer.internName = this.name;
            answer.internId = this.id;
            answer.internEmail = this.email;
            answer.internSchool = this.github;
            this.addMore();
        })
    }
}