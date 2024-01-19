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
    console.log(e)
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
// document.addEventListener("scroll",()=>monetina())
const intervalID = setInterval(monetina, 100)
// function handleIntersection(entries, observer) {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             // Avvia l'animazione solo se l'elemento è visibile nella viewport
//             intervalID = setInterval(monetina, 100);
//             observer.unobserve(img);  
//         }
//     });
// }

// const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

// observer.observe(img);

const canvasMonetina = document.querySelector('.canvasMonetina');
const ctx = canvasMonetina.getContext('2d');


canvasMonetina.width = 800
canvasMonetina.height = 800
//linea orizontale sx
const startX = 300;
const startY = 500
const endX = 150
const endY= 500 
ctx.strokeStyle = 'white'; 
ctx.lineWidth = 2; 
ctx.zIndex=1000
let currentX = startX
let spia = false
//metodi di costruzione delle linee sul canvas
function sxLineDraw() {
    currentX-=2
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(currentX, endY);
    ctx.stroke();
    ctx.closePath();
    if (currentX==(startX-endX)) {
        clearInterval(intervalIDlineSxOrizontal)
        spia = true
        console.log(spia);
    }
}
const intervalIDlineSxOrizontal = setInterval(()=>{sxLineDraw()},10)



// linea orizontale destra
const startMenoX = 500;
const startMenoY = 300
const endMenoX = 650
const endMenoY= 300 
ctx.strokeStyle = 'White'; 
ctx.lineWidth = 2; 
ctx.zIndex=1000
let currentDXX = startMenoX
//metodi di costruzione delle linee sul canvas
function dxLineDraw() {
    currentDXX += 2
    ctx.beginPath();
    ctx.moveTo(startMenoX, startMenoY);
    ctx.lineTo(currentDXX, endMenoY);
    ctx.stroke();
    ctx.closePath();
    if (currentDXX===650) {
        clearInterval(intervalIDlineDxOrizontal)
    }
}

    const intervalIDlineDxOrizontal = setInterval(() => dxLineDraw(), 10)


//linea verticale  destra
const startSottoSxX = 150
const startSottoSxY = 500
const endSottoSxX = 150
const endSottoSxY= 700 
ctx.strokeStyle = 'White'; 
ctx.lineWidth = 2; 
ctx.zIndex=1000

let currentLeftIdgiu =startSottoSxY
let currentLeftIdSU =startSottoSxY
//metodi di costruzione delle linee sul canvas
function verticalLineDrawLeft() {
     currentLeftIdSU -= 2
    ctx.beginPath();
    ctx.moveTo(startSottoSxX, startSottoSxY);
    ctx.lineTo(endSottoSxX, currentLeftIdSU);
    ctx.stroke();
    ctx.closePath();
    if (currentLeftIdSU === startSottoSxX) {
        clearInterval(idIntervallSuLeft)
    }
}
function verticalLineDrawLeftSu() {
         currentLeftIdgiu += 2
         console.log(currentLeftIdgiu);
         ctx.beginPath();
         ctx.moveTo(startSottoSxX, startSottoSxY);
         ctx.lineTo(endSottoSxX, currentLeftIdgiu);
         ctx.stroke();
         ctx.closePath();
    if (currentLeftIdgiu === 700) {
        clearInterval(idIntervallGiuLeft)
        }
}
const idIntervallSuLeft = setInterval(() => verticalLineDrawLeft(), 10)
const idIntervallGiuLeft = setInterval(() => verticalLineDrawLeftSu(), 10)

    

//linea verticale  sinistra
const startSottoDxX = 650
const startSottoDxY = 300
const endSottoDxX = 650
const endSottoDxY= 700
ctx.strokeStyle = 'White'; // Rosso
ctx.lineWidth = 2; // Spessore della linea
ctx.zIndex=1000
let currentIdVerticalRightUp = startSottoDxY
//metodi di costruzione delle linee sul canvas
function verticalLineDrawrightSu() {
    currentIdVerticalRightUp+=2
    ctx.beginPath();
    ctx.moveTo(startSottoDxX, startSottoDxY);
    ctx.lineTo(endSottoDxX, currentIdVerticalRightUp);
    ctx.stroke();
    ctx.closePath();
    if(currentIdVerticalRightUp==700){
        clearInterval(intervalIDUpRight)
    }
}

    const intervalIDUpRight = setInterval(() => verticalLineDrawrightSu(), 10);

let currentIdVerticalRightDown = startSottoDxY
//metodi di costruzione delle linee sul canvas
function verticalLineDrawrightGiu() {
    currentIdVerticalRightDown-=2
    ctx.beginPath();
    ctx.moveTo(startSottoDxX, startSottoDxY);
    ctx.lineTo(endSottoDxX, currentIdVerticalRightDown);
    ctx.stroke();
    ctx.closePath();
    if(currentIdVerticalRightDown==150){
        clearInterval(intervalIDDownRight)
    }
}
const intervalIDDownRight=  setInterval(() => verticalLineDrawrightGiu(), 10);





// function monetina() {
//     const imgCanvaMonetina = new Image()
//     imgCanvaMonetina.onload = function () {
//         ctx.clearRect(0, 0, canvasMonetina.width, canvasMonetina.height)
//         ctx.drawImage(imgCanvaMonetina, 0, 0, canvasMonetina.width, canvasMonetina.height)
//     }
//     imgCanvaMonetina.src = `https://assets.pancakeswap.finance/web/landing/cake-token-sequence/${n}.png`
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

// Get the canvas element and 2D context
// var canvas = document.getElementById("myCanvas");
// var ctx = canvas.getContext("2d");

// // Set initial line lengths
// var horizontalLineLength = 0;
// var verticalLineLength = 0;

// // Set animation parameters
// var animationSpeed = 2; // Adjust this value to control the animation speed

// function animateLines() {
//     // Clear the canvas
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     // Draw the horizontal line
//     ctx.beginPath();
//     ctx.moveTo(0, canvas.height / 2);
//     ctx.lineTo(horizontalLineLength, canvas.height / 2);
//     ctx.stroke();

//     // Increase the horizontal line length
//     horizontalLineLength += animationSpeed;

//     // Check if the horizontal line has finished growing
//     if (horizontalLineLength < canvas.width) {
//         // Continue the animation
//         requestAnimationFrame(animateLines);
//     } else {
//         // Draw the vertical line when the horizontal line is done
//         ctx.beginPath();
//         ctx.moveTo(canvas.width / 2, canvas.height / 2);
//         ctx.lineTo(canvas.width / 2, verticalLineLength);
//         ctx.stroke();

//         // Increase the vertical line length
//         verticalLineLength += animationSpeed;

//         // Continue the animation for the vertical line
//         requestAnimationFrame(animateLines);
//     }
// }

// // Start the animation
// animateLines();