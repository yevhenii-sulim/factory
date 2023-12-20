import { turnCaruselNext, turnCaruselPrev } from './js/turnCarusel';
import { openModal, onCloseModal } from './js/toggleModal';
import {
  addClass,
  loadingProduct,
  loadingValue,
  loadingWood,
} from './js/observer';
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
  rootMargin: '200px',
  threshold: 1.0,
};

let observerValue = new IntersectionObserver(loadingValue, options);
export let targetValue = document.querySelector('address');
observerValue.observe(targetValue);

let observerWood = new IntersectionObserver(loadingWood, options);
export let targetWood = document.querySelector('.box_our_benefits');
observerWood.observe(targetWood);

let observerProduct = new IntersectionObserver(loadingProduct, options);
export let targetProduct = document.querySelector('#observer_product');
observerProduct.observe(targetProduct);

let observer = new IntersectionObserver(addClass, options);
export let target = document.querySelector('[data-atrebute="myRootGreeting"]');
observer.observe(target);
