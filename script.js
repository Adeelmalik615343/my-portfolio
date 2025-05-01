const roles = ["Frontend Developer", "React Enthusiast", "UI/UX Explorer", "JavaScript Pro"];
const typingText = document.getElementById("typing-text");
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const current = roles[roleIndex];
  const currentText = isDeleting
    ? current.substring(0, charIndex--)
    : current.substring(0, charIndex++);

  typingText.textContent = currentText;

  if (!isDeleting && charIndex === current.length) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(type, 300);
  } else {
    setTimeout(type, isDeleting ? 50 : 100);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
});

// Navbar collapse on link click (mobile view)
const navbarLinks = document.querySelectorAll('.nav-link');
navbarLinks.forEach(link => {
  link.addEventListener('click', () => {
    const navbarCollapse = document.getElementById('navbarNav');
    const bootstrapCollapse = new bootstrap.Collapse(navbarCollapse, {
      toggle: true
    });
  });
});