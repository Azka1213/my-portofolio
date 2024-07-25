
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('image-carousel');
    const images = carousel.querySelectorAll('.carousel-image');
    let currentIndex = 0;
    let intervalId;

    function showImage(index) {
        images.forEach((img, i) => {
            if (i === index) {
                img.style.opacity = '1';
            } else {
                img.style.opacity = '0';
            }
        });
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function startCarousel() {
        intervalId = setInterval(showNextImage, 5000); // Change image every 5 seconds
    }

    function stopCarousel() {
        clearInterval(intervalId);
    }

    // Start carousel
    startCarousel();

    // Add click event to change image and restart carousel
    carousel.addEventListener('click', function() {
        stopCarousel();
        showNextImage();
        startCarousel();
    });

    // Ensure the first image is visible
    showImage(0);
});
      
        document.addEventListener('DOMContentLoaded', function() {
            const menuToggle = document.getElementById('menu-toggle');
            const mobileMenu = document.getElementById('mobile-menu');
    
            menuToggle.addEventListener('click', function() {
                mobileMenu.classList.toggle('hidden');
            });
    
            // Menutup menu saat link di klik
            const mobileLinks = mobileMenu.querySelectorAll('a');
            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                });
            });
        });

        document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                alert('Terima kasih! Pesan Anda telah terkirim.');
                form.reset();
            } else {
                alert('Oops! Ada masalah saat mengirim pesan Anda. Silakan coba lagi.');
            }
        }).catch(error => {
            alert('Oops! Ada masalah saat mengirim pesan Anda. Silakan coba lagi.');
        });
    });
});

