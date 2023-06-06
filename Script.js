function countdown(number, callback) {
    if (number > 0) {
      setTimeout(function() {
        document.getElementById('countdown').innerHTML = number;
        countdown(number - 1, callback);
      }, 1000);
    } else {
      setTimeout(function() {
        document.getElementById('countdown').innerHTML = "Happy Independence Day!";
        callback();
      }, 1000);
    }
  }
  
  countdown(10, function() {
    // Callback function
    console.log("Countdown completed!");
  });
  