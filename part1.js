// alright, so the first thing is that we need to review console.log
var name = "Your name";
console.log(name);

// if you see your name pop up in your browser console, we're ready to get working!
// the first thing we need to do is set up our canvas (set the size and some settings)
var canvas = document.getElementById('gameCanvas');
canvas.width = 500;
canvas.height = 200;

var ctx = canvas.getContext('2d'); // tell it we're making a 2d game

// now we need cover how to get keyboard input

// basically, here we are saying if you press a key, run the doSomethingAfterKeydown function with whatever event happened
// the 'event' variable stores info like what key we pressed. 
addEventListener('keydown', doSomethingAfterKeydown);

function doSomethingAfterKeydown(event) {
    // Do you remember how we print things out?
    // let's print out the key we pressed
    console.log(event.keyCode); 

    // after opening your webpage and pressing a key, you should see a number pop up in the console
}