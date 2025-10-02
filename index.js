const toggleBtn = document.querySelector('.nav__toggle');
const navList = document.querySelector('.nav__list');

toggleBtn.addEventListener('click', () => {
  navList.classList.toggle('nav__list--open');
  toggleBtn.classList.toggle('open');
});
