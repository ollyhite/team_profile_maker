class Engineer{
    constructor(name, id, email, github){
        this.name = name
        this.id = id
        this.email = email
        this.github = github
    }
    engineerQ(){
        inquirer.prompt(qutions.engineer).then((answer) => {
            console.log("answer",answer);
            answer.engineerName = this.name;
            answer.engineerId = this.id;
            answer.engineerEmail = this.email;
            answer.engineerGitHub = this.github;
            this.addMore();
        })
    }

    engineerSection(){
        return `
        <div class="card" style="width: 18rem;">
            <div class="card-header">
                <h1>${this.name}</h1>
                <div class="d-flex align-items-center">
                    <img src="./dist/images/engineer.svg" alt="">
                    <h2>Engineer</h2>
                </div>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${this.id}</li>
                <li class="list-group-item">Email: ${this.email}</li>
                <li class="list-group-item">GitHub: ${this.github}</li>
            </ul>
        </div>
        `
    }
}
