// Apply 3D tilt effect on each team member card
const cards = document.querySelectorAll('.team-member');

cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // mouse X within card
    const y = e.clientY - rect.top;  // mouse Y within card

    const midX = rect.width / 2;
    const midY = rect.height / 2;

    // Calculate rotation angles from -15 to 15 degrees
    const rotateX = ((y - midY) / midY) * 15;
    const rotateY = ((x - midX) / midX) * 15;

    card.style.transform = `perspective(600px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = `perspective(600px) rotateX(0deg) rotateY(0deg) translateZ(0)`;
    card.style.transition = 'transform 0.5s ease';
    setTimeout(() => {
      card.style.transition = '';
    }, 500);
  });
});
