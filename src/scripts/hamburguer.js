    
    document.addEventListener('astro:page-load', () => {

        const menu = document.querySelector('.hamburguer')
        const nav = document.querySelector('.nav')
        const cerrar = document.querySelector('.close-menu');
    
        menu.addEventListener('click', () => {
            nav.classList.remove('disabled');
        })
    
        cerrar.addEventListener('click', () => {
            nav.classList.add('disabled');
        })
    

    })




