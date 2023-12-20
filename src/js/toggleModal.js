export function openModal(listElements, boxTechnique, widthBoxList) {
  const indexBox = Math.abs(boxTechnique.offsetLeft) / widthBoxList;
  const modal = document.getElementById(
    `${listElements[indexBox]?.dataset.atribute}`
  );
  if (!modal) return;
  modal.style.display = 'block';
  setTimeout(() => modal.classList.add('is_open'), 100);

  window.addEventListener('keydown', onCloseModalByKey);
}

export function onCloseModal(event) {
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
export function onCloseModalByKey(event) {
  const modal = document.querySelector('.backdrop.is_open');
  if (modal && event.key === 'Escape') {
    modal.classList.remove('is_open');
  }
  window.removeEventListener('keydown', onCloseModalByKey);
}
