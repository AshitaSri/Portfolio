function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Function to redirect to project page
function redirectToProjectPage(pageURL) {
  window.location.href = pageURL;
}
