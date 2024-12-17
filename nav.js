document.addEventListener("DOMContentLoaded", () => {
    const hamMenu = document.getElementById("nav-ham-menu"); // Hamburger menu button
    const hamWorking = document.querySelector(".ham-working"); // The menu overlay
    const closeButton = document.querySelector(".lil-x img"); // The "X" button
    const hamArrows = document.querySelectorAll(".hmrfa"); // Select all the arrows
    const subs = document.querySelectorAll(".sub"); // Select all the submenus

    // Toggle the menu on hamburger click
    hamMenu.addEventListener("click", () => {
        hamWorking.classList.toggle("active"); // Toggles the 'active' class
        updateAriaExpanded();
    });

    // Close the menu on "X" button click
    closeButton.addEventListener("click", () => {
        hamWorking.classList.remove("active");
        updateAriaExpanded();
    });

    // Close the menu if clicking outside it
    document.addEventListener("click", (e) => {
        if (!hamWorking.contains(e.target) && !hamMenu.contains(e.target)) {
            hamWorking.classList.remove("active");
            updateAriaExpanded();
        }
    });

    // Attach event listeners to each arrow
    hamArrows.forEach((arrow, index) => {
        arrow.addEventListener("click", () => {
            arrow.classList.toggle("active"); // Toggles the 'active' class on the arrow
            subs[index].classList.toggle("active"); // Toggles the 'active' class on the corresponding submenu
            updateAriaExpanded();
        });
    });

    // Update aria-expanded for accessibility
    function updateAriaExpanded() {
        const isActive = hamWorking.classList.contains("active");
        hamMenu.setAttribute("aria-expanded", isActive);
    }
});