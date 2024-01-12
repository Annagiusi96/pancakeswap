
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

//     <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Carosello</title>
//     <style>
//         /* Aggiungi qui i tuoi stili CSS */
//         .shaping-infinite-scrolling-container {
//             overflow: hidden;
//             white-space: nowrap;
//         }

//         .shaping-scroll-element {
//             display: inline-block;
//             margin-right: 20px; /* Aggiungi spaziatura tra gli elementi del carosello */
//         }
//     </style>
// </head>
// <body>

// <div class="shaping-infinite-scrolling-container">
//     <!-- Aggiungi qui i tuoi elementi del carosello -->
//     <div class="shaping-scroll-element" id="scroll-element-1-background" class="animation">
//         <!-- Contenuto del primo elemento -->
//     </div>
//     <div class="shaping-scroll-element" id="scroll-element-2-background" class="animation">
//         <!-- Contenuto del secondo elemento -->
//     </div>
//     <!-- Aggiungi altri elementi secondo necessità -->
// </div>


   
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