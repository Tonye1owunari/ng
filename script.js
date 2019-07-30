const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const container = document.querySelector('.slide');

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

let counter = 0;

function nextSlide() {
    container.animate([{opacity:0.5},{opacity:1.0}],{duration:500,fill:'forwards'});
    if (counter===1) {
        counter = -1;
    }
    counter++;
    container.style.backgroundImage = `url('bcg-${counter}.png')`;    
}
function prevSlide() {
    container.animate([{opacity:0.5},{opacity:1.0}],{duration:500,fill:'forwards'});
    if (counter===0) {
        counter = 2;
    }
    counter--;
    container.style.backgroundImage = `url('bcg-${counter}.png')`;    
}

//mobile menu =======================================================================

