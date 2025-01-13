document.addEventListener("DOMContentLoaded", () => {
    const recommendedContainer = document.querySelector(".card-container");

    const leftArrow = document.getElementById("left-arrow");
    const rightArrow = document.getElementById("right-arrow");
    // Amount to scroll on button click
    const scrollAmount = recommendedContainer.offsetWidth / 2; // for recommended section

    // Scroll functionality for "Recommended" section
    leftArrow.addEventListener("click", () => {
        recommendedContainer.scrollBy({left: -scrollAmount, behavior: "smooth"});
    });

    rightArrow.addEventListener("click", () => {
        recommendedContainer.scrollBy({left: scrollAmount, behavior: "smooth"});
    });
});


/* 
How Scroll Width Works:

Every element, like my card container, has a scrollWidth, which is the total width of all its content, 
including the parts hidden because of overflow hidden.

JS then uses the scrollWidth property to figure out how far it can scroll horizontally.

left: -scrollAmount, scrolls the container left by scroll amount pixels, negative value moves left.
left: scrollAmount, scrolls the container right by scroll amount pixels, positive value moves right.
*/


