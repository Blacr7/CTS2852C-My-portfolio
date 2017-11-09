window.onclick = function load() {
    document.getElementById("p1").setAttribute("style", "text-align: center");

    document.getElementById("p2").setAttribute("style", "text-align: right");

    document.getElementsByClassName("paragraph")[0].setAttribute("style", "color: red; background-color: yellow;");

    document.getElementsByClassName("paragraph")[1].setAttribute("style", "color: cyan; background-color: blue;");

    var i = 0
    setInterval(function () {
        var colors = ["red", "white", "blue", "black", "green", "orange"];

        if (i >= colors.length) {
            i = 0;
        }

        var paragraph5 = document.getElementsByTagName("p")[4].style.color = colors[i];

        i++
    }, 3000);
}

function paragraph6() {
    //var used = false;
    //if (used == false) {
    var p6 = document.createElement("P");
    document.body.appendChild(p6);
    //  used = true;
    //}

}



