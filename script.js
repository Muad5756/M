document.addEventListener("DOMContentLoaded", function() {
    const pages = ["home", "about", "certificates", "portfolio", "contact"];

    function showPage(pageId) {
        pages.forEach(page => {
            const element = document.getElementById(`${page}-page`);
            if (element) {
                if (page === pageId) {
                    element.classList.remove("hidden");
                    element.classList.add("fade-in");
                } else {
                    element.classList.add("hidden");
                    element.classList.remove("fade-in");
                }
            }
        });

        // Update active navigation link
        document.querySelectorAll(".nav-link").forEach(link => {
            link.classList.remove("active");
        });
        const activeLink = document.querySelector(`.nav-link[onclick="showPage(\'${pageId}\')"]`);
        if (activeLink) {
            activeLink.classList.add("active");
        }

        // Hide mobile menu if open
        const mobileMenu = document.getElementById("mobile-menu");
        if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
            mobileMenu.classList.add("hidden");
        }
    }

    function toggleMobileMenu() {
        const mobileMenu = document.getElementById("mobile-menu");
        if (mobileMenu) {
            mobileMenu.classList.toggle("hidden");
        }
    }

    // Expose functions to global scope for onclick attributes
    window.showPage = showPage;
    window.toggleMobileMenu = toggleMobileMenu;

    // Show home page by default on load
    showPage("home");
});

