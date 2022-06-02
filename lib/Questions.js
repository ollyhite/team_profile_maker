module.exports ={
    addMore:{
        type:'list',
        message:"Which type of team member would you like to add?",
        choices:["Engineer","Intern","I don't need to add any more team members"],
        name:"addType"
    },
    manager:[
        {
            type:'input',
            message:"What is the team manager's name?",
            name:'name'
        },
        {
            type:'input',
            message:"What is the team manager's id?",
            name:'id',
            default: () => {},
            validate: function (id) {
                const pass = id.match(/^[1-9]\d*$/);
                // if (Number(id) > 0) {
                //     return true;
                // } 
                if(pass){
                    return true;
                }
                else {
                    return "please enter a positive number greater than zero.";
                }
            }
        },
        {
            type:'input',
            message:"What is the team manager's Email?",
            name:'email',
            default: () => {},
            validate: function (email) {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    return "Please enter a valid email";
                }
            }
        },
        {
            type:'input',
            message:"What is the team manager's office number?",
            name:'officeNum'
        }
    ],
    engineer:[
        {
            type:'input',
            message:"What is the team engineer's name?",
            name:'name'
        },
        {
            type:'input',
            message:"What is the team engineer's id?",
            name:'id',
            default: () => {},
            validate: function (id) {
                const pass = id.match(/^[1-9]\d*$/);
                if(pass){
                    return true;
                }
                else {
                    return "please enter a positive number greater than zero.";
                }
            }
        },
        {
            type:'input',
            message:"What is the team engineer's Email?",
            name:'email',
            default: () => {},
            validate: function (email) {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    return "Please enter a valid email";
                }
            }
        },
        {
            type:'input',
            message:"What is the team engineer's GitHub username?",
            name:'github'
        }
    ],
    intern:[
        {
            type:'input',
            message:"What is the team intern's name?",
            name:'name'
        },
        {
            type:'input',
            message:"What is the team intern's id?",
            name:'id',
            default: () => {},
            validate: function (id) {
                const pass = id.match(/^[1-9]\d*$/);
                if(pass){
                    return true;
                }
                else {
                    return "please enter a positive number greater than zero.";
                }
            }
        },
        {
            type:'input',
            message:"What is the team intern's Email?",
            name:'email',
            default: () => {},
            validate: function (email) {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    return "Please enter a valid email";
                }
            }
        },
        {
            type:'input',
            message:"What is the team intern's school?",
            name:'school'
        }
    ]
}