var canvas = document.getElementById('gameCanvas');
canvas.width = 500;
canvas.height = 500;

var ctx = canvas.getContext('2d');

// let's make 2 new variables to store our player's X and Y positions
var playerX = 0;
var playerY = 0;
var playerWidth = 50;
var playerHeight = 50;

// let's create some variables to track which keys are down
var rightArrowIsDown = false;
var leftArrowIsDown = false;

addEventListener('keydown', doSomethingAfterKeydown);

function doSomethingAfterKeydown(event) {
    console.log(event.keyCode); 

    // update our player's position
    // get students to say which keycode corresponds with left arrow, right arrow, down, up
    if (event.keyCode == 39) { // RIGHT ARROW
        rightArrowIsDown = true;
    } else if (event.keyCode == 37) { // LEFT ARROW
        leftArrowIsDown = true;
    }
}

// this function will just run over and over again
function gameLoop() {
    if (rightArrowIsDown) {
        playerX += 1;
    } else if (leftArrowIsDown) {
        playerX -= 1;
    }

    // draw our player (the square)
    ctx.fillRect(playerX, playerY, playerWidth, playerHeight);
    ctx.stroke();

    // tell browser to run gameLoop() again ASAP!
    requestAnimationFrame(gameLoop);
}

gameLoop();