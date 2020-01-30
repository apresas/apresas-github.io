const slide = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
let slideIntervals;

const nextSlide = () => {
    // Get Class
    const current = document.querySelector('.current');
    // Remove Current Class
    current.classList.remove('.current');
    // Check for Next Slide
    if(current.nextElementSibling) {
        // Add Current to Next Sibling
        current.nextElementSibling.classList.add('current');
    } else {
        // Add Current to Start
        slide[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

// Button Events
next.addEventListener('click', e => {
    nextSlide();
});
