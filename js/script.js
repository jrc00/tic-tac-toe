// // prompt for player names
// var playerX = swal({
//   title: "Player X",
//   text: "Enter your name",
//   type: "input",   showCancelButton: true,   closeOnConfirm: false,   animation: "slide-from-top", },
//   function(inputValue){   if (inputValue === false) return false;
//     swal("Nice!", "Good luck, " + inputValue, "success"); });;

// var playerO = swal({
//   title: "Player O",
//   text: "Enter your name",
//   type: "input",   showCancelButton: true,   closeOnConfirm: false,   animation: "slide-from-top", },
//   function(inputValue){   if (inputValue === false) return false;
//     swal("Nice!", "Good luck, " + inputValue, "success"); });;

// GLOBAL VARIABLES
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

function doSquareClick() {
    var square = $(this);
    // console.log(square);
    square.prepend(playerTurn);
    square.off('click'); // freeze square after player's turn
    game[this.id] = playerTurn; // add each move to game array
    console.log(game);
    counter++;

    var winner = checkWinner();
    console.log('winner: ' + winner);

    // check for tie
    if (counter === 9) {
    // sweetalert prompt
        swal({
            title: "Cat's Game",
            text: "Try Again",
            imageUrl: "images/grumpycat.png"
        });
    }
    playerTurn = playerTurn === 'X' ? 'O' : 'X'; // toggle between players
}

function checkWinner() {
    console.log('checkWinner: game = ' + game);
    var xWins = winningCombo.some(function(wc) {
        return game[wc[0]] === 'X' && game[wc[1]] === 'X' && game[wc[2]] === 'X';
    });
    if (xWins) {
        return 'X';
    }

    var oWins = winningCombo.some(function(wc) {
        return game[wc[0]] === 'O' && game[wc[1]] === 'O' && game[wc[2]] === 'O';
    });
    if (oWins) {
        return 'O';
    }

    return null;
}

// GAME PLAY
$(document).ready(function() {
    console.log('ready');

    // Alternate Players and Log Moves to Console
    $('.square').click(doSquareClick);


// log winners and ties


// CSS Fade Action on Mouseover
$('.square').hover(function() {
    $(this).fadeOut(200);
    $(this).fadeIn(200);
});
});

// START A NEW GAME
$('#restart').click(newGame);
  function newGame() {
    $('.square').on('click', doSquareClick  ); //unfreeze squares
    game = [null, null, null, null, null, null, null, null, null]; // resets board
    playerTurn = 'X';
    $('.square').text(''); // clear squares
}
