let div = document.getElementById('div')
let topPosition = 0;
let positie = 0;
let posV = 0;
let schermbreedte = window.innerWidth

// setInterval(function() {
//     positie += 0;
//     div.style.left = positie +  'px';
//     if(positie > schermbreedte){
//         positie = - 50;
//     }
    
// }, 100);

// function updatePosition() {
//     myDiv.style.top = topPosition + 'px';
//   }

  
// let colors = ["red", "blue", "green", "yellow", "purple"];
// let currentColorIndex = 0;

// document.getElementById("div").addEventListener("click", function() {

//     div.style.backgroundColor = colors[currentColorIndex++];

//     if (currentColorIndex === colors.length) currentColorIndex = 0;
// });

window.addEventListener("keydown", function(event)  {
if (event.key === 'a') {
    positie -= 10;
    div.style.left =  positie + 'px'
} 
if (event.key === 'd') {
 positie += 10;   
    div.style.left =  positie + 'px'
}

if (event.key === 'w') {
    posV -= 10;   
       div.style.top =  posV + 'px'
   }

   if (event.key === 's') {
    posV += 10;   
       div.style.top =  posV + 'px'
   }

})






