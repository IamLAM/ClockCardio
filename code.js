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

    breakk++;
    $("#break-length").html(breakk);

}

function breakDecrement(){

    breakk--;
    $("#break-length").html(breakk);

}



function sessionIncrement(){

    session++;
    $("#session-length").html(session);

}

function sessionDecrement(){

    session--;
    $("#session-length").html(session);

}