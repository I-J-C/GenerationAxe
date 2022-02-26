//Author: IJC
//Supported file: tour.html

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("openModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeModal")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    //grabs symbol of dropdown and toggles on activation
function dropdownToggleCaret(iconId) {
    iconId.classList.toggle("fa-angle-down");
    iconId.classList.toggle("fa-angle-up");
}


function dropdownTable(tableId, iconId) {
    if (tableId.style.display === "block") {
        tableId.style.display = "none";
    } else {
        tableId.style.display = "block";
    }
    dropdownToggleCaret(iconId);
}
