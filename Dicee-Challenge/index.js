document.addEventListener("click", function () {
    rollDice();
})

function rollDice() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
    document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩Player 1 win!";
    }
    else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 2 win! 🚩";
    }
    else {
        document.querySelector("h1").innerHTML = "Draw!";
    }
    document.querySelector("h2").innerHTML = "Don't forget to click the website for the new game";
}

