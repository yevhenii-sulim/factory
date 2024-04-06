export function createProjectComponent(projects) {
  return projects
    .map(({ id, img, link, tytle, describe }) => {
      return `
    <li class="project_element" data-project="${id}">
          <a href="${link}">
            <img src=${img} alt="${tytle}" />
          </a>
          <div class="about_project">
            <p class="sign_project">${tytle}</p>
            <p class="description">
              ${describe}
            </p>
          </div>
        </li>
    `;
    })
    .join('');
}
