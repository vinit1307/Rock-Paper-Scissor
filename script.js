let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choices");
const message=document.querySelector("#msg");
const userScorePara=document.querySelector("#your-score");   
const compScorePara=document.querySelector("#comp-score");   


const gamedraw=()=>{
    message.innerText="Game was Draw!";
    message.style.backgroundColor="#5B99C2" 
}


const compChoice=()=>{
    const options=["rock","paper","scissors"];
    const randomIndx=Math.floor(Math.random()*3);
    return options[randomIndx];
}

Winner=(userWin)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        message.innerText="You Win!";
        message.style.backgroundColor="green" 
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        message.innerText="You Lose!";
        message.style.backgroundColor="red" 
    }
}

const playGame=(userChoice)=>{
    const computerChoice=compChoice();
   
    if(userChoice===computerChoice){
        gamedraw();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=computerChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=computerChoice==="scissors"?false:true;
        }
        else{
            userWin=computerChoice==="rock"?false:true;
        }
        Winner(userWin);
    }
};

choices.forEach((choices)=>{
    choices.addEventListener("click",()=>{
        const userChoice=choices.getAttribute("id");
       playGame(userChoice);
    })
})
