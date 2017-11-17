var alreadyClicked = false; //keep the user from clicking the 5th paragraph multiple times
window.onclick = function click() { 
    document.getElementById("p1").setAttribute("style", "text-align: center");

    document.getElementById("p2").setAttribute("style", "text-align: right");

    document.getElementsByClassName("paragraph")[0].setAttribute("style", "color: red; background-color: yellow;");

    document.getElementsByClassName("paragraph")[1].setAttribute("style", "color: cyan; background-color: blue;");

    var i = 0

    if (alreadyClicked == false) {
        setInterval(function () {
            var colors = ["red", "white", "blue", "black", "green", "orange"];

            if (i >= colors.length) {
                i = 0;
            }
            var paragraph5 = document.getElementsByTagName("p")[4].style.backgroundColor = colors[i];

            if (document.getElementsByTagName("p")[4].style.backgroundColor == "black") {
                document.getElementsByTagName("p")[4].style.color = "red";
            } else{
                document.getElementsByTagName("p")[4].style.color = "black";
            }
            i++;
        }, 3000);
    }
    alreadyClicked = true;
}

var used = false;
function paragraph6() {

    if (used == false) {
        var p6 = document.createElement("P");
        var content = document.createTextNode("This is a paragraph.");
        p6.appendChild(content);
        document.body.appendChild(p6);

    }
    used = true;
}



