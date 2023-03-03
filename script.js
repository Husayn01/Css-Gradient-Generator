var gradientBox = document.getElementById("gradient-box");
var inputCopy = document.getElementById("input-copy");
var gradType = document.getElementById("gradType");


function generateColor() {

    // First rgb color stop
    var colorOneRed = Math.floor(Math.random() * 256);
    var colorOneGreen = Math.floor(Math.random() * 256);
    var colorOneBlue = Math.floor(Math.random() * 256);

    // Second rgb color stop
    var colorTwoRed = Math.floor(Math.random() * 256);
    var colorTwoGreen = Math.floor(Math.random() * 256);
    var colorTwoBlue = Math.floor(Math.random() * 256);

    var bgColor;  
    if (gradType.value == "linear") {
        bgColor = "linear-gradient(to right,rgb(" + colorOneRed + ", " + colorOneGreen + "," + colorOneBlue + ")," +
        "rgb(" + colorTwoRed + "," + colorTwoGreen + "," + colorTwoBlue + "))";
    } else if (gradType.value == "radial"){
        bgColor = "radial-gradient(rgb(" + colorOneRed + ", " + colorOneGreen + "," + colorOneBlue + ")," +
        "rgb(" + colorTwoRed + "," + colorTwoGreen + "," + colorTwoBlue + "))";
    }

    gradientBox.style.background = bgColor;
    inputCopy.value = bgColor;
}

function copyCode() {
    var copyText =  document.querySelector("#input-copy");
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    document.execCommand("copy");
  }