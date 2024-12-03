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


