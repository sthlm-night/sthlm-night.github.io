"use strict";
// The image links remain usable if PhotoSwipe fails to load.
if (typeof PhotoSwipeLightbox !== "undefined" && typeof PhotoSwipe !== "undefined") {
  const lightbox = new PhotoSwipeLightbox({
    gallery: ".swipe-gallery",
    children: "a",
    pswpModule: PhotoSwipe,
    showHideAnimationType: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "none" : "zoom"
  });
  lightbox.init();
}
