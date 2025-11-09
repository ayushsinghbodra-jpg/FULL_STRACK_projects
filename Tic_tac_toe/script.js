let boxes = document.querySelectorAll(".box");
let reset =document.querySelector(".reset");
let newbutton=document.querySelector(".New_game");
let msg=document.querySelector(".msg");
let msgContainer=document.querySelector(".msg_container");

let turnO=true;

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

const resetGame= () =>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
const disableBoxes=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const show_winner=(winner)=>{
    msg.innerText=`Congratulations , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const checkwinner = () =>{
    for(pattern of winpatterns){
        if (boxes[pattern[0]].innerText!='' && boxes[pattern[1]].innerText!='' && boxes[pattern[2]].innerText!=''){
            if (boxes[pattern[0]].innerText===boxes[pattern[1]].innerText && boxes[pattern[1]].innerText===boxes[pattern[2]].innerText){
                show_winner(boxes[pattern[0]].innerText);
            }
        }
    }
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            box.style.color="white";
            turnO=false;
        }else{
            box.innerText="X";
            box.style.color="black";
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    });
});

newbutton.addEventListener("click",resetGame)
reset.addEventListener("click",resetGame)