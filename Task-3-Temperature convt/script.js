// Typing effect
var typed = new Typed("#typed", {
  strings: [
    "Full-Stack Developer",
    "Problem Solver",
    "Tech Enthusiast"
  ],
  typeSpeed: 70,
  backSpeed: 50,
  loop: true
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
