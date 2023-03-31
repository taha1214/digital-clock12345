

function updatetime(){
    var dateTime = new Date();
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();
    var amPm = document.getElementById("pm");

if(hours >= 12){
    amPm.innerHTML = "PM";
}
else{
    amPm.innerHTML ="AM";
}
if(hours > 12){
    hours -= 12;
}
hours = hours < 10 ? "0" + hours : hours;
minutes = minutes < 10 ? "0" + minutes : minutes;
seconds = seconds < 10 ? "0" + seconds : seconds;

document.getElementById("hours").innerHTML = hours;
document.getElementById("min").innerHTML = minutes;
document.getElementById("sec").innerHTML = seconds;
}
setInterval(updatetime, 1000 );

function dateyear() {
    var dateHours = new Date();
    var Days = ["saturday","sunday","monday","tuesday","wednesday","thursday","friday"];
    var Months = ["january","febraury","march","april","may","june","july","august",
    "september","october","november","december"];
    var day = dateHours.getDay();
    var Dati = dateHours.getDate();
    var month = dateHours.getMonth();
    var year = dateHours.getFullYear();
    var dating = Days[day] + ", " + Dati + " " + Months[month] + " " + year ;
    
    document.getElementById("date").innerHTML = dating;
}


dateyear();




 
