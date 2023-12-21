//BENNI sezione earn script che modifica l'immagine al passaggio del mouse

const imageHover = document.querySelector(".card-image")

imageHover.addEventListener("mouseover", ()=>{
    imageHover.src = "assets/earn-farm.webp"
    imageHover.addEventListener("mouseout",()=>{
        imageHover.src = "assets/earn-farm-purple.webp"
    })
})