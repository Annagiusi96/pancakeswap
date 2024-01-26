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

const caroselloInterval = setInterval(shapingScrollCarosello, 20);

//SEZIONE TRADE ANNAGIUSI

const imageTrade = document.querySelectorAll('.change-image-card-trade')
const containerCardTrade = document.querySelectorAll('.single-card-trade')

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
let intervalID
function monetina() {
    img.src = `https://assets.pancakeswap.finance/web/landing/cake-token-sequence/${n}.png`
    n++
    if (n == 200) {
        clearInterval(intervalID)
    }
}
// document.addEventListener("scroll",()=>monetina())

function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Avvia l'animazione solo se l'elemento è visibile nella viewport
            intervalID = setInterval(monetina, 100);
            observer.unobserve(img);
        }
    });
}

const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

observer.observe(img);
//inizio
const canvasMonetina = document.querySelector('.canvasMonetina');
const ctx = canvasMonetina.getContext('2d')
canvasMonetina.width = 800
canvasMonetina.height = 800
//linea orizontale s 
const startX = 300;
const startY = 500
const endX = 150
const endY = 500
ctx.strokeStyle = 'white';
ctx.lineWidth = 2;
ctx.zIndex = 1000
let currentX = startX

//metodi doszionedellinee sul canvas
function sxLineDraw() {
    currentX -= 2
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(currentX, endY);
    ctx.stroke();
    ctx.closePath();
    if (currentX == (startX - endX)) {
        clearInterval(intervalIDlineSxOrizontal)
    }
}
const intervalIDlineSxOrizontal = setInterval(() => { sxLineDraw() }, 10)
//linea orizontale destra
const startMenoX = 500;
const startMenoY = 300
const endMenoX = 650
const endMenoY = 300
ctx.strokeStyle = 'White';
ctx.lineWidth = 2;
ctx.zIndex = 1000
let currentDXX = startMenoX
let intervalIDlineDxOrizontal
//metodi di costruzione delle linee sul canvas
function dxLineDraw() {
    currentDXX += 2
    ctx.beginPath();
    ctx.moveTo(startMenoX, startMenoY);
    ctx.lineTo(currentDXX, endMenoY);
    ctx.stroke();
    ctx.closePath();
    if (currentDXX === 650) {
        clearInterval(intervalIDlineDxOrizontal)

    }
}
//parte la seconda linea dopo che ha finito la prima
setTimeout(() => {
    intervalIDlineDxOrizontal = setInterval(() => dxLineDraw(), 10)
}, 1500);


//linea verticale  destra
const startSottoSxX = 150
const startSottoSxY = 500
const endSottoSxX = 150
const endSottoSxY = 700
ctx.strokeStyle = 'White';
ctx.lineWidth = 2;
ctx.zIndex = 1000
let idIntervallSuLeft
let idIntervallGiuLeft
let currentLeftIdgiu = startSottoSxY
let currentLeftIdSU = startSottoSxY
//metodi di costruzione delle linee sul canvas
function verticalLineDrawLeft() {
    currentLeftIdSU -= 5
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
setTimeout(() => {
    idIntervallSuLeft = setInterval(() => verticalLineDrawLeft(), 10)
    idIntervallGiuLeft = setInterval(() => verticalLineDrawLeftSu(), 10)
}, 1000);



//linea verticale  sinistra
const startSottoDxX = 650
const startSottoDxY = 300
const endSottoDxX = 650
const endSottoDxY = 700
ctx.strokeStyle = 'White'; // Rosso
ctx.lineWidth = 2; // Spessore della linea
ctx.zIndex = 1000
let currentIdVerticalRightUp = startSottoDxY
//metodi di costruzione delle linee sul canvas
function verticalLineDrawrightSu() {
    currentIdVerticalRightUp += 5
    ctx.beginPath();
    ctx.moveTo(startSottoDxX, startSottoDxY);
    ctx.lineTo(endSottoDxX, currentIdVerticalRightUp);
    ctx.stroke();
    ctx.closePath();
    if (currentIdVerticalRightUp == 700) {
        clearInterval(intervalIDUpRight)
    }
}
setTimeout(() => {
    intervalIDUpRight = setInterval(() => verticalLineDrawrightSu(), 10);
    intervalIDDownRight = setInterval(() => verticalLineDrawrightGiu(), 10);
}, 2200);


let currentIdVerticalRightDown = startSottoDxY
let intervalIDDownRight
//metodi di costruzione delle linee sul canvas
function verticalLineDrawrightGiu() {
    currentIdVerticalRightDown -= 2
    ctx.beginPath();
    ctx.moveTo(startSottoDxX, startSottoDxY);
    ctx.lineTo(endSottoDxX, currentIdVerticalRightDown);
    ctx.stroke();
    ctx.closePath();
    if (currentIdVerticalRightDown == 150) {
        clearInterval(intervalIDDownRight)
    }
}

//GAME & NFT RAPISARDI
const imageGameNft = document.querySelectorAll('.change-image-card-game-nft')
const containerCardGameNft = document.querySelectorAll('.single-card-game-nft')

const dataImageMouseOutGameNft = [
    "https://assets.pancakeswap.finance/web/landing/game-pancake-protectors-purple.png",
    "https://assets.pancakeswap.finance/web/landing/game-prediction-purple.png",
    "https://assets.pancakeswap.finance/web/landing/nft-marketplace-purple.png"
    
]

const dataImageGameNft = [
    "https://assets.pancakeswap.finance/web/landing/game-pancake-protectors.png",
    "https://assets.pancakeswap.finance/web/landing/game-prediction.png",
    "https://assets.pancakeswap.finance/web/landing/nft-marketplace.png"

]


containerCardGameNft.forEach((card, index) => {
    card.addEventListener('mouseover', () => {
        imageGameNft.forEach((image, indx) => {
            if (index == indx) {
                image.src = dataImageGameNft[indx]
                card.addEventListener('mouseout', () => {
                image.src = dataImageMouseOutGameNft[indx]
                })
            }
        })
    })
})



//SEZIONE UNDEFINED 
const containerSlideSwiper = document.querySelectorAll('.swiper-slide-join');
let currentIndexSlide = 0;
const btnSwiperPrev = document.querySelector('#button-1-swiper');
const btnSwiperNext = document.querySelector('#button-2-swiper');
const btnSwiperPrev2 = document.querySelector('#btn-prev-swiper')

function showSwiperSlide(index) {
    containerSlideSwiper.forEach(slide => {
      slide.style.display = 'none';
    });
  
    containerSlideSwiper[index].style.display = 'block';
  }

  function nextSwiperSlide() {
    currentIndexSlide = (currentIndexSlide + 1) % containerSlideSwiper.length;
    showSwiperSlide(currentIndexSlide);
  }

  function previousSlide() {
    currentIndexSlide = (currentIndexSlide - 1 + containerSlideSwiper.length) % containerSlideSwiper.length;
    showSwiperSlide(currentIndexSlide);
  }
  
  showSwiperSlide(currentIndexSlide);

  btnSwiperNext.addEventListener('click',nextSwiperSlide)
  btnSwiperPrev2.addEventListener('click',previousSlide)






//Footer Language
const btnLanguage = document.querySelector('.footerLanguageEN');
const listLang= document.querySelector('.footerAllLanguage');

btnLanguage.addEventListener('mouseover', ()=>{
    listLang.style.opacity= 1 ;
})

btnLanguage.addEventListener('mouseout', ()=>{
    // listLang.style.opacity= 0;
    setInterval(()=> {listLang.style.opacity= 0; }, 5000);
},);
    