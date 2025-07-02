const images = document.querySelectorAll(".slides img");
const dots = document.querySelectorAll(".dots-container span");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;
const totalImages = images.length; // ✅ fixed typo
let slideInterval = setInterval(nextImage, 3000);

function showImage(index) {
  images.forEach((img, i) => {
    img.style.display = i === index ? "block" : "none";
    dots[i].classList.toggle("active", i === index);
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  showImage(currentIndex);
}

nextBtn.addEventListener("click", () => {
  nextImage();
  resetInterval();
});

prevBtn.addEventListener("click", () => {
  prevImage();
  resetInterval();
});

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    currentIndex = i;
    showImage(currentIndex);
    resetInterval();
  });
});

function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextImage, 3000);
}

// Initial display
showImage(currentIndex);
