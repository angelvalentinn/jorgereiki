document.addEventListener('astro:page-load', () => {
    const map = L.map('map').setView([-34.7646077,-58.4042762],15)

    const marker = L.marker([-34.7646077,-58.4042762]).addTo(map);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
})