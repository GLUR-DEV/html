document.addEventListener("DOMContentLoaded", function() {
    const background = document.getElementById("navbar");
    const scrollPositionToShowImage = 100; // Adjust this value based on when you want the image to appear

    window.addEventListener("scroll", function() {
        if (window.scrollY > scrollPositionToShowImage) {
            background.classList.add("background-visible");
        } else {
            background.classList.remove("background-visible");
        }
    });
});