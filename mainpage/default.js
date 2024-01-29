document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll(".slide");
  const carousel = document.querySelector(".carousel");
  let currentIndex = 0;
  
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(-${index * 100}%)`;
    });
  }
  
  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }
  
  setInterval(nextSlide, 3000); // 3초마다 다음 슬라이드 보이기
});
