// Simple 3D rotation animation on image - for enhanced interaction
const image = document.querySelector('.image-container img');

image.addEventListener('mousemove', e => {
  const rect = image.getBoundingClientRect();
  const x = e.clientX - rect.left; // x position within image
  const y = e.clientY - rect.top;  // y position within image

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = ((y - centerY) / centerY) * 10;
  const rotateY = ((x - centerX) / centerX) * 15;

  image.style.transform = `rotateX(${ -rotateX }deg) rotateY(${ rotateY }deg) scale(1.1)`;
});

image.addEventListener('mouseleave', () => {
  image.style.transform = 'rotateX(0) rotateY(0) scale(1)';
});
