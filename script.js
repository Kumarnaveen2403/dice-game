var randomNum1 = Math.floor(Math.random() * 6 ) + 1;
var randomDiceImg1 = "dice" + randomNum1 + ".png";

var randomNum2 = Math.floor(Math.random() * 6 ) + 1;
var randomDiceImg2 = "dice" + randomNum2 + ".png";

if(randomNum1 > randomNum2) {
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
}else if(randomNum2 > randomNum1) {
    document.querySelector("h1").textContent = "🚩 Player 2 Wins!";
} else{
    document.querySelector("h1").textContent = "Draw!";
}

document.querySelector(".img1").setAttribute("src", "images/" + randomDiceImg1 );
document.querySelector(".img2").setAttribute("src", "images/" + randomDiceImg2 );