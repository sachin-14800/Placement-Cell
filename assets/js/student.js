

let dates=document.getElementsByClassName('date');
for(let i=0;i<dates.length;i++)
{
    let date=dates[i].innerHTML;
    date=date.slice(0,15);
    dates[i].innerHTML=date;
}
let statuses=document.getElementsByClassName('color');
for(let i=0;i<statuses.length;i++)
{
    // console.log(statuses[i]);
    if(statuses[i].innerHTML=="On Hold")
    statuses[i].style.backgroundColor="grey";
    else if(statuses[i].innerHTML=="Pass")
    statuses[i].style.backgroundColor="green";
    else if(statuses[i].innerHTML=="Didn't Attempt")
    statuses[i].style.backgroundColor="black";
    else if(statuses[i].innerHTML=="Fail")
    statuses[i].style.backgroundColor="red";
}
let opp_bar=document.getElementById('opp-bar');
let interview_bar=document.getElementById('interview-bar');
let opportunity=document.getElementById('opportunity').innerHTML;
let interview=document.getElementById('interviews').innerHTML;
document.getElementById('interviews').innerHTML="";
opp_bar.addEventListener('click',function(){
    document.getElementById('opportunity').innerHTML=opportunity;
    document.getElementById('interviews').innerHTML="";
    interview_bar.style.borderBottom="none";
    opp_bar.style.borderBottom="2px solid blueviolet";
    opp_bar.style.color="black";
    interview_bar.style.color="grey";
});
interview_bar.addEventListener('click',function(){
    document.getElementById('interviews').innerHTML=interview;
    document.getElementById('opportunity').innerHTML="";
    interview_bar.style.borderBottom="2px solid blueviolet";
    opp_bar.style.borderBottom="0px";
    opp_bar.style.color="grey";
    interview_bar.style.color="black";
});


$('#dsa').css('width',$('#dsa').html()+"%");
$('#web').css('width',$('#web').html()+"%");
$('#react').css('width',$('#react').html()+"%");

