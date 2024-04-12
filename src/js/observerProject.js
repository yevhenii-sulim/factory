import { dataProjects, projects } from '../index';

let options = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0,
};
let proj = 0;
let observerProject = new IntersectionObserver(loadingProject, options);
let targetProject = document.querySelector('#mark');

function loadingProject(entries, observer) {
  entries.forEach(element => {
    if (element.isIntersecting) {
      if (window.innerWidth >= 1200) {
        proj += 3;
        projects.append(
          ...Array.from(dataProjects).slice(proj, dataProjects.length)
        );
        observer.unobserve(targetProject);
        return;
      } else {
        proj += 1;
        projects.append(...Array.from(dataProjects).slice(proj, proj + 1));
      }
      if (proj >= dataProjects.length) {
        observer.unobserve(targetProject);
      }
    }
  });
}

export function initObserverProject() {
  observerProject.observe(targetProject);
}
