/**
 * FoodCard Component
 * Generates HTML string for a food item card
 * @param {Object} food - Food data object
 * @returns {string} HTML markup
 */
export function createFoodCard(food) {
  return `
    <div class="content-info-card col-xl-3 col-lg-4 col-md-6 col-6 showNone ${food.region}">
        <a href="${food.detailUrl}">
            <div class="content-card-img" style="background-image: url(${food.image});">
                <i class="fa-solid fa-up-right-from-square"></i>
            </div>
            <div class="content-card-info">
                <h5>${food.title}</h5>
                <p>${food.description}</p>
            </div>
        </a>
    </div>
  `;
}
