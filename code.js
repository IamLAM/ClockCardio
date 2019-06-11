var breakInc=5;


$(document).ready(function(){

console.log("file linked");

$("#break-increment").on("click",breakIncrement);
$("#break-decrement").on("click",breakDecrement);



});



function breakIncrement(){

    breakInc++;
    $("#break-length").html(breakInc);

}

function breakIncrement(){

    breakInc++;
    $("#break-length").html(breakInc);

}