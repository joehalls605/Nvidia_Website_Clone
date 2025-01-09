document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("card-container");
    const leftArrow = document.getElementById("left-arrow");
    const rightArrow = document.getElementById("right-arrow");

    // Amount to scroll on button click
    const scrollAmount = container.offsetWidth / 2; /* offset width gives the layout width of the element in pixels, including padding and borders, but not margins or scrollbars*/

    leftArrow.addEventListener("click", () => {
        container.scrollBy({left: -scrollAmount, behavior: "smooth"});
    });

    rightArrow.addEventListener("click", () => {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
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