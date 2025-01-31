let boxes = document.querySelectorAll(".box");
let resetb = document.querySelector("#reset");
let newg = document.querySelector("#reset");
let msgcon = document.querySelector("#msg-Container");
let msg = document.querySelector("#msg");


let turn0 = true;
const winPattrens = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8],
];

boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        if(turn0) {
            box.innerText ="O";
            turn0 = false;

        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
    });
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const showWinner = (winner) =>{
    msg.innerText = `Congratulations!,Winner is $(winner)`;
    msgcon.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for(let pattern of winPattrens){
        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;
        
        if(posval1 != "" && posval2 != "" && posval3 != ""  ){
            if(posval1 === posval2 && posval2 === posval3) {
            showWinner(posval1);
            }
        }
    }
};