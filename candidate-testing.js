const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = '' ;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let questionBank = ['Who was the first American woman in space? ', 'True or false: 5 kilometer == 5000 meters? ','(5 + 3)/2 * 10 = ? ',"Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",'What is the minimum crew size for the ISS? '];
let correctAnswerBank = ['Sally Ride','true','40','Trajectory','3'];
let candidateAnswer = '';
let questions;
let correctAnswers;
let candidateAnswers = [];
let score = 0

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question('Enter your name... \n');
console.log('Welcome '+ candidateName+ '!');
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

for(let i= 0 ; i<questionBank.length;i++){
candidateAnswers[i] = input.question(questionBank[i]);
  if(candidateAnswers[i]==correctAnswerBank[i]){
    score++;
  }
}
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
let grade = (score/questionBank.length)*100;
let status = 'FAILED';
if(grade> 80){
  status = 'PASSED'
}
console.log(`Candidate Name: ${candidateName}`)
for(let i = 0; i< questionBank.length;i++){

  console.log(`${i+1}) ${questionBank[i]} \n Your Answer: ${candidateAnswers[i]} \n Correct Answer: ${correctAnswerBank[i]} \n`);

}
console.log(`>>> Overall Grade: ${grade}% (${score} of ${questionBank.length} responses correct)<<< \n >>> Status: ${status} <<<`);
}

function runProgram() {
  
  // TODO 1.1c: Ask for candidate's name //
  askForName();
  askQuestion();
 console.log(gradeQuiz(this.candidateAnswers));
  
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: questionBank,
  correctAnswer: correctAnswerBank,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};