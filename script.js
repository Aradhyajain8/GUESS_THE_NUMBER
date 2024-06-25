var number = Math.trunc(Math.random() *20)+1;
let score =20;
let highscore = 0;

//to display the msg about the guessing that is passed in the function 
const display_msg = function(message){
    document.querySelector('#guess').textContent= message;
}

const current_score = function(currScore){
    document.querySelector('.curr_score').textContent =currScore;
}

document.querySelector('#button').addEventListener('click', function tocheck() {
    const user_value = Number(document.querySelector('#input').value);
    
    //checking range of number
    if (user_value>0 && user_value<21 ){
        if(number === user_value){
        display_msg('Correct Guess 🥳');
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('#question_mark').textContent = number;
            document.querySelector('#question_mark').style.fontSize= '60px';
            
            if(score > highscore){
                highscore= score;
                document.querySelector('.curr_highscore').textContent = score;
            }
        }
        else if (user_value !== number){
            if(score>1){
                // document.querySelector('#guess').textContent = user_value > number ? 'Too high ' : 'Too low';
                display_msg(user_value > number ? 'Too high ' : 'Too low');
                score--;
                current_score(score);
            }else{
                current_score(0);
                display_msg('you lost 😢');

            }
        }
    }
    // if input field is empty
    else if(!user_value){
        display_msg('no number');
    }
    //if the number is greater than 20 or less than 1
    else{
       display_msg('wrong number ☠️');
       document.querySelector('body').style.backgroundColor= '#ff0000';
    }
});

// to restart the game on clicking again 
document.querySelector('#again').addEventListener('click', function startagain(){

    score=20;
    number = Math.trunc(Math.random() *20)+1;
    current_score(score);
    display_msg('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#d3d3d3';
    document.querySelector('#question_mark').textContent = '?';
    document.querySelector('#input').value = '';

});