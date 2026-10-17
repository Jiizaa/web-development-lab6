/* =========================================
   LAB 6 - JAVASCRIPT
========================================= */


/* =========================================
   DARK / LIGHT MODE
========================================= */

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const isDark =
        document.body.classList.contains("dark");

    themeBtn.textContent =
        isDark ? "☀️" : "🌙";

    themeBtn.setAttribute(
        "aria-label",
        isDark
            ? "Light mode руу шилжих"
            : "Dark mode руу шилжих"
    );

});


/* =========================================
   FLIP BUTTON
========================================= */

const flipButtons =
    document.querySelectorAll(".flip-btn");


flipButtons.forEach((button) => {

    button.addEventListener("click", (event) => {

        event.stopPropagation();

        const card =
            button.closest(".flip-card");

        const inner =
            card.querySelector(".flip-inner");

        inner.classList.toggle("manual-flip");

    });

});


/* =========================================
   MANUAL FLIP STYLE
========================================= */

const style =
    document.createElement("style");


style.textContent = `

    .flip-inner.manual-flip {
        transform: rotateY(180deg);
    }

`;


document.head.appendChild(style);