window.onclick= function load() {
    document.getElementById("p1").setAttribute("style", "text-align: center");
    
    document.getElementById("p2").setAttribute("style", "text-align: right");
    
    document.getElementsByClassName("paragraph")[0].setAttribute("style", "color: red; background-color: yellow;");

    document.getElementsByClassName("paragraph")[1].setAttribute("style", "color: cyan; background-color: blue;");

    setInterval(function(){
        var i = 0
        var colors = ["red", "white", "blue", "black", "green", "orange"];

        var paragraph5 = document.getElementsByTagName("p")[4].setAttribute("style", "color: red");
        i++
    }, 2000);
}
    



    