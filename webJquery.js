function test(){
$(document).ready(function(){

$("#p3").hide();
$("#p3, #p4").hide();
$("div:first").hide();
$("div:last").hide();
$("div:not(#footer,#para9,#imagesideright)").hide();
$("div:first").hide();
$("#mainTest p:first").hide();
$("div:even").hide();
$("div:odd").hide();
$("ul li:nth-child(1)").hide();
$("p").html("<h2>buddy the cat with a hat</h2>");
$("p").text("buddy the cat with a hat");
$("#para3").css("color","lime").css("border","solid 3px yellow").fadeOut("50000");
$("p:last").addClass("para");
$("div").removeClass("sideright");
$("p:first").toggleClass("p4");
$("#p3").fadeIn(2500);
});
}