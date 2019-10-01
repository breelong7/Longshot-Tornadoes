
'use strict';


'use strict';
var allQuestions = [];

function BuzzedQuiz(questions) {
  this.questions = questions;
  this.score = 0;
  this.questionIndex = 0;

  allQuestions.push(this);
}

new BuzzedQuiz('What is the world\'s most popular drink?');
new BuzzedQuiz('Which year was beer first made?');
new BuzzedQuiz('How much an average American spend on drinks per year?');
new BuzzedQuiz('Which state in US drinks ost beers?');
new BuzzedQuiz('What is the most popular non-alcoholic drink?');

BuzzedQuiz.prototype.getQuestionIndex = function () {
  return allQuestions[this.questionIndex];
};

BuzzedQuiz.prototype.guess = function (answer) {
  if (this.getQuestionIndex().isCorrectAnswer(answer)) {
    this.score++;
  }

  this.questionIndex++;
};

BuzzedQuiz.prototype.isEnded = function () {
  return this.questionIndex === allQuestions.length;
};


function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

Question.prototype.isCorrectAnswer = function (choice) {
  return this.answer === choice;
};


function populate() {
  if (quiz.isEnded()) {
    //showScores();
  }else {
    var element = document.getElementById('question');
    element.innerHTML = quiz.getQuestionIndex().text;

    var choices = quiz.getQuestionIndex().choices;
    for (var i = 0; i < choices.length; i++) {
      element = document.getElementById("choice" + i);
      element.innerHTML = choices[i];
      guess('btn' + i, choices[i]);
    }

    //showProgress();
  }
}

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate();
    }
}


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
 }

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
}

// create quiz
var quiz = new BuzzedQuiz(allQuestions);

// display quiz
populate();
