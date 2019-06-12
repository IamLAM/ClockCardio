var breakk=5;
var session=25;


$(document).ready(function(){

console.log("file linked");

$("#break-increment").on("click",breakIncrement);
$("#break-decrement").on("click",breakDecrement);
$("#session-increment").on("click",sessionIncrement);
$("#session-decrement").on("click",sessionDecrement);
$("#start_stop").on("click",startSession);
$("#reset").on("click",resetState);



});



function breakIncrement(){
 if(breakk<60){
    breakk++;
    console.log("break:"+breakk);
    $("#break-length").html(breakk);
 }
}

function breakDecrement(){

  if(breakk>1){
    breakk--;
    $("#break-length").html(breakk);
  }
}



function sessionIncrement(){
   if(session<60){
    session++;
     console.log("session:"+session);
    $("#session-length").html(session);
    $("#timer-left").html(session+":00");
   }
}

function sessionDecrement(){
    if(session>1){
     session--;
    $("#session-length").html(session);
    $("#timer-left").html(session+":00");
    }
}

function startSession(){
  
}


function resetState(){
   breakk=5;
   session=25;
  
  $("#session-length").html(session);
  $("#break-length").html(breakk);
  $("#timer-left").html(session+":00");
}