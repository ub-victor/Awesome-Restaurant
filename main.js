// Toggle mobile menu visibility and adjust main content padding
document.getElementById('mobile-menu-button').addEventListener('click', function() {
const mobileMenu = document.getElementById('mobile-menu');
const mainContent = document.getElementById('main-content')

// Toggle mobile menu visibility
mobileMenu.classList.toggle('hidden');

// Adjust main content padding
if (mobileMenu.classList.contains('hidden')){
mainContent.classList.remove('pt-72'); // Reset padding if menu is closed
}else {
mainContent.classList.add('pt-72');  // Add padding if menu is open
} });



// Restaurant Carousel Functionality
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('restaurant-carousel');
    const prevBtns = document.querySelectorAll('.carousel-prev');
    const nextBtns = document.querySelectorAll('.carousel-next');
    let currentIndex = 0;
    
    function updateCarousel() {
        const cardWidth = document.querySelector('.restaurant-card').offsetWidth;
        const scrollPosition = currentIndex * (cardWidth + 32); // 32px for padding
        carousel.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
        
        // Disable/enable arrows based on position
        prevBtns.forEach(btn => {
            btn.disabled = currentIndex === 0;
            btn.classList.toggle('opacity-50', currentIndex === 0);
            btn.classList.toggle('cursor-not-allowed', currentIndex === 0);
        });
        
        nextBtns.forEach(btn => {
            btn.disabled = currentIndex >= carousel.children.length - 1;
            btn.classList.toggle('opacity-50', currentIndex >= carousel.children.length - 1);
            btn.classList.toggle('cursor-not-allowed', currentIndex >= carousel.children.length - 1);
        });
    }
    
    prevBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });
    });
    
    nextBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (currentIndex < carousel.children.length - 1) {
                currentIndex++;
                updateCarousel();
            }
        });
    });
    
    // Initialize arrows
    updateCarousel();
    
    // Handle window resize
    function handleResize() {
        const cardWidth = document.querySelector('.restaurant-card').offsetWidth;
        currentIndex = Math.round(carousel.scrollLeft / (cardWidth + 32));
        updateCarousel();
    }
    
    window.addEventListener('resize', handleResize);
});