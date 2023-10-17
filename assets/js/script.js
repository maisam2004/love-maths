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
                alert(`You clicked ${gameType}`);
            }
        })
    }
})


function runGame(){

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
function displayAdditionQuestion(){

}
function displaySubtractQuestion(){

}
function displayMultiplyQuestion(){

}