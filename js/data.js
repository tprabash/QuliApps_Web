document.addEventListener('DOMContentLoaded', function() {
    const texts = [
        "Accept new challenges",
        "Embrace the journey",
        "Strive for excellence",
        "Innovate and inspire",
        "Pursue your passion",
        "Never stop learning",
        "Dream big, act bigger",
        "Stay positive and persistent"
    ];

    const carouselContent = document.getElementById('carouselContent');

    texts.forEach((text, index) => {
        const words = text.split(" ");
        const line1 = words[0] || '';
        const line2 = words[1] || '';
        const line3 = words[2] || '';
        const line4 = words[3] || '';

        const itemDiv = document.createElement('div');
        itemDiv.className = `item ${index === 0 ? 'active' : ''}`;

        itemDiv.innerHTML = `
            <p class="title">${line1}<br><span class="fw500">${line2}</span><br>${line3}  ${line4}</p>
        `;

        carouselContent.appendChild(itemDiv);
    });

});
