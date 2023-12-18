const [
  prev,
  next,
  boxTechnique,
  aboutTechnique,
  detailsProduct,
  boxProjectsElement,
  projectElement,
  prevSwitch,
  nextSwitch,
  backdrop,
  ourProject,
  body,
] = [
  '[data-atribute="prev"]',
  '[data-atribute="next"]',
  '.box_technique',
  '.about_technique',
  '.details_product',
  '.box_project',
  '.project_element',
  '[data-atribute="prev-switch"]',
  '[data-atribute="next-switch"]',
  '.backdrop',
  '.our_project',
  'body',
].map(item => document.querySelector(item));
const clockInTime = 250;
const listElements = boxTechnique.children;
const widthBoxList = aboutTechnique.offsetWidth;
const listElementsProject = boxProjectsElement.children;
let position = 0;
prev.addEventListener('click', () =>
  turnCaruselPrev(boxTechnique, aboutTechnique)
);
next.addEventListener('click', () =>
  turnCaruselNext(boxTechnique, aboutTechnique)
);

prevSwitch.addEventListener('click', () =>
  turnCaruselPrev(boxProjectsElement, projectElement)
);
nextSwitch.addEventListener('click', () =>
  turnCaruselNext(boxProjectsElement, projectElement)
);

detailsProduct.addEventListener('click', openModal);
backdrop?.addEventListener('click', onCloseModal);

window.onload = resizeourProject;
window.onresize = resizeourProject;

function resizeourProject() {
  if (projectElement.offsetWidth === ourProject.offsetWidth) return;
  let position = boxProjectsElement.offsetLeft / projectElement.offsetWidth;
  for (let project of listElementsProject) {
    project.style.width = ourProject.offsetWidth + 'px';
  }
  boxProjectsElement.style.left = position * ourProject.offsetWidth + 'px';
}

function turnCaruselPrev(box, witdthBox) {
  console.log(box, witdthBox);
  let count = box.offsetLeft;
  if (box.offsetLeft >= 0) {
    box.style.left =
      -(box.childElementCount - 1) * witdthBox.offsetWidth + 'px';
    return;
  }
  if (count % witdthBox.offsetWidth === 0) {
    count += witdthBox.offsetWidth;
    box.style.left = count + 'px';
  }
  position = Math.abs(count) / witdthBox.offsetWidth;
}

function turnCaruselNext(box, witdthBox) {
  let count = box.offsetLeft;
  if (box.offsetLeft <= -(box.childElementCount - 1) * witdthBox.offsetWidth) {
    box.style.left = 0 + 'px';
    return;
  }
  if (count % witdthBox.offsetWidth === 0) {
    count -= witdthBox.offsetWidth;
    box.style.left = count + 'px';
  }
}

function openModal() {
  const indexBox = Math.abs(boxTechnique.offsetLeft) / widthBoxList;
  const modal = document.querySelector(
    `#${listElements[indexBox].dataset.atribute}`
  );
  modal.style.display = 'block';
  setTimeout(() => modal.classList.add('is_open'), 10);

  window.addEventListener('keydown', onCloseModalByKey);
}

function onCloseModal(event) {
  if (
    event.target.classList[0] === 'backdrop' ||
    event.target.dataset.atribute === 'close'
  ) {
    const modal = document.querySelector('.backdrop.is_open');
    if (modal) {
      modal.classList.remove('is_open');
      setTimeout(() => (modal.style.display = 'none'), 500);
    }
  }
}
function onCloseModalByKey(event) {
  const modal = document.querySelector('.backdrop.is_open');
  if (modal && event.key === 'Escape') {
    modal.classList.remove('is_open');
  }
  window.removeEventListener('keydown', onCloseModalByKey);
}

let options = {
  root: null,
  rootMargin: '200px',
  threshold: 1.0,
};

let observer = new IntersectionObserver(addClass, options);

let target = document.querySelector('[data-atrebute="myRootGreeting"]');
observer.observe(target);

function addClass(entries, observer) {
  console.log(entries, observer);
  entries.forEach(element => {
    if (element.isIntersecting) {
      document.querySelector('.man_greeting').classList.add('is_loading');
      document.querySelector('.girl_greeting').classList.add('is_loading');
      observer.unobserve(target);
    }
  });
}

let observerProduct = new IntersectionObserver(loadingProduct, options);

let targetProduct = document.querySelector('#observer_product');
observerProduct.observe(targetProduct);

function loadingProduct(entries, observer) {
  entries.forEach(element => {
    if (element.isIntersecting) {
      document.querySelector('.food_product img').classList.add('is_loading');
      document.querySelector('.book_product').classList.add('is_loading');
      observer.unobserve(targetProduct);
    }
  });
}

let observerWood = new IntersectionObserver(loadingWood, options);

let targetWood = document.querySelector('.box_our_benefits');
observerWood.observe(targetWood);

function loadingWood(entries, observer) {
  entries.forEach(element => {
    if (element.isIntersecting) {
      document.querySelector('.wood ').classList.add('is_loading');
      observer.unobserve(targetWood);
    }
  });
}

let observerValue = new IntersectionObserver(loadingValue, options);

let targetValue = document.querySelector('.switch_project');
observerValue.observe(targetValue);

function loadingValue(entries, observer) {
  entries.forEach(element => {
    if (element.isIntersecting) {
      document.querySelector('.bread_with_egg ').classList.add('is_loading');
      document.querySelector('.bread_with_cheese').classList.add('is_loading');
      observer.unobserve(targetValue);
    }
  });
}
