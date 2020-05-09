document.addEventListener("DOMContentLoaded", function () {
  // Add code here

  gsap.from("#test", {
    duration: 1,
    x: -500,
    y: -500,
    opacity: 0.3

  });

  gsap.from("#chart", {
    duration: 1,
    x: -500,
    opacity: 0.3
  })
});