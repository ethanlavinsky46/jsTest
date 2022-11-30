const d = new Date();
let day = d.getDay();
if(day == 1){
  day = "Monday";
}
else if(day == 2){
  day = "Tuesday";
}
else if(day == 3){
  day = "Wednesday";
}
else if(day == 4){
  day = "Thursday";
}
else if(day == 5){
  day = "Friday";
}
else if(day == 6){
  day = "Saturday";
}
else if(day == 7){
  day = "Sunday";
}
document.getElementById("demo").innerHTML = "Hi, happy " + day;
