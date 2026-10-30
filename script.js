
/* PAGE NAVIGATION */

function showPage(pageNumber) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    const selectedPage =
        document.getElementById("page" + pageNumber);

    if (selectedPage) {
        selectedPage.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    setTimeout(() => {
        revealElements();
    }, 100);
}


/* FLOATING GREEN PARTICLES */

const particleContainer =
    document.getElementById("particles");

const leafSymbols = ["✦", "❋", "✧", "🍃"];

for (let i = 0; i < 25; i++) {

    const particle = document.createElement("div");

    particle.className = "particle";

    particle.innerHTML =
        leafSymbols[
            Math.floor(Math.random() * leafSymbols.length)
        ];

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.fontSize =
        (12 + Math.random() * 18) + "px";

    particle.style.animationDuration =
        (10 + Math.random() * 18) + "s";

    particle.style.animationDelay =
        (Math.random() * 15) + "s";

    particleContainer.appendChild(particle);
}


/* SCROLL REVEAL ANIMATION */

function revealElements() {

    const activePage =
        document.querySelector(".page.active");

    if (!activePage) return;

    const elements =
        activePage.querySelectorAll(".reveal");

    elements.forEach((element, index) => {

        const position =
            element.getBoundingClientRect().top;

        if (position < window.innerHeight - 60) {

            element.style.transitionDelay =
                (index % 4) * 0.12 + "s";

            element.classList.add("visible");
        }

    });
}


window.addEventListener("scroll", revealElements);

window.addEventListener("load", () => {
    revealElements();
});


/* IMAGE ERROR HANDLING */

document.querySelectorAll(".analysis-card img").forEach(img => {

    img.addEventListener("error", () => {

        img.style.display = "none";

        const container = img.parentElement;

        container.innerHTML += `
            <div style="
                display:flex;
                align-items:center;
                justify-content:center;
                height:100%;
                min-height:220px;
                color:#a9c6b3;
                text-align:center;
                padding:20px;
                flex-direction:column;
                gap:12px;
            ">
                <i class="fa-solid fa-image" style="font-size:35px"></i>
                <span>Image not found. Check the image filename.</span>
            </div>
        `;

    });

});
