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
            name:'managerName'
        },
        {
            type:'input',
            message:"What is the team manager's id?",
            name:'managerId'
        },
        {
            type:'input',
            message:"What is the team manager's Email?",
            name:'managerEmail'
        },
        {
            type:'input',
            message:"What is the team manager's office number?",
            name:'managerOfficeNum'
        }
    ],
    engineer:[
        {
            type:'input',
            message:"What is the team engineer's name?",
            name:'engineerName'
        },
        {
            type:'input',
            message:"What is the team engineer's id?",
            name:'engineerId'
        },
        {
            type:'input',
            message:"What is the team engineer's Email?",
            name:'engineerEmail'
        },
        {
            type:'input',
            message:"What is the team engineer's GitHub username?",
            name:'engineerGitHub'
        }
    ],
    intern:[
        {
            type:'input',
            message:"What is the team intern's name?",
            name:'internName'
        },
        {
            type:'input',
            message:"What is the team intern's id?",
            name:'internId'
        },
        {
            type:'input',
            message:"What is the team intern's Email?",
            name:'internEmail'
        },
        {
            type:'input',
            message:"What is the team intern's school?",
            name:'internSchool'
        }
    ]
}