// Pagination logic for regional travel pages

let currentPage = 1;

export function nextPage() {
  const pages = document.querySelectorAll('section[id^="page"]');
  if (pages.length === 0) return;
  
  currentPage++;
  if (currentPage > pages.length) {
    currentPage = 1;
  }
  showPage(currentPage);
}

export function showPage(pageNumber) {
  const pages = document.querySelectorAll('section[id^="page"]');
  const navigationItems = document.querySelectorAll('#page-navigation li');
  
  if (pages.length === 0) return;

  pages.forEach(page => {
    page.style.display = 'none';
  });

  const targetPage = document.getElementById('page' + pageNumber);
  if (targetPage) {
    targetPage.style.display = 'block';
    currentPage = pageNumber;
  }

  navigationItems.forEach((item, index) => {
    if (index === pageNumber - 1) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

// Bind to window for inline onclick attributes
window.showPage = showPage;
window.nextPage = nextPage;