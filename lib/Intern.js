const Employee = require("./Employee");

class Intern extends Employee{
    constructor({name, id, email, school}){
        super(name, id, email)
        this.school = school
    }

    getSchool(){
        return this.school;
    }

    getRole(){
        return "Intern";
    }

    internSection(){
        return `
        <div class="card" style="width: 18rem;">
            <div class="card-header">
                <h1>${this.name}</h1>
                <div class="d-flex align-items-center">
                    <img src="./dist/images/intern.svg" alt="">
                    <h2>Intern</h2>
                </div>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${this.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
                <li class="list-group-item">School: ${this.school}</li>
            </ul>
        </div>
        `
    }
}
module.exports = Intern;