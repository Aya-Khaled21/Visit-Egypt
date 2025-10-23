const heroSection = document.querySelector(".hero-section");
const img = [
  "../Images/high-definition-corals-image-wallpaper-preview.jpg",
  "../Images/shutterstock_96622405-1000x600-1.jpg",
  "../Images/ttttttttttt.jpg",
  "../Images/67ecba3b5773a43e94a0efbfa18ba26f.jpg",
  "../Images/8c76fd15b13dab040a533810d3414266.jpg",
];

let current = 0;
setInterval(function () {
  current = current + 1;
  if (current >= img.length) {
    current = 0;
  }
  heroSection.style.backgroundImage = `url('${img[current]} ')`;
}, 5000);
