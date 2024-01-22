
const thema = document.querySelector('html')
const btnChangeTheme = document.querySelector('.footerDarkMode');
const homeDue = document.querySelector('.home-2');
const colorOndaTopDiscover = document.querySelector('.color-onda-top-discover');
const homeTre = document.querySelector('.home-3');
const joinContainerCentral = document.querySelector('.join-container-central');


btnChangeTheme.addEventListener('click',()=>{
    let value = thema.getAttribute('data-theme');
    if(value === 'dark'){
        thema.setAttribute('data-theme','light')
        homeDue.classList.add('home-2-light')
        homeDue.classList.remove('home-2-dark')
        colorOndaTopDiscover.classList.remove('color-onda-top-discover-dark')
        colorOndaTopDiscover.classList.add('color-onda-top-discover-light')
        homeTre.classList.remove('home-3-backg-dark')
        homeTre.classList.add('home-3-backg-light')
        joinContainerCentral.classList.remove('join-container-central-backg-dark')
        joinContainerCentral.classList.add('join-container-central-backg-light')
    }
    if(value == 'light'){
        thema.setAttribute('data-theme','dark')
        homeDue.classList.add('home-2-dark')
        homeDue.classList.remove('home-2-light')
        colorOndaTopDiscover.classList.remove('color-onda-top-discover-light')
        colorOndaTopDiscover.classList.add('color-onda-top-discover-dark')
        homeTre.classList.remove('home-3-backg-light')
        homeTre.classList.add('home-3-backg-dark')
        joinContainerCentral.classList.remove('join-container-central-backg-light')
        joinContainerCentral.classList.add('join-container-central-backg-dark')



    }
}) 