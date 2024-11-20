let output = document.getElementById("output")
let input = document.getElementById("input")

let shop =[]

function add_product(){

    shop.push(input.value);

    output.innerText= "producten: " + shop
    input.value = " "
    
}