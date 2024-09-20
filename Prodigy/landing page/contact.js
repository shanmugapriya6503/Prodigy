// Burger Menu Toggle
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
});

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Form Validation and Submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill out all fields.');
  } else {
    alert('Message sent successfully!');
    document.getElementById('contactForm').reset(); // Reset form after submission
  }
});
