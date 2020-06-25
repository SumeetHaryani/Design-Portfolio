const toggleButton = document.getElementsByClassName('nav__menu-toggle')[0];
const navbarLinks = document.getElementsByClassName('nav__list')[0];

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});