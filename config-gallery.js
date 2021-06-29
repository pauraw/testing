window.addEventListener("load", function(event) {
  
  var entries = window.PluginManager.getPluginList().GallerySlider;
  
  if (entries !== "undefined") {
    entries.get("instances")[0]._sliderSettings.preventScrollOnTouch = false;
  }
  
});
