document.addEventListener("DOMContentLoaded", function () {

  function countUp(element, countTo) {
    let count = 0;
    const duration = 2000;
    const incrementTime = Math.round(duration / countTo);

    const counter = setInterval(() => {
      count += 1;
      element.textContent = count;

      if (count >= countTo) {
        clearInterval(counter);
      }
    }, incrementTime);
  }

  const counters = document.querySelectorAll(".count");

  counters.forEach((counter) => {
    const countTo = parseInt(counter.getAttribute("data-count"));
    countUp(counter, countTo); 
  });
});


$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    // autoplay: true,
    // autoplayTimeout: 1000,
    // autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }
    }
  });

