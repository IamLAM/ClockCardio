var breakk=5;
var session=25;
var min;
var sec;
var interval=0;

$(document).ready(function(){

console.log("file linked");

$("#break-increment").on("click",breakIncrement);
$("#break-decrement").on("click",breakDecrement);
$("#session-increment").on("click",sessionIncrement);
$("#session-decrement").on("click",sessionDecrement);
$("#start_stop").on("click",sessionStart);
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

function sessionStart(){
    let label;
    let time_left = $("#timer-left").html();
    session = 60 * parseInt(time_left, 10);
   
    console.log("time:"+session);

    interval=setInterval(function(){
      console.log("interval function");
    
    session--;
    if(session<0){
      label=$("#timer-label").html();
      if(label!="Break"){
        $("#timer-label").html("Break");
        session=parseInt($("#break-length").html(),10)*60;
      }else{
        $("#timer-label").html("Session");
        session=parseInt($("#session-length").html(),10)*60;
      }
    }
    min=parseInt(session/60,10);
    sec=parseInt(session%60,10);
    min=("0"+min).slice(-2);
    sec=("0"+sec).slice(-2);
    $("#timer-left").html(min+":"+sec);

    },1000);

}


function resetState(){
   breakk=5;
   session=25;
  
  $("#session-length").html(session);
  $("#break-length").html(breakk);
  $("#timer-left").html(session+":00");
  clearInterval(interval);
}