import { targetProduct, targetProject, targetValue } from '..';
import data from '../data.json';
import { createProjectComponent } from './projectComponent';

export function loadingProduct(entries, observer) {
  entries.forEach(element => {
    if (element.isIntersecting) {
      document.querySelector('.food_product').classList.add('is_loading');
      document.querySelector('.book_product').classList.add('is_loading');
      observer.unobserve(targetProduct);
    }
  });
}

export function loadingValue(entries, observer) {
  entries.forEach(element => {
    if (element.isIntersecting) {
      const egg = document.querySelector('.bread_with_egg ');
      const cheese = document.querySelector('.bread_with_cheese');
      egg.classList.add('is_loading');
      cheese.classList.add('is_loading');
      observer.unobserve(targetValue);
    }
  });
}

let proj = 0;
const projects = document.querySelector('.box_project');

if (window.innerWidth >= 1200) {
  projects.insertAdjacentHTML(
    'beforeend',
    createProjectComponent(data.slice(proj, proj + 3))
  );
} else {
  projects.insertAdjacentHTML(
    'beforeend',
    createProjectComponent(data.slice(proj, proj + 3))
  );
}

export function loadingProject(entries, observer) {
  entries.forEach(element => {
    if (element.isIntersecting) {
      if (window.innerWidth >= 1200) {
        proj += 3;
        projects.insertAdjacentHTML(
          'beforeend',
          createProjectComponent(data.slice(proj, proj + 3))
        );
      } else {
        proj += 1;
        projects.insertAdjacentHTML(
          'beforeend',
          createProjectComponent(data.slice(proj, proj + 1))
        );
      }
      if (proj >= data.length) {
        observer.unobserve(targetProject);
      }
    }
  });
}
