//jshint esversion: 6
const items = document.querySelectorAll("#timeline li")

const isInViewPort = function(el) {
 const rect = el.getBoundingClientRect();
 return (
  rect.top >= 0 &&
  rect.left >= 0 &&
  rect.bottom <=
  (window.innerHeight || document.documentElement.clientHeight) &&
  rect.right <= (window.innerWidth ||document.documentElement.clientWidth)
 );
};

const run = function() {
 items.forEach(function (item) {
  if (isInViewPort(item)) {
   item.classList.add("show");
  }
 });
};

//events
window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);
