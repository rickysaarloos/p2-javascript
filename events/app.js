let button = document.getElementById("btn")

button.addEventListener('click', function() {
console.log("geklikt")

})

window.addEventListener('keydown', function(e) {
if (e.key === 'd')
    console.log('rechts')
})