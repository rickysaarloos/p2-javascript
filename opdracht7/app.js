let div = document.getElementById('div')

let positie = 0;
let schermbreedte = window.innerWidth

setInterval(function() {
    positie += 10;
    div.style.left = positie +  'px';
    if(positie > schermbreedte){
        positie = - 50;
    }
    
}, 100);


let currentColorIndex = 0;
let colors = ["red", "blue", "green", "yellow", "purple"];

document.getElementById("div").addEventListener("click", function() {

    div.style.backgroundColor = colors[currentColorIndex++];

    if (currentColorIndex === colors.length) currentColorIndex = 0;
});