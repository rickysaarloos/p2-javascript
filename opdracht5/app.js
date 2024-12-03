let verlanglijst = [
    "geld",
    "nintendo switch",
    "playstation 5",
    "kleding",
    "schoenen"
];



for (let i = 0; i < verlanglijst.length; i++) {
    document.getElementById('output').innerHTML += verlanglijst[i] + '<br>'
}

console.log(verlanglijst)