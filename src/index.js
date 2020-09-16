import "./styles.css";

var questionBtn = document.getElementById("questionBtn"),
  displayAnswer = document.getElementById("displayAnswer"),
  magicQnA = {};

magicQnA.answersList = ["Absolutely", "Yes", "Maybe", "Not Sure!", "No"];

var getAnswer = function () {
  var i = Math.floor(Math.random() * magicQnA.answersList.length);
  displayAnswer.innerText = magicQnA.answersList[i];
};

var askQuestion = function () {
  prompt("Type your Question:", "");
  getAnswer();
};

questionBtn.addEventListener("click", askQuestion);
