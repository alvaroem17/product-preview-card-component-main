const windowSize = () => {
  const image = document.getElementById('mainImage');
  if (window.innerWidth <= 375) {
    image.src =
      'https://github.com/alvaroem17/product-preview-card-component-main/blob/main/images/image-product-mobile.jpg?raw=true';
  } else {
    image.src =
      'https://github.com/alvaroem17/product-preview-card-component-main/blob/main/images/image-product-desktop.jpg?raw=true';
  }
};

window.addEventListener('pageshow', windowSize);

window.addEventListener('resize', windowSize);
