var breakk=5;
var session=25;


$(document).ready(function(){

console.log("file linked");

$("#break-increment").on("click",breakIncrement);
$("#break-decrement").on("click",breakDecrement);
$("#session-increment").on("click",sessionIncrement);
$("#session-decrement").on("click",sessionDecrement);




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
   }
}

function sessionDecrement(){
    if(session>1){
     session--;
    $("#session-length").html(session);
    }
}