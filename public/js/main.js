let un = document.querySelector("input");

un.addEventListener("focus",()=>{
    un.style.backgroundColor="blue";
})

// 2
let deux = document.getElementsByTagName("input")[1];
deux.addEventListener("focus",()=>{
    deux.style.backgroundColor="blue"
})

deux.addEventListener("focusout",()=>{
    deux.style.backgroundColor="white"
})

// 3