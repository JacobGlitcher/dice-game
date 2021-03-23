function roll() {
    let dice = document.querySelectorAll(".dice");
    function delayClassToggle() {
        for (let i = 0; i < dice.length; i++) {
            dice[i].classList.remove("shake-dice");
        }  
    }
    for (let i = 0; i < dice.length; i++) {
        dice[i].classList.add("shake-dice");
    }
    for (let i = 0; i < dice.length; i++) {
        document.querySelectorAll(".dice img")[i].setAttribute("src", "img/dice6.png")
    }
    setTimeout(delayClassToggle, 1250);
}

function randomizer() {
    let random1 = Math.floor(Math.random() * 6) + 1;
    let random2 = Math.floor(Math.random() * 6) + 1;
    let dice1 = document.querySelector(".player1 img");
    let dice2 = document.querySelector(".player2 img");
    dice1.setAttribute("src", `img/dice${random1}.png`);
    dice2.setAttribute("src", `img/dice${random2}.png`);
    if (random1 > random2) {
        document.querySelector(".play__subtitle").innerHTML = "Player 1 wins!";
    } else if(random1 < random2) {
        document.querySelector(".play__subtitle").innerHTML = "Player 2 wins!";
    } else {
        document.querySelector(".play__subtitle").innerHTML = "Draw!";
    }
}

function inBlock() {
    roll();
    setTimeout(randomizer, 1100);
}

document.querySelector(".play__click").addEventListener("click", inBlock);
