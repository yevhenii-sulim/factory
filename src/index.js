import { turnCaruselNext, turnCaruselPrev } from './js/turnCarusel';
import { openModal, onCloseModal } from './js/toggleModal';
import { initObserverProduct } from './js/observerProduct';
import { initObserverFood } from './js/observerFood';
import { initObserverProject } from './js/observerProject';

const [prev, next, boxTechnique, aboutTechnique, detailsProduct, body] = [
  '[data-atribute="prev"]',
  '[data-atribute="next"]',
  '.box_technique',
  '.about_technique',
  '.details_product',
  'body',
].map(item => document.querySelector(item));

export const dataProjects = document.querySelectorAll('.project_element');
export const projects = document.querySelector('.box_project');
export let proj = 0;

projects.innerHTML = '';
if (window.innerWidth >= 1200) {
  projects.append(...Array.from(dataProjects).slice(proj, proj + 3));
} else {
  projects.append(...Array.from(dataProjects).slice(proj, proj + 1));
}

const listElements = boxTechnique.children;
const widthBoxList = aboutTechnique.offsetWidth;
prev.addEventListener('click', () =>
  turnCaruselPrev(boxTechnique, aboutTechnique)
);
next.addEventListener('click', () =>
  turnCaruselNext(boxTechnique, aboutTechnique)
);

detailsProduct.addEventListener('click', () =>
  openModal(listElements, boxTechnique, widthBoxList)
);

body.addEventListener('click', onCloseModal);

initObserverFood();
initObserverProject();
initObserverProduct();
