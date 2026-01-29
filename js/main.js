// Navbar and Back to Top scroll behavior
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const backToTop = document.getElementById('backToTop');
    
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        if (backToTop) backToTop.classList.add('show');
    } else {
        navbar.classList.remove('scrolled');
        if (backToTop) backToTop.classList.remove('show');
    }
});

// Back to top click event
const backToTop = document.getElementById('backToTop');
if (backToTop) {
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// TOC Toggle functionality (for article pages)
function toggleTOC() {
    const tocContent = document.getElementById('tocContent');
    const tocIcon = document.getElementById('tocIcon');
    if (tocContent.classList.contains('d-none')) {
        tocContent.classList.remove('d-none');
        tocIcon.classList.replace('fa-plus', 'fa-minus');
    } else {
        tocContent.classList.add('d-none');
        tocIcon.classList.replace('fa-minus', 'fa-plus');
    }
}

// Blog Search Functionality
const blogSearch = document.getElementById('blogSearch');
if (blogSearch) {
    blogSearch.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const articleCards = document.querySelectorAll('.blog-card');
        
        articleCards.forEach(card => {
            const title = card.querySelector('.card-title').innerText.toLowerCase();
            if (title.includes(searchTerm)) {
                card.closest('.col-md-4').style.display = 'block';
            } else {
                card.closest('.col-md-4').style.display = 'none';
            }
        });
    });
}
