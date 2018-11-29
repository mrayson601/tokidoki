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
    sec="0"+sec;
  }
  if (mins < 10){
    mins="0"+mins;
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
  timeString=converter(time);

  $("#timer").html('<span>'+timeString[0]+'</span>'+'<span>'+timeString[1]+'</span>'+'<span>'+timeString[2]+'</span>'+'<span>'+timeString[3]+'</span>'+'<span>'+timeString[4]+'</span>');

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
  timeString=converter(time);
  $("#timeType").text("Ready?");
  clearInterval(startTimer);
  $("#timer").html('<span>'+timeString[0]+'</span>'+'<span>'+timeString[1]+'</span>'+'<span>'+timeString[2]+'</span>'+'<span>'+timeString[3]+'</span>'+'<span>'+timeString[4]+'</span>');
});

$(document).ready(function() {
  if (timerOn == true) {
    $("#timeType").text("Focus");
  } else if (breakOn == true) {
    $("#timeType").text("Relax");
  }

  $("#timer").html('<span>2</span><span>5</span><span>:</span><span>0</span><span>0</span>');


});

timeString=converter(omniTime);
$("#sessionTime").html('<span>'+timeString[0]+'</span>'+'<span>'+timeString[1]+'</span>'+'<span>'+timeString[2]+'</span>'+'<span>'+timeString[3]+'</span>'+'<span>'+timeString[4]+'</span>');

$("#sessionUp").click(function() {
  if (timerOn == false) {
    omniTime += 60;
    time = omniTime;
    timeString=converter(time);
    $("#sessionTime").html('<span>'+timeString[0]+'</span>'+'<span>'+timeString[1]+'</span>'+'<span>'+timeString[2]+'</span>'+'<span>'+timeString[3]+'</span>'+'<span>'+timeString[4]+'</span>');

  }
});

$("#sessionDown").click(function() {
  if (timerOn == false) {
    if (omniTime > 60) {
      omniTime -= 60;
      time = omniTime;
      timeString=converter(time);
      $("#sessionTime").html('<span>'+timeString[0]+'</span>'+'<span>'+timeString[1]+'</span>'+'<span>'+timeString[2]+'</span>'+'<span>'+timeString[3]+'</span>'+'<span>'+timeString[4]+'</span>');
    }
  }
});

timeString=converter(breakTime);
$("#breakTime").html('<span>'+timeString[0]+'</span>'+'<span>'+timeString[1]+'</span>'+'<span>'+timeString[2]+'</span>'+'<span>'+timeString[3]+'</span>'+'<span>'+timeString[4]+'</span>');

$("#breakUp").click(function() {
  if (timerOn == false) {
    breakTime += 60;
    timeString=converter(breakTime);
    $("#breakTime").html('<span>'+timeString[0]+'</span>'+'<span>'+timeString[1]+'</span>'+'<span>'+timeString[2]+'</span>'+'<span>'+timeString[3]+'</span>'+'<span>'+timeString[4]+'</span>');

  }
});

$("#breakDown").click(function() {
  if (timerOn == false) {
    if (breakTime > 60) {
      breakTime -= 60;
      timeString=converter(breakTime);
      $("#breakTime").html('<span>'+timeString[0]+'</span>'+'<span>'+timeString[1]+'</span>'+'<span>'+timeString[2]+'</span>'+'<span>'+timeString[3]+'</span>'+'<span>'+timeString[4]+'</span>');

    }
  }
});
