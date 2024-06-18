var genSelect = document.getElementById("generation")

function genSelected(){
    var audio = new Audio('ButtonSound.mp3');
    audio.play();
}
function start(){
    console.log('start')
    self.LoadCustomer = function (data) {
        sessionStorage.setItem("data", JSON.stringify(data) );
        window.location = "PokeGuess.html";
    }

    self.LoadCustomer(genSelect.value)
}