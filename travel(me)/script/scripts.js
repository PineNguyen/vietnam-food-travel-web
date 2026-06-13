var currentPage = 1;

function nextPage() {
  currentPage++;
  showPage(currentPage);
}
function showPage(pageNumber) {
    var pages = document.querySelectorAll('section[id^="page"]');
    var navigationItems = document.querySelectorAll('#page-navigation li');
  
    pages.forEach(function(page) {
      page.style.display = 'none';
    });
  
    var currentPage = document.getElementById('page' + pageNumber);
    currentPage.style.display = 'block';
    
    navigationItems.forEach(function(item) {
      item.classList.remove('active');
    });
    navigationItems[pageNumber - 1].classList.add('active');
  }