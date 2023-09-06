// Script JavaScript del carrusel
document.addEventListener("DOMContentLoaded", function (event) {
  var slides = document.querySelectorAll(".slide");
  var currentSlide = 0;
  var slideInterval = setInterval(nextSlide, 2000);
  // Cambia la imagen cada 2 segundos

  function nextSlide() {
    slides[currentSlide].className = "slide";
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = "slide active";
  }
});
/*Script para que no puedan copiar el texto de la pagina*/
document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("selectstart", function (e) {
    e.preventDefault();
  });
});

/*AgustinPepe*/
