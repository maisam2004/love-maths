//wait for the DOM to finish loading run game
// get button elements add event listners to them

document.addEventListener("DOMContentLoaded",function(){
    let buttons = document.getElementsByTagName('button');
    for (let button of buttons){
        button.addEventListener('click',function(){
            if(this.getAttribute("data-type") == "submit"){
                alert('You clicked Submit');
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
    let num1 = Math.floor(Math.random()*25)+1;
    let num2 = Math.floor(Math.random()*25)+1;

    if(gameType == "addition"){
        displayAdditionQuestion(num1,num2);
    }else{
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}.Aborting! `;
    }

}


function checkAnswer(){

}
function calculateCorrectAnswer(){

}
function calculateIncorrectAnswer(){

}
function incrementScore(){

}
function inscrementWrongAnswer(){

}
function displayAdditionQuestion(operand1,operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";

}
function displaySubtractQuestion(){

}
function displayMultiplyQuestion(){

}