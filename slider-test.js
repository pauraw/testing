window.addEventListener("load", function(event) {
  const gallerySliders = document.querySelectorAll('[data-gallery-slider="true"]');
  gallerySliders.forEach(el => {
    const sliderInstance = window.PluginManager.getPluginInstanceFromElement(el, 'GallerySlider');
    sliderInstance.options.slider.preventScrollOnTouch = false;
  });
});
