function updateTime() {
    const now = new Date();
    const utcTime = now.toUTCString();
    const day = now.toLocaleString('en-US', { weekday: 'long' });

    document.getElementById('currentTime').innerText = utcTime;
    document.getElementById('currentDay').innerText = day;
}

document.addEventListener('DOMContentLoaded', (event) => {
    updateTime();
    setInterval(updateTime, 1000); //updates very second

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
