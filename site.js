document.addEventListener("DOMContentLoaded", function () {
    var navToggle = document.querySelector(".navbar-toggle");
    var navCollapse = document.getElementById("site-navbar");
    var dropdowns = Array.prototype.slice.call(document.querySelectorAll(".dropdown"));

    function closeDropdowns(except) {
        dropdowns.forEach(function (dropdown) {
            if (dropdown === except) {
                return;
            }

            var toggle = dropdown.querySelector(".dropdown-toggle");
            if (toggle) {
                toggle.setAttribute("aria-expanded", "false");
            }
            dropdown.classList.remove("open");
        });
    }

    if (navToggle && navCollapse) {
        navToggle.addEventListener("click", function () {
            var isOpen = navCollapse.classList.toggle("is-open");
            navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
            if (!isOpen) {
                closeDropdowns();
            }
        });
    }

    function closeMobileNav() {
        if (navCollapse && navCollapse.classList.contains("is-open")) {
            navCollapse.classList.remove("is-open");
            if (navToggle) {
                navToggle.setAttribute("aria-expanded", "false");
            }
        }
    }

    dropdowns.forEach(function (dropdown) {
        var toggle = dropdown.querySelector(".dropdown-toggle");
        if (!toggle) {
            return;
        }

        toggle.addEventListener("click", function () {
            var willOpen = !dropdown.classList.contains("open");
            closeDropdowns(dropdown);
            dropdown.classList.toggle("open", willOpen);
            toggle.setAttribute("aria-expanded", willOpen ? "true" : "false");
        });
    });

    Array.prototype.slice.call(document.querySelectorAll("#site-navbar a")).forEach(function (link) {
        link.addEventListener("click", function () {
            closeDropdowns();
            closeMobileNav();
        });
    });

    document.addEventListener("click", function (event) {
        var insideDropdown = event.target.closest(".dropdown");
        var clickedToggle = event.target.closest(".navbar-toggle");
        if (!insideDropdown && !clickedToggle) {
            closeDropdowns();
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeDropdowns();
            if (navCollapse && navCollapse.classList.contains("is-open")) {
                closeMobileNav();
                if (navToggle) {
                    navToggle.focus();
                }
            }
        }
    });
});
