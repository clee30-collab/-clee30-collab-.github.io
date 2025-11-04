
const roomImages = document.querySelectorAll('[data-sound]');

roomImages.forEach(img => {
  let audio;

  img.addEventListener('mouseenter', () => {
    const soundSrc = img.dataset.sound;
    if (!soundSrc) return;

    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }

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
