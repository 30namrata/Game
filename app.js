let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGame= document.querySelector("#new-btn");
let showMsg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
//trun of player
let trun0 = true;
let count =0;

//logic in winning pattern
let winningpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
//resetGame
const resetGame =()=>{
    trun0= true;
    count =0;
    enablegame();
    msgContainer.classList.add("hide");
}
boxes.forEach((box) =>{
    box.addEventListener("click", ()=> {
        console.log("box is clicked")
        if(trun0){
            box.innerHTML ="<span style='color: blue;'>O</span>";
            trun0 = false;

        }
        else{
            box.innerHTML ="<span style='color: orange;'>X</span>";
            trun0 = true;
        }
        box.disabled= true;
        count++;


        let isWinner = checkWinner();
        if( count === 9 && !isWinner){ 
            gameDraw();
        }
    });
})
//Game should be Draw
const gameDraw =()=>{
    showMsg.innerText = "Game was a Draw.";
    msgContainer.classList.remove("hide");
    disabledWinner();

}
const disabledWinner =()=>{
    for(box of boxes){
        box.disabled = true;
    }
}
const enablegame = ()=>{
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}


const showwinner =(winner) =>{
    showMsg.innerHTML = `Congratulation Winner of ${winner}`;
    msgContainer.classList.remove("hide") ;
    disabledWinner();  
}

const checkWinner = () => {
    for(let pattern of winningpattern){
        let pos1Val=boxes[pattern[0]].innerHTML;
        let pos2Val=boxes[pattern[1]].innerHTML
        let pos3Val=boxes[pattern[2]].innerHTML;
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""  ) {
            if(pos1Val === pos2Val && pos2Val === pos3Val){
               showwinner(pos1Val);
            }

        }
    }
}
//ResetBtn and New Game Btn should be trigger
newGame.addEventListener("click",resetGame)
resetBtn.addEventListener("click",resetGame)



