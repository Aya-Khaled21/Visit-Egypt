const heroSection = document.querySelector(".hero-section");
const img = [
  "../Images/premium_photo-1724754604549-f48d1caab92a.avif",
  "../Images/photo-1722595053086-eb36d4c3a6f5.avif",
  "../Images/photo-1600520611035-84157ad4084d.avif",
  "../Images/premium_photo-1661963854938-e69a4e65c1e3.avif",
  "../Images/premium_photo-1661963789085-b057eb0185c7.avif",
];

let current = 0;
setInterval(function () {
  current = current + 1;
  if (current >= img.length) {
    current = 0;
  }
  heroSection.style.backgroundImage = `url('${img[current]}')`;
}, 5000);
