function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("collapsed");
}

function showPage(pageId) {
  const pages = document.querySelectorAll(".page");
  pages.forEach(p => p.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
}

function toggleClover() {
  const wrapper = document.querySelector(".menu-wrapper");
  wrapper.classList.toggle("active");
}
