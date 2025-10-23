const heroSection = document.querySelector(".hero-section");
const img = [
  "../Images/tower.webp",
  "../Images/the creat pyramids.webp",
  "../Images/ras_mohamed_2_s.webp",
  "../Images/Luxor-Temple-Trips-in-Egypt-2.webp",
  "../Images/Aswan-High-Dam-Egypt.webp",
];

let current = 0;
setInterval(function () {
  current = current + 1;
  if (current >= img.length) {
    current = 0;
  }
  heroSection.style.backgroundImage = `url('${img[current]} ')`;
}, 5000);
