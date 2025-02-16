        // Toggle mobile menu visibility and adjust main content padding
        document.getElementById('mobile-menu-button').addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobile-menu');
            const mainContent = document.getElementById('main-content')

            // Toggle mobile menu visibility
            mobileMenu.classList.toggle('hidden');

           // Adjust main content padding
           if (mobileMenu.classList.contains('hidden')){
            mainContent.classList.remove('pt-48'); // Reset padding if menu is closed
           }else {
            mainContent.classList.add('pt-48');  // Add padding if menu is open
            } 
        });
    