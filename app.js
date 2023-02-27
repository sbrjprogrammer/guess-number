

// let message = document.querySelector(".message")
// message.textContent="correct answer"


const number =Math.trunc(Math.random()*20);
let score = 20
let highscore =20
// document.querySelector('.number').textContent=number




document.querySelector(".check").addEventListener("click",function(){
    const guess = Number(document.querySelector('.guess').value)
 

    if(!guess){
        document.querySelector('.message').textContent="no number"




    }else if(guess===number){
        document.querySelector('.message').textContent="correct Answer";
        score++;
        document.querySelector('.score').textContent=score;
        document.querySelector("body").style.backgroundColor="#60b347"
        document.querySelector('.number').textContent=number
        if(score>highscore){
            highscore==score
            document.querySelector('.highscore').textContent=highscore

        }
    }
    
    else if(guess>number){
       if(score>1){
        document.querySelector('.message').textContent="too high"
        score--;
        document.querySelector('.score').textContent=score
       }else{
        let loss=document.querySelector('.message').textContent="you loss the game"
        console.log(loss)
       }

    }
    
    else if(guess<number){
        if(score>1){
            document.querySelector('.message').textContent="too low"
            score--;
            document.querySelector('.score').textContent=score
           }else{
            let loss=document.querySelector('.message').textContent="you loss the game"
            console.log(loss)
           }
    }
})


function rel(){
    window.location.reload(true)
}