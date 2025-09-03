let cards = document.querySelectorAll(".Scard");
let stackArea = document.querySelector(".StackContainer");

function animateCards() {
    let angle = 0; // Initialize the rotation angle
    cards.forEach((card, index) => {
        if (card.classList.contains("fading-away")) {
            // Move the card up and fade it out
            card.style.transform = `translateY(-100vh) rotate(0deg)`; // Fly up and set rotation to 0
            card.style.opacity = 0; // Fade out
            card.style.zIndex = -1; // Send the card behind others
        } else {
            // Rotate the remaining cards
            card.style.transform = `translateY(0) rotate(${angle}deg)`; // Reset position and apply rotation
            card.style.opacity = 1; // Fully visible
            card.style.zIndex = cards.length - index; // Adjust z-index for stacking
            angle -= 10; // Decrease angle for the next card
        }
    });
}

animateCards();

window.addEventListener("scroll", () => {
    let distance = window.innerHeight * 0.5;
    let topVal = stackArea.getBoundingClientRect().top;
    let index = Math.floor(-1 * (topVal / distance + 1)); // Calculate which card to "fly away"

    cards.forEach((card, i) => {
        if (i <= index) {
            card.classList.add("fading-away"); // Add flying-away class
        } else {
            card.classList.remove("fading-away"); // Remove flying-away class
        }
    });
    animateCards();
});

  
let form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;
  
  if (!name || !email || !message) {
    alert("Please fill out all fields!");
  } else {
    alert("Thanks, " + name + "! Your message has been sent.");
    form.reset();
  }
});