import foodsData from '../../src/data/foods.json';
import { createFoodCard } from '../../src/components/FoodCard.js';

export function renderFoodsList(containerId = 'food-list-container') {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = foodsData.map(food => createFoodCard(food)).join('');
}

export function filterSelection(category) {
  const elements = document.getElementsByClassName("showNone");
  const filter = category === "all" ? "" : category;
  
  Array.from(elements).forEach(element => {
    if (filter === "" || element.classList.contains(filter)) {
      element.classList.add("show");
    } else {
      element.classList.remove("show");
    }
  });
}

// Make filterSelection available globally for inline onclick handlers if needed
window.filterSelection = filterSelection;

document.addEventListener("DOMContentLoaded", function () {
  // Render foods list from JSON
  renderFoodsList();

  // Initialize filter
  filterSelection("all");

  // Active button toggle
  const btnContainer = document.getElementById("myBtnContainer");
  if (btnContainer) {
    const btns = btnContainer.getElementsByClassName("bttn");
    Array.from(btns).forEach(btn => {
      btn.addEventListener("click", function () {
        const current = btnContainer.getElementsByClassName("active");
        if (current.length > 0) {
          current[0].classList.remove("active");
        }
        this.classList.add("active");
      });
    });

    const myBtnCtnUl = btnContainer.querySelector("ul");
    const checkboxlist = document.getElementById("check-list");
    if (myBtnCtnUl && checkboxlist) {
      myBtnCtnUl.addEventListener("click", function () {
        checkboxlist.checked = false;
      });
    }
  }

  // Header menu behavior
  const checkbox = document.getElementById("check");
  const menuNav = document.querySelector(".menu-nav");
  if (menuNav && checkbox) {
    menuNav.addEventListener("click", function () {
      checkbox.checked = false;
    });
  }
});