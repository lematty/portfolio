
function toggleMenu() {
  let height = document.getElementById('menu').style.height;
  height !== '100%' ? height = '100%' : height = '0%';
  document.getElementById('menu').style.height = height;
}