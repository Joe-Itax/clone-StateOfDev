const menu_icon = document.getElementById('menu-icon-nav');
const nav = document.getElementById('nav');

menu_icon.addEventListener('click', function seeNav() {
  menu_icon.style.display = 'initial';
  menu_icon.style.zIndex = '1000';
});

function seeNav() {
  menu_icon.style.display = 'block';
  menu_icon.style.zIndex = '1000';
}
