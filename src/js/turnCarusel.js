export function turnCaruselPrev(box, witdthBox) {
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

export function turnCaruselNext(box, witdthBox) {
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
