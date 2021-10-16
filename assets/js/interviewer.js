let statuses=document.getElementsByClassName('color');
for(let i=0;i<statuses.length;i++)
{
    console.log(statuses[i]);
    if(statuses[i].innerHTML=="On Hold")
    statuses[i].style.backgroundColor="grey";
    else if(statuses[i].innerHTML=="Pass")
    statuses[i].style.backgroundColor="green";
    else if(statuses[i].innerHTML=="Didn't Attempt")
    statuses[i].style.backgroundColor="black";
    else if(statuses[i].innerHTML=="Failed")
    statuses[i].style.backgroundColor="red";
}