const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
});

// Get the button
const backToTopButton = document.getElementById('backToTop');

// When the user scrolls down 300px from the top, show the button
window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
};

// When the user clicks the button, scroll to the top of the document smoothly
backToTopButton.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

