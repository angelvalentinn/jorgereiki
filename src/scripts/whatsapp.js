document.addEventListener('astro:page-load', () => {
    const ask = document.querySelectorAll('.ask-to-whatsapp');

    const cel = '1168506625'

    const askToWhatsapp = () => {
        const link = `https://wa.me/${cel}?text=Hola, estoy interesado en las sesiones de Reiki..`;
        window.open(link, "_blank");
    }

    ask.forEach(elem => {
        elem.addEventListener('click', askToWhatsapp)
    })

})