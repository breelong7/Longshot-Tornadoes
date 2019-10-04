'use strict';

function submitAnswer() {

  function answerScore(qName) {
    var buttonNumber = document.getElementsByName(qName);

    for (var i = 0, length = buttonNumber.length; i < length; i++) {
      if (buttonNumber[i].checked) {
        var answerValue = Number(buttonNumber[i].value);
      }
    }

    if (isNaN(answerValue)) {
      answerValue = 0;
    }
    return answerValue;
  }

  var score = (answerScore('question1') + answerScore('question2') + answerScore('question3') + answerScore('question4'));


  function correctAnswer(correctStringNo, qNumber) {
    return ('The correct answer for question #' + qNumber +
            (document.getElementById(correctStringNo).innerHTML));
  }



  var countArr = document.getElementsByClassName('question');

  var counter = 0;
  for (var i = 0, length = countArr.length; i < length; i++) {
    counter++;
  }



  var displayScore = 'Your Score: ' + score + '/' + counter;
  //var couponImage = "img/Beer.jpg";
  var img = new Image();   // Create new img element
  img.src = 'img/Beer.jpg';
  if (score === counter) {
    displayScore = displayScore + 'Awesome if you have won buzzed quiz';
    var displayImageElement =  document.getElementById('displayImage');
    var h2El = document.createElement('h2');
    h2El.textContent = `You have won ${img.src}`;
    displayImageElement.appendChild(h2El);
  }
  document.getElementById('userScore').innerHTML = displayScore;
}


function refreshPage(){
  window.location.reload();
}


