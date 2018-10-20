var canvas = document.getElementById('gameCanvas');
canvas.width = 500;
canvas.height = 500;

var ctx = canvas.getContext('2d');

var playerX = 0;
var playerY = 0;
var playerWidth = 50;
var playerHeight = 50;

var rightArrowIsDown = false;
var leftArrowIsDown = false;

addEventListener('keydown', doSomethingAfterKeydown);

// change variables once key is up
addEventListener('keyup', doSomethingAfterKeyup);

function doSomethingAfterKeyup(event) {
    if (event.keyCode == 39) { // RIGHT 
        rightArrowIsDown = false;
    } else if (event.keyCode == 37) { // LEFT ARROW
        leftArrowIsDown = false;
    }
}

function doSomethingAfterKeydown(event) {
    console.log(event.keyCode); 

    if (event.keyCode == 39) { // RIGHT ARROW
        rightArrowIsDown = true;
    } else if (event.keyCode == 37) { // LEFT ARROW
        leftArrowIsDown = true;
    }
}

function gameLoop() {
    if (rightArrowIsDown) {
        playerX += 10;
    } else if (leftArrowIsDown) {
        playerX -= 10;
    }

    ctx.fillRect(playerX, playerY, playerWidth, playerHeight);

    requestAnimationFrame(gameLoop);
}

gameLoop();