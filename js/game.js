'use strict';

// eslint-disable-next-line no-unused-vars
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


  var countArr = document.getElementsByClassName('question');

  var counter = 0;
  for (var i = 0, length = countArr.length; i < length; i++) {
    counter++;
  }


  var displayScore = 'Your Score: ' + score + '/' + counter;

  if (score === counter) {
    displayScore = displayScore + '; Awesome, You have won buzzed quiz!';
  } else if (score === 3) {
    displayScore = displayScore + '; You were neatly close!';
  } else if (score === 2) {
    displayScore = displayScore + '; Not bad, You are halfway!';
  } else if (score < 2) {
    displayScore = displayScore + '; Sorry, Try again!';
  }
  document.getElementById('userScore').innerHTML = displayScore;
}



