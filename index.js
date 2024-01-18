// TASTO DARK MODE DA IMPLEMENTARE
//     // const thema = document.querySelector('html')
//     // const btnChangeTheme = document.querySelector('button')
//     // const homeDue = document.querySelector('.home-2')

//     // btnChangeTheme.addEventListener('click',()=>{
//     //     let value = thema.getAttribute('data-theme');
//     //     if(value === 'dark'){
//     //         thema.setAttribute('data-theme','light')
//     //         homeDue.classList.Add('home-2-dark')
//     //     }
//     //     if(value == 'light'){
//     //         thema.setAttribute('data-theme','dark')
//     //         homeDue.classList.Add('home-2-light')
//     //     }
//     // })

//SEZIONE SHAPING THE FUTURE ANNAGIUSI
const shapingCarosello = document.querySelector('.shaping-infinite-scrolling-container');
const shapingElements = document.querySelectorAll('.shaping-scroll-element')

shapingElements.forEach(e => {
    const cloneNode = e.cloneNode(true);
    shapingCarosello.appendChild(cloneNode);
})

function shapingScrollCarosello() {
    if (shapingCarosello.scrollLeft >= shapingCarosello.scrollWidth / 2) {
        shapingCarosello.scrollLeft = 0;
    } else {
        shapingCarosello.scrollLeft += 1;
    }
}

const caroselloInterval = setInterval(shapingScrollCarosello, 200);

//SEZIONE TRADE ANNAGIUSI

const imageTrade = document.querySelectorAll('.change-image-card-trade')
const containerCardTrade = document.querySelectorAll('.single-card-trade')

// console.log(imageTrade.id);

// imageTrade.addEventListener('mouseover',()=>{
//     if(imageTrade.id == "0"){
//         imageTrade.setAttribute('src','https://assets.pancakeswap.finance/web/landing/trade-swap.png')
//     }
// })

// imageTrade.addEventListener('mouseout',()=>{
//     if(imageTrade.id == "0"){
//         // imageTrade.setAttribute('src','https://assets.pancakeswap.finance/web/landing/trade-swap-purple.png')

//     }
// })

const dataImageMouseOutTrade = [
    "https://assets.pancakeswap.finance/web/landing/trade-swap-purple.png",
    "https://assets.pancakeswap.finance/web/landing/trade-liquidity-purple.png",
    "https://assets.pancakeswap.finance/web/landing/trade-bridge-purple.png",
    "https://assets.pancakeswap.finance/web/landing/trade-perpetual-purple.png",
    "https://assets.pancakeswap.finance/web/landing/trade-buy-crypto-purple.png"
]

const dataImageTrade = [
    "https://assets.pancakeswap.finance/web/landing/trade-swap.png",
    "https://assets.pancakeswap.finance/web/landing/trade-liquidity.png",
    "https://assets.pancakeswap.finance/web/landing/trade-bridge.png",
    "https://assets.pancakeswap.finance/web/landing/trade-perpetual.png",
    "https://assets.pancakeswap.finance/web/landing/trade-buy-crypto.png"
]


containerCardTrade.forEach((card, index) => {
    card.addEventListener('mouseover', () => {
        imageTrade.forEach((image, indx) => {
            if (index == indx) {
                image.src = dataImageTrade[indx]
                card.addEventListener('mouseout', () => {
                image.src = dataImageMouseOutTrade[indx]
                })
            }
        })
    })
})








//SEZIONE BENNI EARN

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

//SEZIONE BENNI MONETINA
//script monetina
const img = document.querySelector(".img-monetina")
let n = 0

function monetina() {
    img.src = `https://assets.pancakeswap.finance/web/landing/cake-token-sequence/${n}.png`
    n++
    if (n == 200) {
        clearInterval(intervalID)
    }
}
const intervalID = setInterval(monetina, 100)

const canvasMonetina = document.querySelector('.canvasMonetina');
const ctx = canvasMonetina.getContext('2d');

canvasMonetina.width = 1200
canvasMonetina.height = 1200
const startX = 400;
const startY = 400
const endX = 150
const endY= 400 
ctx.strokeStyle = '#ff0000'; // Rosso
ctx.lineWidth = 2; // Spessore della linea
ctx.zIndex=1000

// Inizia il percorso della linea
ctx.beginPath();

// Muovi il "pennello" al punto di inizio della linea
ctx.moveTo(startX, startY);

// Disegna una linea fino al punto di fine
ctx.lineTo(endX, endY);

// Traccia la linea utilizzando gli stili impostati
ctx.stroke();

// Chiudi il percorso
ctx.closePath();
// function monetina() {
//     const imgCanvaMonetina = new Image()
//     imgCanvaMonetina.onload = function () {
//         ctx.clearRect(0, 0, canvasMonetina.width, canvasMonetina.height)
//         ctx.drawImage(imgCanvaMonetina, 0, 0, canvasMonetina.width, canvasMonetina.height)
//     }
//     imgCanvaMonetina.src = `https://assets.pancakeswap.finance/web/landing/cake-token-sequence/${n}.png`
//     n++
//     if (n >= 200) {
//         clearInterval(intervalID)
//     }
// }

    

// const intervalID = setInterval(monetina, 100)

