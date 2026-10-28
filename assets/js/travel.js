import destinationsData from '../../src/data/destinations.json';
import { createPlaceCard } from '../../src/components/PlaceCard.js';

export function renderDestinationsList(containerId = 'projects-content-container') {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = destinationsData.map(place => createPlaceCard(place)).join('');
}

export function filterSelection(category) {
  const elements = document.getElementsByClassName("showNone");
  const filter = category === "all" ? "" : category;

  Array.from(elements).forEach(element => {
    if (filter === "" || element.classList.contains(filter)) {
      element.classList.add("show");
      element.style.display = "block";
    } else {
      element.classList.remove("show");
      element.style.display = "none";
    }
  });
}

window.filterSelection = filterSelection;

document.addEventListener("DOMContentLoaded", function () {
  // Dynamically render destinations if container present
  renderDestinationsList();

  const places = document.querySelectorAll(".place");
  const searchInput = document.querySelector("#search-input");
  const searchButton = document.querySelector("#search-button");

  if (searchButton && searchInput) {
    searchButton.addEventListener("click", searchPlace);
    searchInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        searchPlace();
      }
    });
  }

  function searchPlace() {
    if (!searchInput) return;
    const searchTerm = searchInput.value.toLowerCase().trim();
    const currentPlaces = document.querySelectorAll(".place");

    if (searchTerm === "") {
      resetSearch();
      return;
    }

    currentPlaces.forEach(place => {
      const title = place.querySelector("h3")?.textContent.toLowerCase() || "";
      const description = place.querySelector("p")?.textContent.toLowerCase() || "";

      if (title.includes(searchTerm) || description.includes(searchTerm)) {
        place.style.display = "block";
      } else {
        place.style.display = "none";
      }
    });
  }

  function resetSearch() {
    const currentPlaces = document.querySelectorAll(".place");
    currentPlaces.forEach(place => {
      place.style.display = "block";
    });
    if (searchInput) searchInput.value = "";
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