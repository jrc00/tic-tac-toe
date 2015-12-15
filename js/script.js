// // prompt for player names
// var playerX = prompt('Player 1 - enter name');
// var playerO = prompt('Player 2 - enter your name')

// --- GLOBAL VARIABLES ---
var game = [null, null, null, null, null, null, null, null, null];
var winningCombo = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
var playerTurn = 'X';
var counter = 0;

// --- GAME PLAY ---
$(document).ready(function () {
  console.log('ready');

// --- Alternate Players and Log Moves to Console ---
  $('.square').click(function() {
    var square = $(this);
    console.log(square);
    square.prepend(playerTurn);
    square.off('click', '**'); // freeze square after player's turn
    game[this.id] = playerTurn; // add move to game array
    console.log(game);
    playerTurn = playerTurn === 'X' ? 'O' : 'X';
  });


// check for winner


// check for tie


// --- CSS Fade Action on Mouseover ---
  $( '.square' ).hover(function() {
    $(this).fadeOut();
    $(this).fadeIn();
  });
});

// --- START A NEW GAME ---
$('#restart').on('click', newGame); // event listener
function newGame() {
  game = [null, null, null, null, null, null, null, null, null]; // resets board
  playerTurn = 'X';
  $('.square').text(''); // clear squares
  $('.square').on('click', '**');
}

