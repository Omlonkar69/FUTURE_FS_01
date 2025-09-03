let cards = document.querySelectorAll(".Scard, .Scard-L"); // include last card
let stackArea = document.querySelector(".StackContainer");

function animateCards() {
    let angle = 0;
    cards.forEach((card, index) => {
        if (card.classList.contains("flying-away")) {
            // fade + fly
            card.style.transform = `translateY(-100vh) rotate(0deg)`;
            card.style.opacity = 0;
            card.style.zIndex = -1;
        } else {
            // stack & rotate
            card.style.transform = `translateY(0) rotate(${angle}deg)`;
            card.style.opacity = 1;
            card.style.zIndex = cards.length - index;
            angle -= 10;
        }
    });
}

animateCards();

window.addEventListener("scroll", () => {
    let distance = window.innerHeight * 0.5;
    let topVal = stackArea.getBoundingClientRect().top;
    let index = Math.floor(-1 * (topVal / distance + 1));

    cards.forEach((card, i) => {
        // 🚀 Prevent last card from flying away
        if (i < cards.length - 1 && i <= index) {
            card.classList.add("flying-away");
        } else {
            card.classList.remove("flying-away");
        }
    });

    animateCards();
});
