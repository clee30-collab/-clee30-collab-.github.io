// Select all images that have a data-sound attribute
const roomImages = document.querySelectorAll('[data-sound]');

roomImages.forEach(img => {
  let audio;

  img.addEventListener('mouseenter', () => {
    const soundSrc = img.dataset.sound;
    if (!soundSrc) return;

    // Stop previous sound if already playing
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }

    // Play new sound
    audio = new Audio(soundSrc);
    audio.play();
  });

  img.addEventListener('mouseleave', () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  });
});
