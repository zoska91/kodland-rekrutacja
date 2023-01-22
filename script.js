// hamburger
const menuOnClick = () => {
  document.querySelector('.hamburger').classList.toggle('menu-opened');
  document.querySelector('.header__menu').classList.toggle('menu-opened');
};

document.querySelector('.hamburger').addEventListener('click', menuOnClick);
