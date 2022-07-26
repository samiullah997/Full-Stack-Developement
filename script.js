const xIcon = document.getElementById('x-icon');
const menuIcon = document.getElementById('menu-icon');
const menuItems = document.getElementById('menu-items');
function setVersion(size) {
  if (size.matches) {
    menuIcon.style.display = 'none';
    xIcon.style.display = 'flex';
    menuItems.style.display = 'flex';
    xIcon.addEventListener('click', () => {
      xIcon.style.display = 'none';
      menuIcon.style.display = 'block';
      menuItems.style.display = 'none';
    });
    document.getElementById('menu-home').addEventListener('click', () => {
      xIcon.style.display = 'none';
      menuIcon.style.display = 'block';
      menuItems.style.display = 'none';
    });
    document.getElementById('menu-about').addEventListener('click', () => {
      xIcon.style.display = 'none';
      menuIcon.style.display = 'block';
      menuItems.style.display = 'none';
    });
    document.getElementById('menu-contact').addEventListener('click', () => {
      xIcon.style.display = 'none';
      menuIcon.style.display = 'block';
      menuItems.style.display = 'none';
    });
    document.getElementById('menu-developers').addEventListener('click', () => {
      xIcon.style.display = 'none';
      menuIcon.style.display = 'block';
      menuItems.style.display = 'none';
    });
  }
}
menuIcon.addEventListener('click', () => {
  const size = window.matchMedia('(max-width: 768px)');
  setVersion(size);
});