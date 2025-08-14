// Auto-update footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Fade-in on scroll
const fadeElements = document.querySelectorAll(".fade-in");

function handleScroll() {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", handleScroll);
handleScroll();
