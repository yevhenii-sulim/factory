const timeout = 250;
export function turnCaruselPrev(box, witdthBox) {
  let count = box.offsetLeft;
  if (box.offsetLeft >= 0) {
    box.style = `
      opacity:0
    `;
    setTimeout(
      () =>
        (box.style = `
      left:${-(box.childElementCount - 1) * witdthBox.offsetWidth}px;
      opacity:1
    `),
      timeout
    );
    return;
  }
  if (count % witdthBox.offsetWidth === 0) {
    box.style = `
    left:${count}px;
      opacity:0
    `;
    setTimeout(() => {
      count += witdthBox.offsetWidth;
      return (box.style = `
      left:${count}px;
      opacity:1
    `);
    }, timeout);
  }
  position = Math.abs(count) / witdthBox.offsetWidth;
}

export function turnCaruselNext(box, witdthBox) {
  let count = box.offsetLeft;
  if (box.offsetLeft <= -(box.childElementCount - 1) * witdthBox.offsetWidth) {
    box.style = `
    left:${count}px;
    opacity:0;
    `;
    setTimeout(
      () =>
        (box.style = `
      left:0px;
      opacity:1
    `),
      timeout
    );
    return;
  }
  if (count % witdthBox.offsetWidth === 0) {
    box.style = `
    left:${count}px;
    opacity:0;
    `;
    setTimeout(() => {
      count -= witdthBox.offsetWidth;
      box.style = `
      left:${count}px;
      opacity:1
    `;
    }, timeout);
  }
}
