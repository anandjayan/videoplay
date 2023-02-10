const btn = document.querySelector(".btn")
const video = document.querySelector(".bgvideo")
const pauseplay = document.querySelector(".fa")
const preload = document.querySelector(".preload")

btn.addEventListener("click", ()=>{
    if(btn.classList.contains("pause")){
        btn.classList.remove("pause")
        video.play()
        pauseplay.classList.add("fa-pause")
        pauseplay.classList.remove("fa-play")


    }
    else{
        btn.classList.add("pause")
        video.pause()
        pauseplay.classList.add("fa-play")
        pauseplay.classList.remove("fa-pause")

    }
})

window.addEventListener("load", ()=>{
    preload.style.zIndex ="-2";
})