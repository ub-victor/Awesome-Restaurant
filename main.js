document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileNav = document.getElementById('mobile-nav');

    mobileMenuButton.addEventListener('click', function() {
        mobileNav.classList.toggle('mobile-visible');
    });
});