let output = document.getElementById("dice");
// create a new element for images
let img = document.createElement('img');

function getRandomDice() {
    // random number from 1 to 6
    let randomNum = Math.floor(Math.random() * 6) + 1;

    // get random dice images with dom manipulation
    img.src = 'images/dice' + randomNum + '.png';

    // output result
    output.appendChild(img);

    console.log(output.appendChild(img))
}