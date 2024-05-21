var value = 0;
var width = 0;
function res() {
    value = 0;
    width = 0;
    document.getElementById("value").innerHTML = value;
    document.getElementById('box').style.width = "0px";
}

function dec() {
    value--;
    width++;
    document.getElementById("value").innerHTML = value;
    document.getElementById('box').style.width = width+"5px";
    document.getElementById('box').style.transition = ".1s";
    document.getElementById('box').style.background = "red";

}

function inc() {
    value++;
    width++
    document.getElementById("value").innerHTML = value;
    document.getElementById('box').style.width = width+"5px";
    document.getElementById('box').style.transition = ".1s";
    document.getElementById('box').style.background = "green";
}

