document.addEventListener('DOMContentLoaded', function () {
    const navbarLinks = document.querySelectorAll('.navbar-bg-body-tertiary .nav-link');
    navbarLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault(); 
            const targetId = this.getAttribute('href').substring(1); 
            const targetSection = document.getElementById(targetId);
            const navbarHeight = document.querySelector('.navbar-bg-body-tertiary').offsetHeight;
            window.scrollTo({
                top: targetSection.offsetTop - navbarHeight,
                behavior: 'smooth'
            });
        });
    });
});
