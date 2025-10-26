// Wait for the DOM to be fully loaded before running scripts
document.addEventListener("DOMContentLoaded", function() {

    // --- 1. TYPING EFFECT SCRIPT ---
    
    const primaryText = "MOHAMED SAMI";
    const secondaryText = "B.E COMPUTER SCIENCE (HONS)";
    const primaryElement = document.querySelector(".typing-text");
    const secondaryElement = document.querySelector(".typing-subtext");
    const typingSpeed = 70;
    const delayAfterPrimary = 500;

    if (primaryElement && secondaryElement) {
        primaryElement.innerHTML = "";
        secondaryElement.innerHTML = "";

        function typeText(element, text, speed) {
            return new Promise(resolve => {
                let i = 0;
                element.classList.add("typing");
                
                function type() {
                    if (i < text.length) {
                        element.innerHTML += text.charAt(i);
                        i++;
                        setTimeout(type, speed);
                    } else {
                        element.classList.remove("typing");
                        resolve();
                    }
                }
                type();
            });
        }

        async function startTyping() {
            await typeText(primaryElement, primaryText, typingSpeed);
            setTimeout(async () => {
                await typeText(secondaryElement, secondaryText, typingSpeed);
                secondaryElement.classList.add("typing");
            }, delayAfterPrimary);
        }

        startTyping();
    }


    // --- 2. SCROLL REVEAL SCRIPT ---
    
    const revealElements = document.querySelectorAll(".reveal");

    const revealOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    function handleReveal(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }

    const observer = new IntersectionObserver(handleReveal, revealOptions);

    revealElements.forEach(element => {
        observer.observe(element);
    });

    
    // --- 3. VANTA.JS 3D BACKGROUND ("GLOBE" EFFECT - GREEN THEME) ---
    
 // --- 3. VANTA.JS 3D BACKGROUND (NEW "WAVES" EFFECT - GREEN THEME) ---

// Make sure VANTA is loaded and VANTA.WAVES exists
if (typeof VANTA !== "undefined" && VANTA.WAVES) { 
    VANTA.WAVES({
        el: "#vanta-background",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x1a1a1a,      // Dark background color (--dark-bg)
        shininess: 30.00,     // Adjust shininess
        waveHeight: 15.00,    // Adjust wave height
        waveSpeed: 0.80,      // Adjust wave speed
        zoom: 0.85            // Adjust zoom level
    });
} else {
    console.error("VANTA.WAVES script not loaded or VANTA object not found.");
}

}); // This closes the main DOMContentLoaded function