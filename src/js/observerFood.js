let options = {
  root: null,
  rootMargin: '10px',
  threshold: 1.0,
};

let observerFood = new IntersectionObserver(loadingFood, options);
let targetFood = document.querySelector('.adress_img');

function loadingFood(entries, observer) {
  entries.forEach(element => {
    if (element.isIntersecting) {
      const egg = document.querySelector('.bread_with_egg ');
      const cheese = document.querySelector('.bread_with_cheese');
      egg.classList.add('is_loading');
      cheese.classList.add('is_loading');
      observer.unobserve(targetFood);
    }
  });
}

export function initObserverFood() {
  observerFood.observe(targetFood);
}
