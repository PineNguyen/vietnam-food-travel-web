// Travel Page Search & Filtering

document.addEventListener("DOMContentLoaded", function () {
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
    if (searchTerm === "") {
      resetSearch();
      return;
    }

    places.forEach(place => {
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
    places.forEach(place => {
      place.style.display = "block";
    });
    if (searchInput) searchInput.value = "";
  }

  // Region Filter
  filterSelection("all");

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

  // Header menu
  const checkbox = document.getElementById("check");
  const menuNav = document.querySelector(".menu-nav");
  if (menuNav && checkbox) {
    menuNav.addEventListener("click", function () {
      checkbox.checked = false;
    });
  }
});

function filterSelection(c) {
  const elements = document.getElementsByClassName("showNone");
  const filter = c === "all" ? "" : c;

  Array.from(elements).forEach(element => {
    if (filter === "" || element.classList.contains(filter)) {
      element.classList.add("show");
    } else {
      element.classList.remove("show");
    }
  });
}