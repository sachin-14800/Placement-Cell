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
let students=$('#students').html();
let opportunity=$('#opportunity').html();
let interviews=$('#interviews').html();
$('#opportunity').html("");
$('#interviews').html("");
$('.student').click(function(){
    $('#opportunity').html("");
    $('#interviews').html("");
    $('.opportunity').css({"color":"grey","border-bottom":"none"});
    $('.interview').css({"color":"grey","border-bottom":"none"});
    $('#students').html(students);
    $('.student').css({"color":"black","border-bottom":"2px solid blueviolet"});
});
$('.interview').click(function(){
    $('#opportunity').html("");
    $('#students').html("");
    $('.opportunity').css({"color":"grey","border-bottom":"none"});
    $('.student').css({"color":"grey","border-bottom":"none"});
    $('#interviews').html(interviews);
    $('.interview').css({"color":"black","border-bottom":"2px solid blueviolet"});
});
$('.opportunity').click(function(){
    $('#students').html("");
    $('#interviews').html("");
    $('.student').css({"color":"grey","border-bottom":"none"});
    $('.interview').css({"color":"grey","border-bottom":"none"});
    $('#opportunity').html(opportunity);
    $('.opportunity').css({"color":"black","border-bottom":"2px solid blueviolet"});
});
