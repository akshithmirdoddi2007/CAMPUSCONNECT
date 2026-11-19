// CAMPUSCONNECT EXPLORE EVENTS

document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("eventSearch");
    const searchButton = document.querySelector(".search-btn");
    const categoryButtons = document.querySelectorAll(".category-btn");
    const eventCards = document.querySelectorAll(".explore-events .event-card");

    let selectedCategory = "All Events";

    function filterEvents() {

        const searchText = searchInput.value.toLowerCase();

        eventCards.forEach(function (card) {

            const eventText = card.innerText.toLowerCase();

            const matchesSearch = eventText.includes(searchText);

            const matchesCategory =
                selectedCategory === "All Events" ||
                eventText.includes(selectedCategory.toLowerCase());

            card.style.display =
                matchesSearch && matchesCategory ? "block" : "none";

        });

    }

    searchButton.addEventListener("click", filterEvents);

    searchInput.addEventListener("input", filterEvents);

    categoryButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            selectedCategory = button.innerText.trim();

            filterEvents();

        });
    

    });

});
// AUTO SELECT EVENT

const eventSelect = document.getElementById("eventName");

if (eventSelect) {
    const params = new URLSearchParams(window.location.search);
    const selectedEvent = params.get("event");

    if (selectedEvent) {
        eventSelect.value = selectedEvent;
    }
}
