
function handleMouseEnter () {
    this.classList.add('ae-card--hovered');
    document.body.id = `${this.id}-hovered`;
}
function handleMouseLeave () {
    this.classList.remove('ae-card--hovered');
    document.body.id = '';
}

function addEventListenersToCards () {
    const cardElement = document.getElementsByClassName('ae-card');
    for (let i = 0; i < cardElement.length; i++) {
        const card = cardElement[i];
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
    }
}

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);

function selectCarouselItem(selectedButtonElement) {
    const selectedItem = selectedButtonElement.id;
    const carousel = document.querySelector('.ae-cards-carousel');
    const transform = carousel.style.transform;
    const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
    const rotateYDeg = -90 * (Number(selectedItem) - 1);
    const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);
  
    carousel.style.transform = newTransform;
  
    const activeButtonElement = document.querySelector('.ae-controller__button--active');
    activeButtonElement.classList.remove('ae-controller__button--active');
    selectedButtonElement.classList.add('ae-controller__button--active');
  }