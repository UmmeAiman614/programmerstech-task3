let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newGameBtn= document.querySelector(".new-btn");
let msgcontainer= document.querySelector(".msg-container");
let msg= document.querySelector("#msg");
let turnO = true;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


const resetGame=()=>{
turnO=true;
enableBoxes();
msgcontainer.classList.add("hide");
};


boxes.forEach((box) => {
    box.addEventlistener("click", () => {
            console.log("box was clicked");
            box.InnerText = "abcd";
            if (turnO) {
                box.InnerText = "O";
                turnO = false;
            }
            else {
                box.InnerText = "X";
                turnO = true;
            }
            box.disabled = true;
            checkWinner();
        } );
});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
    }
    box.innerText="";
};

const showWinner=(winner)=>{
msg.innerText='congratulations, Winner is ${winner}';
msgcontainer.classList.remove("hide");
disableBoxes();

}
const checkWinner=() =>{
for ( let pattern of winpatterns){
     let pos1var=boxes[pattern[0]].innerText;
     let pos2var=boxes[pattern[1]].innerText;
     let pos3var=boxes[pattern[2]].innerText;
    
     if(pos1val!="" && pos2val!="" && pos3val!="" ){
        if(pos1val===pos2val && pos2val===pos3val){
            console.log("winner" , pos1val);
            showWinnwer(pos1val);
        }
     }
}
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);


















// let options=["", "", "", "", "", "", "", "", "",];
// let currentPlayer= "X";
// let running = "false";

// initializegame();

// function initializegame(){
//     boxes.forEach((box) => {
//             box.addEventlistener("click", cellClicked => {
// resetBtn.addEventListener("click", restartGame);
// statusText.textContent=  ${currentPlayer}  's turn';
// running = true;

//             } );
//             });
// }
// function cellClicked(){
// const cellIndex= this.getAttribute("cellIndex");
// if (options[cellIndex] !="" || !running){
//     return;
// }
// updateCell(this,cellIndex);
// checkWinner();
// }
// function updateCell(cell, index){
// options[index]=currentPlayer;
// cell.textContent= currentPlayer;

// }
// function changePlayer(){

// }
// function checkWinner(){

// }

// function restartGame(){

// }





