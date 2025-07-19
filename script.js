document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu Functionality
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                // Apply animation with staggered delay
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });

    // Close nav when a link is clicked (for smooth scrolling)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
            navLinks.forEach((linkItem) => {
                linkItem.style.animation = ''; // Reset animation
            });
        });
    });

    // Optional: Hide initials and show image if profile.jpg exists and loads
    const profileImg = document.querySelector('.profile-img');
    const initialsSpan = document.querySelector('.initials');

    if (profileImg && initialsSpan) {
        profileImg.onload = () => {
            // If image loads successfully, show it and hide initials
            profileImg.style.display = 'block';
            initialsSpan.style.display = 'none';
        };
        profileImg.onerror = () => {
            // If image fails to load, ensure initials are visible
            profileImg.style.display = 'none';
            initialsSpan.style.display = 'flex'; // Use flex to center initials
        };
        // Initial check in case image is cached
        if (profileImg.complete && profileImg.naturalHeight !== 0) {
            profileImg.style.display = 'block';
            initialsSpan.style.display = 'none';
        } else {
            profileImg.style.display = 'none';
            initialsSpan.style.display = 'flex';
        }
    }

    // Smooth scroll for internal links (optional, if default smooth-scroll behavior is not enough)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});