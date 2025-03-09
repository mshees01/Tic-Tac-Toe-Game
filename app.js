let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".Reset");
let turn0 = true;
const win=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
];
const resetgame = () => {
    turn0 = true;
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false; 
    });
};
reset.addEventListener("click", () => {
    resetgame();
});
boxes.forEach((box) => { 
    box.addEventListener("click",()=>{
        console.log("box was clicked");
if (turn0){
    box.innerText="0";
    turn0=false;
}else{
    box.innerText = "X";
    turn0 = true;
}
box.disabled=true;
checkwinner();
     });
});
const checkwinner =()=>{
for(let pattern of win){
    let val1=boxes[pattern[0]].innerText;
    let val2=boxes[pattern[1]].innerText;
    let val3=boxes[pattern[2]].innerText;
    if (val1!="" &&val2!="" && val3!=""){
        if (val1===val2 && val2===val3){
            console.log("Winner is",val1);
            alert("Congratulations Winner is "+val1);
            disableboxes();
            return;
    }
}

}};
const disableboxes = () => {
    boxes.forEach(box => {
        box.disabled = true;
    });
};