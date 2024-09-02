document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".portfolio-carousel");
  const items = Array.from(carousel.querySelectorAll(".carousel-item"));
  const prevBtn = document.querySelector(".carousel-control.prev");
  const nextBtn = document.querySelector(".carousel-control.next");
  const categoryBtns = document.querySelectorAll(".category-btn");

  let itemWidth = items[0].offsetWidth;
  let currentIndex = 0;
  let visibleItems = items;

  function setupCarousel() {
    carousel.style.display = "flex";
    updateCarouselPosition();
  }

  function updateCarouselPosition(smooth = true) {
    carousel.style.transition = smooth ? "transform 0.5s ease" : "none";
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }

  function moveCarousel(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = visibleItems.length - 1;
    if (currentIndex >= visibleItems.length) currentIndex = 0;
    updateCarouselPosition();
  }

  function filterCarousel(category) {
    visibleItems = items.filter(
      (item) => category === "all" || item.dataset.category === category
    );

    items.forEach((item) => {
      if (category === "all" || item.dataset.category === category) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });

    currentIndex = 0;
    updateCarouselPosition(false);

    // Actualizar la visibilidad de los controles
    if (visibleItems.length <= 1) {
      prevBtn.style.display = "none";
      nextBtn.style.display = "none";
    } else {
      prevBtn.style.display = "block";
      nextBtn.style.display = "block";
    }
  }

  // Event listeners
  prevBtn.addEventListener("click", () => moveCarousel(-1));
  nextBtn.addEventListener("click", () => moveCarousel(1));

  categoryBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      categoryBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.dataset.category || "all";
      filterCarousel(category);
    });
  });

  // Inicializar carrusel
  setupCarousel();

  // Ajustar el carrusel cuando cambie el tamaño de la ventana
  window.addEventListener("resize", () => {
    itemWidth = visibleItems[0].offsetWidth;
    updateCarouselPosition(false);
  });

  // Iniciar con todos los proyectos visibles
  filterCarousel("all");
});

/*Acordion */
document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header");
    header.addEventListener("click", () => {
      const currentlyActiveItem = document.querySelector(
        ".accordion-item.active"
      );
      if (currentlyActiveItem && currentlyActiveItem !== item) {
        currentlyActiveItem.classList.remove("active");
      }
      item.classList.toggle("active");
    });
  });
});
