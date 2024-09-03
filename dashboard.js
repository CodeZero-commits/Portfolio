document.addEventListener("DOMContentLoaded", () => {
  const categoryCards = document.querySelectorAll(".category-card");
  const popup = document.getElementById("manualListPopup");
  const categoryTitle = document.getElementById("categoryTitle");
  const manualList = document.getElementById("manualList");
  const closeBtn = document.querySelector(".close");
  const manualesContenido = document.getElementById("manualesContenido");

  categoryCards.forEach((card) => {
    card.addEventListener("click", () => {
      const category = card.getAttribute("data-category");
      const categoryName = card.querySelector("h3").textContent;
      showManuals(category, categoryName);
    });
  });

  function showManuals(category, categoryName) {
    categoryTitle.textContent = categoryName;
    const manuales = manualesContenido.querySelector(
      `[data-category="${category}"]`
    ).innerHTML;
    manualList.innerHTML = manuales;
    popup.style.display = "block";
  }

  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
});
