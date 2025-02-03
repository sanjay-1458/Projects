const menu = document.getElementById("menu-icon");

function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = 'flex';
}
menu.addEventListener("click", showSidebar);

const close = document.getElementById("close-icon");

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = 'none';
}
close.addEventListener("click", hideSidebar);
