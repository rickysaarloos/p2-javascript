let winkelmand = ["Banaan", "Whiskey", "chips", "Bonen", "Aardappelen"];
function product_toevoegen() {
winkelmand.push("appels")
document.getElementById(opdr5).innerText = winkelmand
toon_bericht();    
}
let boodschappen = ["Bananen","Whiskey","Chips","Bonen","Aardappelen"];
let boodschapString = boodschappen.join(", ") + ", ";


//opdracht_1
console.log(winkelmand);
document.getElementById("opdr1").innerText = "Er zitten " + winkelmand.length + " producten in mijn winkelmand"


//opdracht_2
document.getElementById("opdr2").innerText = "Uw producten zijn: " + winkelmand

//opdracht_3
document.getElementById("opdr3").innerText = winkelmand[4]

//opdracht_4
winkelmand[1] = "bier"
document.getElementById('opdr4').innerText = winkelmand[1]



//opdracht_5
function product_toevoegen() {
    winkelmand.push("appels")
    document.getElementById('opdr5').innerText = winkelmand
}

function toon_bericht() {
    if (winkelmand.length > 1) {
        bericht = "U kunt boodschappen doen";
    } else {
        bericht = "U heeft niets om te kopen";
    }
    ///opdracht_6
    document.getElementById('opdr6').innerText = bericht;
}



//opdracht_7
if (winkelmand[4] === "drop") {

    document.getElementById('opdr7').innerText = "Uw producten: " + winkelmand.join(", ");
} else {

    document.getElementById('opdr7').innerText = "U heeft geen drop";
}

//opdracht_8
document.getElementById("opdr8").innerHTML = boodschapString;
winkelmand.splice(0,2)

//opdracht_9
document.getElementById('opdr9').innerText= winkelmand;
boodschappen.sort();

//opdracht_10
winkelmand.sort();
document.getElementById('opdr10').innerText = winkelmand;