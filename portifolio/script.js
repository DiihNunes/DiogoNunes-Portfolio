function openNav(){
    var x = document.getElementById("navigation");

    if(x.className === "navbar"){
        x.className += " menujs";
        document.getElementById("threeline_menu").innerHTML = "&Cross;";
    }
    
    else {
        x.className = "navbar"
        document.getElementById("threeline_menu").innerHTML = "&#9776;";
    }
}