let dice1 = document.getElementById('dice1');
let dice2 = document.getElementById('dice2');
// let result = document.getElementById('result');


function getRandomDices() {
    randomDice(dice1);
    randomDice(dice2);
}

function randomDice(dice) {
    // check if dice has been generated
    if (dice.hasChildNodes()) {
        // if true, then delete dices to avoid duplication
        dice.removeChild(dice.childNodes[0]);
    } 

    // random number from 1 to 6
    let randomNum = Math.floor(Math.random() * 6) + 1;
    // create a new element for images
    let img = document.createElement('img');
    // get random dice images with dom manipulation
    img.src = 'img/dice' + randomNum + '.png';

    dice.appendChild(img);



    // fix total score
    console.log(randomNum);
    // result.innerHTML = randomNum;
}
