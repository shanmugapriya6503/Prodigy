// Toggle burger menu
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
});

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
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
