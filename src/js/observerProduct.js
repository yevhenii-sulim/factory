let options = {
  root: null,
  //   rootMargin: '-100px',
  threshold: 0.1,
};

let observerProduct = new IntersectionObserver(loadingProduct, options);
let targetProduct = document.querySelector('.box_product');

function loadingProduct(entries, observer) {
  entries.forEach(element => {
    if (element.isIntersecting) {
      document.querySelector('.book_product').classList.add('is_loading');
      observer.unobserve(targetProduct);
    }
  });
}

export function initObserverProduct() {
  observerProduct.observe(targetProduct);
}
