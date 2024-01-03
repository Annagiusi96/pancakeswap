//BENNI sezione earn script che modifica l'immagine al passaggio del mouse
//IMPORTANTE! scaricare le immagini delle card e inserirle dentro la directory ./assets
//i percorsi degli assets vanno posti dentro gli array in ordine, in quanto la funzione associa
//le immagini con indici uguali
const imageHover = document.querySelectorAll(".card-image-earn")

const dataImageEarn = [
    "assets/earn-farm.webp",
    "assets/earn-fixed-staking.webp",
    "assets/earn-liquidity-staking.webp",
    "assets/earn-pools.webp"
]
const dataImageOutEarn = [
    "assets/earn-farm-purple.webp",
    "assets/earn-fixed-staking-purple.webp",
    "assets/earn-liquidity-staking-purple.webp",
    "assets/earn-pools-purple.webp"
]
//itero la node list e il suo indice
imageHover.forEach((image, index) => {
    //associo un mouseover all'elemento i-esimo 
    image.addEventListener("mouseover", () => {
        //associa l'elemento dell'array alla src dell'immagine
        // image.classList.add("fade-out")
        image.src = dataImageEarn[index]
        // setTimeout(() => {
        //     image.classList.remove("fade-out")
        // }, 300);
    })
    image.addEventListener("mouseout", () => {
        //torna all'elemento precedente
        image.src = dataImageOutEarn[index]
    })
})

//effetto nevicata 
const main = document.querySelector("main")
//funzione che crea gli elementi
window.addEventListener("DOMContentLoaded", () => {
    function snowEffect() {
        const img = document.createElement("img")
        img.src = "./assets/bk-snow-theme/flakes-1.webp"
        img.classList.add("snow-image")
        main.append(img)
        let a = Math.random()*(10 - 1) +1
        let b = Math.random()*(10-1)+1
        function random() {
            a++
            b++
            console.log(a, b);
            img.style.transform = `translate(${a}px, ${b}px)`;
        }
        // setInterval(random, 100);
    }
    snowEffect()
})

//script sezione partner (si può utilizzare anche per hero)
//!ATTENZIONE la funzione non è ancora collegata all'html

let n = 0

function cakeToken() {
    img.src = `https://assets.pancakeswap.finance/web/landing/cake-token-sequence/${n}.png`
    n++
    if (n == 201) {
        clearInterval(intervalID)
    }
}

const intervalID = setInterval(cakeToken, 100)