// Read the data
var _gen = JSON.parse(sessionStorage.getItem("data"));
var _name = "NO WAY YOUR GETTING THAT"

if (_gen =="All"){
    _gen = "Gen "+Math.random(1,9)
} 
function getRandomPokemon(gen) {
    let min, max;
    switch (gen) {
        case "Gen 1":
            min = 1;
            max = 151;
            break;
        case "Gen 2":
            min = 152;
            max = 251;
            break;
        case "Gen 3":
            min = 252;
            max = 386;
            break;
        case "Gen 4":
            min = 387;
            max = 493;
            break;
        case "Gen 5":
            min = 494;
            max = 649;
            break;
        case "Gen 6":
            min = 650;
            max = 721;
            break;
        case "Gen 7":
            min = 722;
            max = 809;
            break;
        case "Gen 8":
            min = 810;
            max = 898;
            break;
        case "Gen 9":
            min = 899;
            max = 1010;
            break;
        case "All":
            min = 1;
            max = 1010;
            break;
        default:
            return "Invalid generation!";
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function submit(){
    const guess = document.getElementById("guess").value.toLowerCase();
    if (_name.toLowerCase()==guess) {
        document.getElementById("answer").style.color = "green"
        document.getElementById("answer").innerHTML = "Right the pokemon was " + _name + '!';
    }
    else {
        document.getElementById("answer").style.color = "red"
        document.getElementById("answer").innerHTML = "Wrong. the right pokemon was " + _name + ' ):';
    
    }

}
async function getPokemonData(ID) {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + ID;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

async function main() {
    const pokemonID = getRandomPokemon("Gen 1"); // Replace "Gen 1" with any generation you want
    const data = await getPokemonData(pokemonID);

    const types = document.getElementById("types")
    const weight = document.getElementById("weight")
    const height = document.getElementById("height")
    const moves = document.getElementById("moves")
    const gen = document.getElementById("gen")
    const letters = document.getElementById("letters")

    _name = data.name
    if (data.types.length>1){
        types.innerHTML = 'Types:' + data.types[0].type.name + ', ' + data.types[1].type.name
    }else{
        types.innerHTML = 'Type:' + data.types[0].type.name
    }
    weight.innerHTML = 'weight:' + data.weight
    height.innerHTML = 'height:' + data.height
    moves.innerHTML = 'moves:' + data.moves[0].move.name + ", " + data.moves[1].move.name + ", " + data.moves[2].move.name + ", " + data.moves[3].move.name
    gen.innerHTML = 'gen:' + _gen
    letters.innerHTML = 'letters:' + data.name.length
    
}

main(); // Call the main function to start the process
