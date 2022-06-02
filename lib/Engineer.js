const Employee = require("./Employee");

class Engineer extends Employee{
    constructor({name, id, email, github}){
        super(name, id, email)
        this.github = github
    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return "Engineer";
    }

    engineerSection(){
        return `
        <div class="card" style="width: 18rem;">
            <div class="card-header d-flex flex-column align-items-center">
                <h1>${this.name}</h1>
                <div class="d-flex align-items-center">
                    <img style="width: 50px;" src="./dist/images/engineer.svg" alt="">
                    <h2>Engineer</h2>
                </div>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${this.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${this.github}">${this.github}</a></li>
            </ul>
        </div>
        `
    }
}

module.exports = Engineer;