var omniTime = 1500;
var time = omniTime;
var breakTime = 300;
var startTimer;
var startBreak;
var timerOn = false;
var breakOn = false;

function converter(seconds) {
  var mins, sec;
  mins = Math.floor(seconds / 60);
  sec = seconds - mins * 60;
  if (sec < 10) {
    return mins + ":0" + sec;
  }
  return mins + ":" + sec;
}

function countDown() {
  timerOn = true
  time -= 1;

  if (timerOn == true) {
    $("#timeType").text("Focus");
  }
  if (breakOn == true) {
    $("#timeType").text("Relax");
  }

  $("#timer").text(converter(time));

  if (time < 1 && breakOn == true) {
    clearInterval(startTimer);
    breakOn = false;
    time = omniTime;
    startTimer = setInterval(countDown, 1000);

  }

  if (time < 1 && timerOn == true) {
    clearInterval(startTimer);
    breakCount();
  }
}

function breakCount() {
  breakOn = true;
  time = breakTime;
  startTimer = setInterval(countDown, 1000);

}

$("#start").click(function() {
  if (timerOn == false) {
    startTimer = setInterval(countDown, 1000);
  }
});

$("#stop").click(function() {
  timerOn = false
  clearInterval(startTimer);
});

$("#reset").click(function() {
  timerOn = false;
  breakOn = false;
  time = omniTime;
  $("#timeType").text("Ready?");
  clearInterval(startTimer);
  $("#timer").text(converter(time));
});

$(document).ready(function() {
  if (timerOn == true) {
    $("#timeType").text("Focus");
  } else if (breakOn == true) {
    $("#timeType").text("Relax");
  }

});

$("#sessionTime").text(converter(omniTime));

$("#sessionUp").click(function() {
  if (timerOn == false) {
    omniTime += 60;
    time = omniTime;
    $("#sessionTime").text(converter(omniTime));
  }
});

$("#sessionDown").click(function() {
  if (timerOn == false) {
    if (omniTime > 60) {
      omniTime -= 60;
      time = omniTime;
      $("#sessionTime").text(converter(omniTime));
    }
  }
});

$("#breakTime").text(converter(breakTime));

$("#breakUp").click(function() {
  if (timerOn == false) {
    breakTime += 60;
    $("#breakTime").text(converter(breakTime));
  }
});

$("#breakDown").click(function() {
  if (timerOn == false) {
    if (breakTime > 60) {
      breakTime -= 60;
      $("#breakTime").text(converter(breakTime));
    }
  }
});
