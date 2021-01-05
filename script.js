//upon pressing  
let count = 0;
let counterContainer= document.querySelector('.counter');
let Btn = document.querySelectorAll(".ctrl-pnl-btn");
counterContainer.innerText=count;
// functions
function increment(){
    return counterContainer.innerText=count++;
}
function decrement(){
    return counterContainer.innerText=count--;
}
function reset(){
    return counterContainer.innerText=0;
}
//  Event Listeners
Btn[0].addEventListener('click',decrement);
Btn[1].addEventListener('click',reset);
Btn[2].addEventListener('click',increment);
