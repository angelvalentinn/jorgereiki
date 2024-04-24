    
    document.addEventListener('astro:page-load', () => {

        const menu = document.querySelector('.hamburguer')
        const nav = document.querySelector('.nav')
        const cerrar = document.querySelector('.close-menu');
    
        menu.addEventListener('click', () => {
            nav.style.transform = 'translateX(0)';
        })
    
        cerrar.addEventListener('click', () => {
            nav.style.transform = 'translateX(100%)';

        })
    

    })




