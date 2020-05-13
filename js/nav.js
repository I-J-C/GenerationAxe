//Author: Ilka Collado
//Supported files: nav_footer_text.html, [all front facing .html files]
function hamburgerMenu() {
    var x = document.getElementById("nav");
    var y = document.getElementById("hamburgerToggle")
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
    y.classList.toggle("fa-bars");
    y.classList.toggle("fa-times");
}

function dropdownGuitaristsNav() {
    var x = document.getElementById("dropdown-contentG");
    var y = document.getElementById("dropdownToggleG");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    y.classList.toggle("fa-caret-down");
    y.classList.toggle("fa-caret-up");
}

function dropdownMediaNav() {
    var x = document.getElementById("dropdown-contentM");
    var y = document.getElementById("dropdownToggleM");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    y.classList.toggle("fa-caret-down");
    y.classList.toggle("fa-caret-up");
}