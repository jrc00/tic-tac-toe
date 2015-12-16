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

// GAME PLAY
$(document).ready(function() {
    console.log('ready');

    // Alternate Players and Log Moves to Console
    $('.square').click(function() {
        var square = $(this);
        // console.log(square);
        square.prepend(playerTurn);
        square.off('click'); // freeze square after player's turn
        game[this.id] = playerTurn; // add each move to game array
        console.log(game);
        counter++;
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
    });

    // check for winner - DRAFT
    function checkWinner() {
        for (k in this.winningCombo) {
            var pattern = this.winningCombo[k];
            var p = this.game[pattern[0]] + this.game[pattern[1]] + this.game[pattern[2]];
            if (p === 'XXX') {
                return 'X'; // X wins
            } else if (p === 'OOO') {
                return 'O'; // O wins
            };
        };
    };

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
    $('.square').on('click'); //unfreeze squares
    game = [null, null, null, null, null, null, null, null, null]; // resets board
    playerTurn = 'X';
    $('.square').text(''); // clear squares
}
