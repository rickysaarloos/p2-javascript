let div = document.getElementById('div')
let topPosition = 0;
let positie = 0;
let schermbreedte = window.innerWidth

setInterval(function() {
    positie += 0;
    div.style.left = positie +  'px';
    if(positie > schermbreedte){
        positie = - 50;
    }
    
}, 100);

function updatePosition() {
    myDiv.style.top = topPosition + 'px';
  }

  
let colors = ["red", "blue", "green", "yellow", "purple"];


document.getElementById("div").addEventListener("click", function() {

    div.style.backgroundColor = colors[currentColorIndex++];

    if (currentColorIndex === colors.length) currentColorIndex = 0;
});

document.addEventListener("keydown", function(event)  {
if (event.key === 'a') {
    positie -= 10;
} else if (event.key === 'd') {

 positie += 10;   
}

if (positie < 0) {
    positie = 0;
} else if (positie > schermbreedte) {
    positie = schermbreedte;
}
div.style.left = positie + 'px'
})




document.addEventListener("keydown", function(event)  {
if (event.key === 'w') {
   topPositie += 10;
} else if (event.key === 's') {

    topPositie -= 10;   
}

if (positie < 0) {
    positie = 0;
} else if (positie > schermbreedte) {
    positie = schermbreedte;
}
div.style.top = topPosition + 'px'
})


