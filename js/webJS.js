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
    id.style.color="#aed581";


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
function deleteHeaderAndPara()
{
    var name = document.getElementsByTagName("h2")[2];
    var parent = name.parentNode;
    parent.removeChild(name);

    var name1 = document.getElementsByTagName("p")[4];
    parent.removeChild(name1);

}
function changeParagraph(){
    var elementHeader = document.createElement("h2");
    var elementP = document.createElement("p");
    var e = document.getElementById("para9");

    e.appendChild(elementHeader);
    var temp = document.createTextNode("Just a header.");
    elementHeader.appendChild(temp);

    e.appendChild(elementP);
    var temp = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condimentum semper mauris, in varius dui venenatis eu. Curabitur sollicitudin condimentum eros in auctor. Etiam aliquam magna urna, nec sagittis turpis fermentum vel. Morbi sed viverra ex. Suspendisse id rutrum tellus, eget facilisis tellus. Aenean egestas, risus eu ullamcorper ultricies, orci sem scelerisque lectus, ut efficitur metus felis sed mi. Vestibulum dolor urna, condimentum eu dolor vel, consequat sodales erat.");
    elementP.appendChild(temp);
}

