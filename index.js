
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

const caroselloInterval = setInterval(shapingScrollCarosello, 20);

//Footer Language
const btnLanguage = document.querySelector('#footerLangEN');
const listLang= document.querySelector('.footerAllLanguage');


btnLanguage.addEventListener('mouseover', ()=>{
    // listLang.classList.add('footerLczz')
    listLang.style.opacity= 1 ;
    listLang.addEventListener('mouseover', ()=>{
        listLang.style.opacity= 1;
        listLang.style.display= block;
        // listLang.classList.add('footerLczz')
    })
    })
    
btnLanguage.addEventListener('mouseout', ()=>{
    // listLang.classList.remove('footerLczz')
    listLang.addEventListener('mouseout', ()=>{
        listLang.style.opacity= 0;
        listLang.style.display=none;
        
    },);
    
    listLang.style.opacity= 0;
    
},);



//Function animation Card
function animationCardImg(containerCardTrade,imageTrade,dataImageTrade,dataImageMouseOutTrade){

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
}

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


animationCardImg(containerCardTrade,imageTrade,dataImageTrade,dataImageMouseOutTrade);

//CARD EARN
const dataImageEarn = [
    "assets/earn-farm.webp",
    "assets/earn-pools.webp",
    "assets/earn-liquidity-staking.webp",
    "assets/earn-fixed-staking.webp",
    "https://assets.pancakeswap.finance/web/landing/earn-pm.png"
]
const dataImageOutEarn = [
    "assets/earn-farm-purple.webp",
    "assets/earn-pools-purple.webp",
    "assets/earn-liquidity-staking-purple.webp",
    "assets/earn-fixed-staking-purple.webp",
    " https://assets.pancakeswap.finance/web/landing/earn-pm-purple.png"
]

const containerCardEarn = document.querySelectorAll('#single-card-earn');
const imageEarn = document.querySelectorAll('.change-image-card-earn')
animationCardImg(containerCardEarn,imageEarn,dataImageEarn,dataImageOutEarn)

//CARD GAME

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

animationCardImg(containerCardGameNft,imageGameNft,dataImageGameNft,dataImageMouseOutGameNft)


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

    // Opzioni per l'Intersection Observer
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.9 
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
const milion = document.querySelector(`.milion`)
let a=0
function dinamicNumbers() {
    if (a<730) {
        milion.innerText =`$ ${a}  Milion`
        a++
    }
}
setInterval(dinamicNumbers, 2); 
const supply = document.querySelector(`.supply`)
let b=0
function dinamicNumbersa() {
    if (b<= 2000) {
        supply.innerText =` ${b} `
        b+=500
    }else{
        clearInterval(clearSupplyset)
        supply.innerText = ` 283,221,454`
    }
}
const clearSupplyset=setInterval(dinamicNumbersa, 10); 
const totalSupply = document.querySelector(`.total-supply`)
let c=0
function dinamicNumbersc() {
    if (c< 500) {
        totalSupply.innerText =` ${c} `
        c++
    }
    else {
        clearInterval(cleartotalset)
        totalSupply.innerText = ` 394,615,093`
    }
}
const cleartotalset= setInterval(dinamicNumbersc, .1); 
const burn = document.querySelector(`.burn`)
let d=0
function dinamicNumbersd() {
    if (d < 1144286783) {
        burn.innerText =` ${d} `
        d += 120287361
    }
    else {
        clearInterval(clearBuernSet)
        burn.innerText = `1,144,286,783`
    }
}
const clearBuernSet = setInterval(dinamicNumbersd, 100); 
//GAME & NFT RAPISARDI

const containerCarosellJoin = document.querySelector(".container-carosello-join");
let buttonSwiper1 = document.querySelector("#button-1-swiper");
let buttonSwiper2 = document.querySelector("#button-2-swiper");
const joinCard1 = document.querySelector("#join-card-1");
let innerjoin = true;

function handleClick(event) {
    if (event.target.id === "button-1-swiper" && innerjoin) {
        innerCardJoin();
        innerjoin = false;
        buttonSwiper1.classList.remove("button-swiper-active");
        buttonSwiper1.classList.add("button-swiper-disabled");
        buttonSwiper2.classList.add("button-swiper-active");
        buttonSwiper2.classList.remove("button-swiper-disabled");
    } else if (event.target.id === "button-2-swiper" && !innerjoin) {
        innerCardJoin1();
        innerjoin = true;
        buttonSwiper2.classList.remove("button-swiper-active");
        buttonSwiper2.classList.add("button-swiper-disabled");
        buttonSwiper1.classList.add("button-swiper-active");
        buttonSwiper1.classList.remove("button-swiper-disabled");
    }
}
function innerCardJoin() {
    joinCard1.innerHTML = `
        <p>Latest blog post</p>
        <div class="container-img-swiper-join">
            <img src="https://sgp1.digitaloceanspaces.com/strapi.space/813cb90861b09e0eae694797b56c3475.jpg" alt="">
        </div>
        <div class="buttons-swiper-slide">
            <span><button id="button-1-swiper" id="btn-prev-swiper" class="button-swiper-active"></button></span>
            <span><button id="button-2-swiper" class="button-swiper-disabled"></button></span>
        </div>`;
    console.log("object");
}

function innerCardJoin1() {
    joinCard1.innerHTML = `
        <p id="margin-bottom-slide-p">Top Tweek of the week</p>
        <div class="container-img-1-swiper-join">
            <img src="https://s2.coinmarketcap.com/static/img/coins/200x200/7186.png" alt="">
        </div>
        <p>PancakeSwap Everyone's Favourite D3X</p>
        <div class="container-inner-slide-1-subtitle-p">
            <p>@PancakeSwap</p>
            <p>Dec 28</p>
            <p>13K</p>
            <p>179K</p>
        </div>
        <div class="container-pwithicon-slide-1">
            <p>
                🐰💙PancakeSwap Fam, the moment is here!
                🥞Proposal to reduce the max supply of $CAKE from 750M to 450M!
            </p>
        </div>
        <a href="#">Web Link </a>
        <div class="buttons-swiper-slide">
            <span><button id="button-1-swiper" class="button-swiper-active"></button></span>
            <span><button id="button-2-swiper" class="button-swiper-disabled"></button></span>
        </div>`;
    
}

containerCarosellJoin.addEventListener("click", handleClick);


const scrollBtn = document.querySelector(`.scroll-btn`)


document.addEventListener("DOMContentLoaded", function () {
    

    const scrollBtn = document.querySelector('.scroll-btn');

    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        if (scrollTop > 50) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    }

    scrollBtn.addEventListener('click', () => {
        scrollToTop();
    });

    function scrollToTop() {
        const scrollDuration = 300;
        const scrollStep = -window.scrollY / (scrollDuration / 15);

        const scrollInterval = setInterval(function () {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 15);
    }
});