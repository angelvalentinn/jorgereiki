document.addEventListener('astro:page-load', () => {
    const map = L.map('map').setView([-34.7622326,-58.4150239],14)

    const marker = L.marker([-34.7622326,-58.4150239]).addTo(map);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
})