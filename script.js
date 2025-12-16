window.addEventListener('scroll', function() {
    const navbar = document.getElementById('mainNavbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
    const imgSrc = item.getAttribute('data-img');
    document.getElementById('modalImage').src = imgSrc;
    });
});
