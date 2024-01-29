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
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 1// La funzione di callback verrà chiamata quando almeno il 50% dell'elemento è visibile
    };
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
//selettori dei container dei caroselli
const shaping1 = document.querySelector(`#show-scroll`)
const shaping2 = document.querySelector(`.shaping-scroll-element2`)

    const canvasMonetina = document.querySelector('.canvasMonetina');
const showShaping1 = document.querySelector(`.shaping-infinite-scrolling-container1`)
const showShaping2 = document.querySelector(`.shaping-infinite-scrolling-container2`)
const eco = document.querySelector(`.eco`)
const partner = document.querySelector(`.partner`)
    const ctx = canvasMonetina.getContext('2d')
    canvasMonetina.width = 800
    canvasMonetina.height = 800
    //linea orizontale s 
    const startX = 300;
    const startY = 400
    const endX = 150
    const endY = 400
ctx.strokeStyle = `#a881fc80`;
    ctx.lineWidth = 2;
    ctx.zIndex = 1000
    let currentX = startX
let intervalIDlineSxOrizontal
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
            showShaping1.style.height = `200px`
            eco.style.height = `50px`
        }
    }
    
    //linea orizontale destra
    const startMenoX = 500;
    const startMenoY = 300
    const endMenoX = 650
    const endMenoY = 300

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
    //linea verticale  destra
    const startSottoSxX = 150
    const startSottoSxY = 500
    const endSottoSxX = 150
    const endSottoSxY = 700

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
            showShaping2.style.height = `200px`
            partner.style.height = `50px`
            //mettere partner
        }
    }
   



    //linea verticale  sinistra
    const startSottoDxX = 650
    const startSottoDxY = 300
    const endSottoDxX = 650
    const endSottoDxY = 700

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


let intervalIDUpRight
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
document.addEventListener('DOMContentLoaded', function () {
   

    // ... Altri settaggi del canvas ...

    // Opzioni per l'Intersection Observer
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.9 // La funzione di callback verrà chiamata quando almeno il 50% dell'elemento è visibile
    };

    // Funzione di callback per l'Intersection Observer
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // L'elemento è entrato nella viewport, avvia le animazioni
               setTimeout(() => {
                   intervalIDlineSxOrizontal = setInterval(() => { sxLineDraw() }, 10)
               }, 1300);
                setTimeout(() => {
                    intervalIDlineDxOrizontal = setInterval(() => dxLineDraw(), 10)
                }, 2500);
                setTimeout(() => {
                    intervalIDUpRight = setInterval(() => verticalLineDrawrightSu(), 10);
                    intervalIDDownRight = setInterval(() => verticalLineDrawrightGiu(), 10);
                }, 3400);
                setTimeout(() => {
                    idIntervallSuLeft = setInterval(() => verticalLineDrawLeft(), 10)
                    idIntervallGiuLeft = setInterval(() => verticalLineDrawLeftSu(), 10)
                }, 2100);

                // Puoi anche smettere di osservare l'elemento dopo che è stato visualizzato una volta
                observer.unobserve(entry.target);
            }
        });
    }

    // Creazione dell'Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, options);

    // Osserva l'elemento desiderato
    observer.observe(canvasMonetina);
});


const shapingCarosello1 = document.querySelector('.shaping-infinite-scrolling-container1');
const shapingElements1 = document.querySelectorAll('.shaping-scroll-element1')
const shapingCarosello2 = document.querySelector('.shaping-infinite-scrolling-container2');
const shapingElements2 = document.querySelectorAll('.shaping-scroll-element2')

shapingElements2.forEach(e => {
    console.log(e)
    const cloneNode = e.cloneNode(true);
    shapingCarosello2.appendChild(cloneNode);
})

function shapingScrollCaroselloTop2() {
    console.log("Resetting scrollTop to 0");
    if (shapingCarosello2.scrollTop >= shapingCarosello2.scrollHeight / 2) {
        shapingCarosello2.scrollTop = 0;
    } else {
        shapingCarosello2.scrollTop += 1;
    }
}
function shapingScrollCaroselloLeft2() {
    console.log("Resetting scrollTop to 0");
    if (shapingCarosello2.scrollLeft >= shapingCarosello2.scrollWidth/ 2) {
        shapingCarosello2.scrollLeft = 0;
    } else {
        shapingCarosello2.scrollLeft += 1;
    }
}

shapingElements1.forEach(e => {
    const cloneNode = e.cloneNode(true);
    shapingCarosello1.appendChild(cloneNode);
})
function shapingScrollCaroselloTop1() {
    if (shapingCarosello1.scrollTop >= shapingCarosello1.scrollHeight / 2) {
        shapingCarosello1.scrollTop = 0;
    } else {
        shapingCarosello1.scrollTop += 1;
    }
}
function shapingScrollCaroselloLeft1() {
    if (shapingCarosello1.scrollLeft > shapingCarosello1.scrollWidth / 2) {
        shapingCarosello1.scrollLeft = 0;
    } else {
        shapingCarosello1.scrollLeft += 1;
    }
}



const mediaQuery = window.matchMedia('(max-width: 1200px)');

function handleMediaQuery(media) {
    if (media.matches) {
        setInterval(shapingScrollCaroselloLeft1, 20);
        setInterval(shapingScrollCaroselloLeft2, 20);
        console.log(`Media query attiva`);
    } else {
        console.log(`Media query non attiva`);
        setInterval(shapingScrollCaroselloTop1, 20);
        setInterval(shapingScrollCaroselloTop2, 30)
    }
}

// Esegui la funzione di callback iniziale
handleMediaQuery(mediaQuery);

// Aggiungi l'ascoltatore per gestire eventuali cambiamenti nella media query
mediaQuery.addEventListener('change', handleMediaQuery);



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
    