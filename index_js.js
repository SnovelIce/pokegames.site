var PG = document.getElementById("PokeGuess");
var PN = document.getElementById("PokeName");
var PBR = document.getElementById("PBR");
var GamesTitle = document.getElementById("GamesTitle");

var PGHover = 0;
var PNHover = 0;
var PBRHover = 0;

PG.style.left = 0 +'px'
PG.style.position = "absolute";
PN.style.left = 0 +'px'
PN.style.position = "absolute";
PBR.style.left = 0 +'px'
PBR.style.position = "absolute";
GamesTitle.style.top = -30 +'px'
GamesTitle.style.position = "absolute";

function onPokeGuessIn(){
    PGHover = 50;
}
function onPokeGuessOut(){
    PGHover = 0;
}


function onPokeNameIn(){
    console.log('yoo');
    PNHover = 50;
}
function onPokeNameOut(){
    console.log('yoo');
    PNHover = 0;
}


function onPBRIn(){
    console.log('yoo');
    PBRHover = 50;
}
function onPBROut(){
    console.log('yoo');
    PBRHover = 0;
}
 
setInterval(function(){

    var tl = parseInt(PG.style.left, 10);
    var frameMove = ((PGHover - tl)/10);
    PG.style.left = (tl + frameMove)+'px';
    PG.style.top = '40px'
   
    var tl = parseInt(PN.style.left, 10);
    var frameMove = ((PNHover - tl)/10);
    PN.style.left = (tl + frameMove)+'px';
    PN.style.top = '130px'

    var tl = parseInt(PBR.style.left, 10);
    var frameMove = ((PBRHover - tl)/10);
    PBR.style.left = (tl + frameMove)+'px';
    PBR.style.top = '220px'
    
},0.1);