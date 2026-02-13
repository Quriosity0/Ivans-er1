const target = document.querySelector(".box"),
btn = document.querySelector(".btn")

let pos =0


function Anim(){
const Goin = setInterval(frame,50)
function frame(){
    if(pos === 750){
        clearInterval(Goin)
    }
    else{
        pos+=5
    target.style.top = pos +"px"
    target.style.left = pos + "px"
    }
}
}
btn.addEventListener("click",Anim)

