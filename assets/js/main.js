document.addEventListener("DOMContentLoaded", () => {
    console.log("Website loaded successfully!");

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Future interactivity can be added here.
});
