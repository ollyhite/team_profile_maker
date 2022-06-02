const Employee = require("./Employee");

class Manager extends Employee{
    constructor({name, id, email, officeNum}){
        super(name, id, email)
        this.officeNum = officeNum
    }

    getRole(){
        return "Manager";
    }

    managerSection(){
        return `
        <div class="card" style="width: 18rem;">
            <div class="card-header d-flex flex-column align-items-center">
                <h1>${this.name}</h1>
                <div class="d-flex align-items-center">
                    <img style="width: 50px;" src="./dist/images/manager.svg" alt="">
                    <h2>Manager</h2>
                </div>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${this.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
                <li class="list-group-item">Office number: ${this.officeNum}</li>
            </ul>
        </div>
        `
    }
}

module.exports = Manager;