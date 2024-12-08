let div = document.getElementById('div')

let positie = 0;
let schermbreedte = window.innerWidth

setInterval(function() {
    positie += 0;
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

document.addEventListener("keydown", function(event)  {
if (event.key === "ArrowLeft") {
    positie -= 10;
} else if (event.key === "ArrowRight") {

 positie += 10;   
}

if (positie < 0) {
    positie = 0;
} else if (positie > schermbreedte) {
    positie = schermbreedte;
}
div.style.left = positie + 'px'
})





