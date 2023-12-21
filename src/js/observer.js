import { target, targetProduct, targetValue, targetWood } from '..';
window.addEventListener('resize', removeClassIsload);

export function addClass(entries, observer) {
  entries.forEach(element => {
    if (window.innerWidth >= 1200) {
      if (element.isIntersecting) {
        const man = document.querySelector('.man_greeting');
        const girl = document.querySelector('.girl_greeting');
        man.style.display = 'block';
        girl.style.display = 'block';
        setTimeout(() => {
          man.classList.add('is_loading');
          girl.classList.add('is_loading');
          observer.unobserve(target);
        }, 100);
      }
    }
  });
}

export function loadingProduct(entries, observer) {
  entries.forEach(element => {
    if (element.isIntersecting) {
      document.querySelector('.food_product img').classList.add('is_loading');
      document.querySelector('.book_product').classList.add('is_loading');
      observer.unobserve(targetProduct);
    }
  });
}

export function loadingWood(entries, observer) {
  entries.forEach(element => {
    if (window.innerWidth >= 1200) {
      if (element.isIntersecting) {
        document.querySelector('.wood ').classList.add('is_loading');
        observer.unobserve(targetWood);
      }
    }
  });
}

export function loadingValue(entries, observer) {
  entries.forEach(element => {
    if (element.isIntersecting) {
      if (window.innerWidth >= 1200) {
        const egg = document.querySelector('.bread_with_egg ');
        const cheese = document.querySelector('.bread_with_cheese');
        cheese.style.display = 'block';
        egg.style.display = 'block';
        setTimeout(() => {
          egg.classList.add('is_loading');
          cheese.classList.add('is_loading');
        }, 100);
        observer.unobserve(targetValue);
      }
    }
  });
}

function removeClassIsload() {
  if (window.innerWidth <= 1200) {
    const isLoadingBox = document.querySelectorAll('.is_loading');
    for (const isLoading of isLoadingBox) {
      if (isLoading) {
        isLoading.style.display = 'none';
      }
    }
    return;
  } else {
    const isLoadingBox = document.querySelectorAll('.is_loading');
    for (const isLoading of isLoadingBox) {
      if (isLoading) {
        isLoading.style.display = 'block';
      }
    }
  }
}
