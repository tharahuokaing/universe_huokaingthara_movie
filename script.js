document.addEventListener("DOMContentLoaded", () => {
    const exploreBtn = document.getElementById("explore-btn");
    const moviesSection = document.getElementById("movies");

    // Smooth scroll trigger for Hero CTA Button
    if (exploreBtn && moviesSection) {
        exploreBtn.addEventListener("click", () => {
            moviesSection.scrollIntoView({ behavior: "smooth" });
        });
    }

    console.log("UNIVERSE HUOKAING THARA Movie Platform initialized successfully.");
});

/**
 * Handles click-to-run auto-play on video wrappers
 * @param {HTMLElement} overlayEl - The video overlay element clicked by the user
 */
function playVideo(overlayEl) {
    if (!overlayEl) return;

    // Fade out overlay
    overlayEl.classList.add("hidden");

    // Find sibling iframe inside the same wrapper container and enable autoplay
    const wrapper = overlayEl.closest(".video-wrapper");
    if (wrapper) {
        const iframe = wrapper.querySelector("iframe");
        if (iframe) {
            let currentSrc = iframe.src;
            if (!currentSrc.includes("autoplay=1")) {
                iframe.src = currentSrc + "&autoplay=1";
            }
        }
    }
}
