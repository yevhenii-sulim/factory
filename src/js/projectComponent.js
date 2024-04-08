export function createProjectComponent(projects) {
  return projects
    .map(({ id, img, link, tytle, describe }) => {
      console.log(img);
      return `
    <li class="project_element" data-project="${id}">
          <a href="${link}">
            <img src="./images/images/feedback.png" alt="${tytle}" />
          <div class="about_project">
            <p class="sign_project">${tytle}</p>
            <p class="description">
              ${describe}
            </p>
          </div>
          </a>
        </li>
    `;
    })
    .join('');
}
