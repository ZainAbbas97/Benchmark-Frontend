(function () {
  const gap = 20;

  const carousel = document.getElementById("carousel"),
    content = document.getElementById("content"),
    next = document.getElementById("next"),
    prev = document.getElementById("prev");

  next.addEventListener("click", (e) => {
    carousel.scrollBy(width + gap, 0);
    if (carousel.scrollWidth !== 0) {
      prev.style.display = "flex";
    }
    if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
      next.style.display = "none";
    }
  });
  prev.addEventListener("click", (e) => {
    carousel.scrollBy(-(width + gap), 0);
    if (carousel.scrollLeft - width - gap <= 0) {
      prev.style.display = "none";
    }
    if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
      next.style.display = "flex";
    }
  });

  let width = carousel.offsetWidth;
  window.addEventListener("resize", (e) => (width = carousel.offsetWidth));
})();

let imagesArr = [
  "https://images.pexels.com/photos/215652/pexels-photo-215652.jpeg?auto=compress&cs=tinysrgb&h=350",
  "https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&h=350",
  "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&h=350",
  "https://images.pexels.com/photos/886404/pexels-photo-886404.jpeg?auto=compress&cs=tinysrgb&h=350",
  "https://images.pexels.com/photos/206434/pexels-photo-206434.jpeg?auto=compress&cs=tinysrgb&h=350",
];
var heroSlider = document.querySelector(".hero-slider");
var index = img.indexOf(heroSlider.style.backgroundImage);
let i = 0;
function change() {
  i = (i + 1) % imagesArr.length;
  // heroSlider.style.backgroundImage = img[index];
  heroSlider.style.backgroundColor = "green";
}
let intervalTimer = setInterval(change, 500);
