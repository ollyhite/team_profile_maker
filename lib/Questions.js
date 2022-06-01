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
            name:'id'
        },
        {
            type:'input',
            message:"What is the team manager's Email?",
            name:'email'
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
            name:'id'
        },
        {
            type:'input',
            message:"What is the team engineer's Email?",
            name:'email'
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
            name:'id'
        },
        {
            type:'input',
            message:"What is the team intern's Email?",
            name:'email'
        },
        {
            type:'input',
            message:"What is the team intern's school?",
            name:'school'
        }
    ]
}