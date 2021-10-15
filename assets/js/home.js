let dates=document.getElementsByClassName('date');
for(let i=0;i<dates.length;i++)
{
    let date=dates[i].innerHTML;
    date=date.slice(0,15);
    dates[i].innerHTML=date;
}