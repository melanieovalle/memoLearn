/**
 * Adds functionality to the question section in the practice.
 */

const incorrectAnswer = document.getElementById("incorrect-answer");
const correctAnswer = document.getElementById("correct-answer");

if (incorrectAnswer) {
  incorrectAnswer.addEventListener("click", function () {
    localStorage.setItem("answer", "incorrect");
    localStorage.setItem("incorrectFeedback", incorrectAnswer.dataset.feedback ?? "That's not quite right. Review the material and try again.");
  });
}

if (correctAnswer) {
  correctAnswer.addEventListener("click", function () {
    localStorage.setItem("answer", "correct");
    localStorage.setItem("correctFeedback", correctAnswer.dataset.feedback ?? "Well done! That's correct.");
  });
}