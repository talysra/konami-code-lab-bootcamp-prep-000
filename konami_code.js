const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  function keyDownAlert {
    const keyboardEvent = document.querySelector('input')
    keyboardEvent.addEventListener('keydown', function(event) {
      alert("Konami Code!");
    }
  }

}

init();
