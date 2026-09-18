const mosquito = document.querySelector(".Mosquito")



function mudarposicaoMosquito()
{
mosquito.style.top = Math.ceil(Math.random() * (window.innerHeight - 100)) + "px"
mosquito.style.left = Math.ceil(Math.random() * (window.innerWidth - 100)) + "px"
}

setInterval( mudarposicaoMosquito, 1000)

mosquito.addEventListener("click", function(){
    alert("voce clicou")
})