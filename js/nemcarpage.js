        // carasel part here
        let index = 0;
    
    function moveSlide(step) {
      const slides = document.querySelectorAll(".carousel-images img");
      index += step;
      if (index < 0) {
        index = slides.length - 1;
      } else if (index >= slides.length) {
        index = 0;
      }
      document.querySelector(".carousel-images").style.transform = `translateX(-${index * 100}%)`;
    }
    // carasel part ends here