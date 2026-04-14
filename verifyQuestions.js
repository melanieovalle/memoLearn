/**
 * Adds functionality to the question section in the practice.
 */

const incorrectAnswer = document.getElementById("incorrect-answer");
const correctAnswer = document.getElementById("correct-answer");

if (incorrectAnswer) {
    incorrectAnswer.addEventListener("click", function () {
        console.log("incorrect answer selected");
        localStorage.setItem("answer", "incorrect");
    });
}

if (correctAnswer) {
    correctAnswer.addEventListener("click", function () {
        console.log("correct answer selected");
        localStorage.setItem("answer", "correct");
    });
}

let correctCard = document.getElementById("correct-answer-card");
let incorrectCard = document.getElementById("incorrect-answer-card");

if (correctCard || incorrectCard) {
    const answer = localStorage.getItem("answer");

    console.log("Stored answer:", answer);

    if (answer === "correct") {
        if (incorrectCard) incorrectCard.style.display = "none";
    } 
    else if (answer === "incorrect") {
        if (correctCard) correctCard.style.display = "none";
    }
}