import { turnCaruselNext, turnCaruselPrev } from './js/turnCarusel';
import { openModal, onCloseModal } from './js/toggleModal';
import { loadingProduct, loadingProject, loadingValue } from './js/observer';
const [prev, next, boxTechnique, aboutTechnique, detailsProduct, body] = [
  '[data-atribute="prev"]',
  '[data-atribute="next"]',
  '.box_technique',
  '.about_technique',
  '.details_product',
  'body',
].map(item => document.querySelector(item));
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

let options = {
  root: null,
  rootMargin: '10px',
  threshold: 1.0,
};

let observerValue = new IntersectionObserver(loadingValue, options);
export let targetValue = document.querySelector('.adress_img');

let observerProduct = new IntersectionObserver(loadingProduct, options);
export let targetProduct = document.querySelector('#observer_product');

let observerProject = new IntersectionObserver(loadingProject, options);
export let targetProject = document.querySelector('#mark');

observerProject.observe(targetProject);
observerValue.observe(targetValue);
observerProduct.observe(targetProduct);
