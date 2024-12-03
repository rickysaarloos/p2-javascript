//let getal = 10
/*
for (let i = 1; i < 10; i++){
document.getElementById('output').innerHTML += i + ' x '+ getal + '=' 
+ i * getal +'<br>'
} */

//opdracht2
function tafel_van(getal) {
document.getElementById('output').innerHTML = "";

for (let i = 1; i <= 10; i++) {
document.getElementById('output').innerHTML += i + " x " + " = " + (i * getal) + "<br>"  
}
}


//opdracht3
function berekenTafel() {
let getal = document.getElementById('tafelInput').value;
document.getElementById('output').innerHTML = "";

for (let i = 1; i <= 10; i++) {
document.getElementById('output').innerHTML += i + " x " + getal + " = " + (i * getal) + "<br>";    
}
}