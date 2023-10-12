var  y = "lunetti44@gmail.com"
var  subIn = 1;

document.getElementById("Your Email").onclick = function () {
    var x = document.getElementById("subInField").value;
    if (x == y) {
        alert("passed "+ subIn + " subIn ");
    }
    else  {
        subIn++;
        alert("wrong email , try again !");
    }
}