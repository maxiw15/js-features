let  timer = document.getElementById( 'timer' );
let time = timer.textContent
function countdown() {
  // Perform actions here
    timer.textContent = time
  if (time >= 0) {
    setTimeout(countdown, 1000); // Schedule the next execution after 1 second
  } else {
      alert("Вы победили в конкурсе!")
  }
    time--; // Update the time value
}

countdown()

