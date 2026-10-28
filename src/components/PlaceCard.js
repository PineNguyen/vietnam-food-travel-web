/**
 * PlaceCard Component
 * Generates HTML string for a travel destination card
 * @param {Object} place - Destination data object
 * @returns {string} HTML markup
 */
export function createPlaceCard(place) {
  return `
    <div class="project place showNone ${place.region}">
      <a href="${place.detailUrl}">
        <img src="${place.image}" alt="${place.title}">
      </a>
      <h3>${place.title}</h3>
      <p class="place-desc" style="font-size: 14px; color: #666; margin-top: 5px;">${place.description}</p>
    </div>
  `;
}
