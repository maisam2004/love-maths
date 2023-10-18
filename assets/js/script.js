//wait for the DOM to finish loading run game
// get button elements add event listners to them

document.addEventListener("DOMContentLoaded",function(){
    let buttons = document.getElementsByTagName('button');
    for (let button of buttons){
        button.addEventListener('click',function(){
            if(this.getAttribute("data-type") == "submit"){
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                //give runGame arg >> gameType 
                runGame(gameType);
            }
        })
    }
    // set defult game as addition
    runGame("addition");
})

/** the main game "loop", called when script is fist loaded
 * and after the user's answer has been processed
*/
function runGame(gameType){
    //create two random Numbers between 1 and 25
    let num1 = Math.floor(Math.random() *25 ) +1;
    let num2 = Math.floor(Math.random() * 25 ) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
      } else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);
      } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
      }
      

}

/**
 * checks the answer aginst the first element in 
 * the returned calculateCorrectAnswer array
 */
function checkAnswer(){
    let userAnswer = parseInt(document.getElementById('answer-box').value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];
    if (isCorrect){
        incrementScore();
        alert('Hey ! You got it right :> ');
    }else{
        inscrementWrongAnswer();
        alert(`Awww .... you answered ${userAnswer}.the correct answer was ${calculatedAnswer[0]} `);
    }
    runGame(calculatedAnswer[1]);

}

/**
     * Gets the operands (the numbers ) and the operator(plus ...)
     * directly from dom, and returns the correct answer.
     */
function calculateCorrectAnswer(){
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    
    let operator = document.getElementById('operator').innerText;

    if(operator === "+"){
        return [operand1 + operand2 ,"addition"];

    }else if(operator === "x"){
        return [operand1*operand2,"multiply"];

    }else{
        alert(`unimplemented operator ${operator}`) ;
        throw `unimplemented op ${operator}.Aborting`;
    }

}
function calculateIncorrectAnswer(){


}

/**
 * gets the current score from the Dom and increments it by 1
 */


function incrementScore(){
    let oldScore = parseInt(document.getElementById('score').innerText)
    document.getElementById('score').innerText = ++oldScore;

}
/**
 * gets the current wrong score from the Dom and increments it by 1
 */
function inscrementWrongAnswer(){
    let oldScore = parseInt(document.getElementById('incorrect').innerText)
    document.getElementById('incorrect').innerText = ++oldScore;

}
function displayAdditionQuestion(operand1,operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";

}
function displaySubtractQuestion(){

}
function displayMultiplyQuestion(operand1,operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "X";

}