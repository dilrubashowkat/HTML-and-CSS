document.write("I was amazed with the password ... ");
        var EidDay = "9/2/2017";
        var s = "Was well spent";
        alert(EidDay + " "+s);

function unpredictable(x,y){
alert("time and love in life is finite"+x+y);
document.write(x*y+" "+ "Bad Request;");
}
unpredictable(2,200);


var today = "Sat or Sun";
var x= 5;
if(x==4){
document.write(today);

}
else if(x==7){
document.write(today);

}
else{
document.write("today "+ "isn't"+ today);

}

var i = 1;
while(i<5)
{
document.write(i);
i++;
}

var buddy = {
species: "cat",
color: "brown",
Friendly: true,
age: "15months",
eat:function() {
    // body...
    document.write("hi I am buddy, the pussy cat!! ")
}

};

if(buddy.Friendly==true)
    buddy.eat();

buddy.Friendly=false;

if(buddy.Friendly==false)
    buddy.eat();

var str = "how are you?";
document.write(str.toUpperCase());
document.write(str.length);
document.write(str.bold());
document.write(str.replace("you","me"));

var num = 3.14;
document.write(Math.round(num));

var tD = new Date();
document.write(tD);

function change()
{  var id = document.getElementById("test1");
    id.style.color="lime";


    var idP = document.getElementById("footer");
    idP.style.color="purple";
    idP.style.backgroundColor="lightgreen";

    var idTag = document.getElementsByTagName('h1');
        for(var i=0;i<idTag.length;i++)
            idTag[i].style.color = "magenta";

    var idClass = document.getElementsByClassName('sideright');
        for(var i=0;i<idClass.length;i++)
            idClass[i].style.color = "purple";
    idClass[0].innerHTML = "replace lorem epsum";

}

function test2(){
    document.getElementById("para1").style.backgroundColor="aqua";
    }

function test3(){
    document.getElementById("para1").style.backgroundColor="";
    }

function replaceImage(){
    document.getElementById("image").src="image/1.jpg";
}
function oldImage(){
    document.getElementById("image").src="image/3.jpg";
}
function changeParagraph(){
    var p1 = document.createElement("p");
    var element = document.getElementById("main");
    element.appendChild(p1);
    var text = document.createTextNode("consequat sodales erat.");
    p1.appendChild(text);
}