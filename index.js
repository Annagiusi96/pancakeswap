
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

    const shapingCarosello = document.querySelector('.shaping-infinite-scrolling-container');
    const shapingElements = document.querySelectorAll('.shaping-scroll-element')
   
    shapingElements.forEach(e =>{
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