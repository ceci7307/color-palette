"use strict";
var input = document.querySelectorAll("input");
for (var i = 0; i < input.length; i++){
    input[i].addEventListener("input" function(){
        var c0 = document.getElementById("color0").value,
        c1 = document.getElementById("color1").value,
        c2 = document.getElementById("color2").value,
        c3 = document.getElementById("color3").value,
        c4 = document.getElementById("color4").value;

        var picker = document.getElementsByClassName("picker");
        picker.style.background = rgb(22, 123, 210);
    }
    )
}

//colorPicker (event){
// const rgbcolor = convertHexToRgb(hexcolor);
// const hslcolor = convertRgbtoHsl(rgbcolor)
//setBaseColor(hslcolor);
//}

//function setBaseColor(hslcolor){

//}

//function regnColors(base){

//}
