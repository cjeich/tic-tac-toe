// Our single global variable
// X or O?
var playerLetter = 'x';

// Handles all of the necessary dom changes for changing current player
function togglePlayerLetter(current) {
  var oldLetter = current;
  var newLetter = (current === 'x')? 'o' : 'x';

  updateBodyClass(oldLetter, newLetter);
  updateRadioButtons(newLetter);
  window.playerLetter = newLetter;
}

function updateBodyClass(oldLetter, newLetter){
  // CSS relies on a class on the body tag for hover highlights
  //   we are updating that here.
  document.body.classList.remove('user-'+oldLetter);
  document.body.classList.add('user-'+newLetter);
}

function updateRadioButtons(newLetter){
  // Using querySelector here since as radios we know only one can be checked
  //   this way we avoid converting to and looping through an unecessary array
  //   we could also have used getElementById for both
  var oldInput = document.querySelector('.player-toggle input[type="radio"][checked]');
  var newInput = document.getElementById('current-player-x');

  oldInput.removeAttribute('checked');
  newInput.setAttribute('checked', 'checked');
}

// Once we have a DOM on the page, then add our event listeners
document.addEventListener('DOMContentLoaded', function(e){
  // thanks to event bubbling we only need to set a listener on the board
  // and we will receive events from any of the cells that are clicked
  var board = document.querySelector('.board');

  board.addEventListener('click', function(e){
    var cell = e.target;

    // Make sure we have the correct clicked element
    if(!cell.classList.contains('cell')){ return false; }

    // Add the x or o class if there isn't one already
    if(!cell.classList.contains('has-o') && !cell.classList.contains('has-x')){
      cell.classList.add('has-' + playerLetter);
    }

    togglePlayerLetter(playerLetter);
  })
});
