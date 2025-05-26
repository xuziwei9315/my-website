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


  // 取得所有 clover-leaf 按鈕
  const buttons = document.querySelectorAll('.clover-leaf');
  const main = document.querySelector('main');

  // 預設載入首頁內容
  loadPage('index.html');

  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      const page = e.currentTarget.getAttribute('data-page');
      loadPage(page);
    });
  });

  function loadPage(page) {
    fetch(page)
      .then(response => {
        if (!response.ok) throw new Error('頁面載入失敗');
        return response.text();
      })
      .then(html => {
        main.innerHTML = html;
      })
      .catch(err => {
        main.innerHTML = `<p>載入頁面時發生錯誤: ${err.message}</p>`;
      });
  }

