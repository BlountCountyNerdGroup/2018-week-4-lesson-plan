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
addEventListener('keyup', doSomethingAfterKeyup);

function doSomethingAfterKeyup(event) {
    if (event.keyCode == 39) { // RIGHT ARROW
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

    // fill in a white rectangle the size of the canvas
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // draw our player (the square) and change its hex code
    ctx.fillStyle = '#000000';
    ctx.fillRect(playerX, playerY, playerWidth, playerHeight);

    requestAnimationFrame(gameLoop);
}

gameLoop();

// after this point, get them to implement the up and down movement
