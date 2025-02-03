const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
menuBtn.addEventListener("click", () => {
  let currentRight = window.getComputedStyle(sidebar).right;
  if (currentRight === "-250px") {
    sidebar.style.right = "0";
  } else {
    sidebar.style.right = "-250px";
  }
});
