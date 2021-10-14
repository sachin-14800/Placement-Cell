const Student = require("../models/student");
const Interview = require("../models/interview");
const createCsvWriter=require('csv-writer').createObjectCsvWriter;

module.exports.download=async function(req,res)
{
    let interviews=await Interview.find({userType:"Student"})
    .populate('interviewer')
    .populate('student');
    let csvWriter=createCsvWriter({
        path:'file.csv',
        header:[
            {id:'email',title:'Id'},
            {id:'name',title:'Name'},
            {id:'college',title:'College'},
            {id:'status',title:'Placement_status'},
            {id:'DSA_score',title:'DSA_final_score'},
            {id:'Web_score',title:'WebD_final_score'},
            {id:'React_score',title:'React_final_score'},
            {id:'interview_date',title:'interview_date'},
            {id:'interview_company',title:'interview_company'},
            {id:'interview_result',title:'interview_result'}
        ]
    });
    const records=[];
    interviews.forEach(async function(interview){
        let obj={
            email:interview.student.email,
            name:interview.student.name,
            college:interview.student.college,
            status:interview.student.status,
            interview_date:interview.date,
            interview_company:interview.company,
            interview_result:interview.status,
            DSA_score:interview.student.dsa_score,
            Web_score:interview.student.web_score,
            React_score:interview.student.react_score,
        }
        records.push(obj);
    });
    // console.log(records);
    csvWriter.writeRecords(records)
    .then(()=>{
        console.log("Completed");
        res.download('file.csv');
    });
}