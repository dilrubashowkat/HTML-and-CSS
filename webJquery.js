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

});
}