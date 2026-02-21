// carousel.js
document.querySelectorAll("[data-carousel]").forEach((root) => {
  const track = root.querySelector("[data-carousel-track]");
  const prevButton = root.querySelector("[data-carousel-prev]");
  const nextButton = root.querySelector("[data-carousel-next]");
  const dotsWrap = root.querySelector("[data-carousel-dots]");

  if (!track || !dotsWrap) return;

  const slides = Array.from(track.children);
  if (slides.length === 0) return;

  let currentIndex = 0;

  function render() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, i) => {
      dot.classList.toggle("carousel__dot--active", i === currentIndex);
    });
  }

  function goTo(index) {
    currentIndex = (index + slides.length) % slides.length;
    render();
  }

  // dots
  const dots = slides.map((_, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "carousel__dot";
    dot.setAttribute("aria-label", `Слайд ${i + 1}`);
    dot.addEventListener("click", () => goTo(i));
    dotsWrap.append(dot);
    return dot;
  });

  if (prevButton) prevButton.addEventListener("click", () => goTo(currentIndex - 1));
  if (nextButton) nextButton.addEventListener("click", () => goTo(currentIndex + 1));

  render();
});
