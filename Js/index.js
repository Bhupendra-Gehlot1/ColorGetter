let container =document.querySelector('container')
let box=document.querySelector('.box');
let get=document.querySelector('.get')
let hex=document.querySelector("span")


function changeColor(){
    let all='0123456789ABCDEF'

    let finalCode="#"

    for(let i=0;i<6;i++){
        finalCode+=all[Math.floor(Math.random()*16)];
    }

    document.body.style.background=finalCode;
    box.style.background=finalCode;
    hex.innerHTML=finalCode;

}

  function copycontent(){
    let textArea = document.createElement("textarea");
    textArea.value = hex.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    navigator.clipboard.writeText(textArea.value);
    textArea.remove();
       alert("Copied to Clickboard","Yeah ");
    }