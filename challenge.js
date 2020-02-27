// QUESTION: constructor

/*
(function () {
  var Question = function (question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  };

  Question.prototype.displayQuestion = function () {
    console.log(this.question);
    for (let i in this.answers){
      console.log(i,': ',this.answers[i]);
    }
  };

  Question.prototype.checkAnswer = function (ans) {
    if (ans === this.correctAnswer) {
      console.log('Congratulations, Correct answer!');
    } else {
      console.log('Wrong answer, try again :(((');
    }
  };

  var question1 = new Question('Is Bomman handsome?',['Yes','No'],0);
  var question2 = new Question('What is the date today',['25/2','26/2','27/2'],1);
  var question3 = new Question('See Us Go???',['Yes','No'],0);
  var questions = [question1,question2,question3]

  var randomQuestion = Math.floor(Math.random() * questions.length);
  questions[randomQuestion].displayQuestion();

  var playerAnswer = parseInt(prompt('Please choose a correct answer'));
  questions[randomQuestion].checkAnswer(playerAnswer);
})();
*/

(function() {
  var Question = function(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  };

  Question.prototype.displayQuestion = function() {
    console.log(this.question);
    for (let i in this.answers) {
      console.log(i, ': ', this.answers[i]);
    }
  };

  Question.prototype.displayScore = function(score) {
    console.log('Your current score is: ' + score);
  }

  Question.prototype.checkAnswer = function(ans, callback) {
    var sc;
    if (gamePlaying) {
      if (ans === this.correctAnswer) {
        console.log('Congratulations, Correct answer!');
        sc = callback(true);
      } else {
        console.log('Wrong answer, try again :(((');
        sc = callback(false);
      }
      console.log('Your current score is: ' + sc, ' hehe');
      this.Finalscore = sc;
      gamePlaying = true;
    } else {
      console.log('Hehehehehehehehe');
      console.log('Thanks for play our game!');
      console.log('Final score: '+ this.Finalscore);
    }
  };
  var question1 = new Question('Nha Hung co may nguoi?', ['1', '2', '3', '4', '5'], 4);
  var question2 = new Question('What is the date today', ['25/2', '26/2', '27/2'], 2);
  var question3 = new Question('Kim co cham hoc khong', ['Yes', 'No'], 1);
  var questions = [question1, question2, question3];

  function score() {
    var sc = 0;
    return function(correct) {
      if (correct) {
        sc++;
      };
      return sc;
    }
  };
  var gamePlaying = true;
  var keepScore = score();

  function nextQuestion() {
    if (gamePlaying) {
      var randomQuestion = Math.floor(Math.random() * questions.length);
      questions[randomQuestion].displayQuestion();

      var playerAnswer = prompt('Please choose a correct answer');

      if (playerAnswer !== 'exit') {
        questions[randomQuestion].checkAnswer(parseInt(playerAnswer), keepScore);
        nextQuestion();
      } else {
        gamePlaying = false;
        questions[randomQuestion].checkAnswer(parseInt(playerAnswer), keepScore);
      }
    }
  };
  nextQuestion();
})();









/////
