document.addEventListener("DOMContentLoaded", function () {
 

  //---------------------------------------
  // when an individual element is clicked
  // toggle the 'play' class
  //---------------------------------------
  const elements = document.querySelectorAll('.element, .element2');
  elements.forEach(function(element) {
    element.addEventListener('click', function() {
      this.classList.toggle('play');
    });
  });

  //---------------------------------------
  // toggle button - toggles 'play' on all elements
  //---------------------------------------
  const toggleButton = document.getElementById('toggle');
  toggleButton.addEventListener('click', function() {
    elements.forEach(function(element) {
      element.classList.toggle('play');

      const img = element.querySelector('img');

      if (img) {
        img.remove();
      } else {
        const newImg = document.createElement('img');
        newImg.src = 'images/dog.png';
        newImg.style.width = '100px';
        newImg.style.height = '100px';
        element.appendChild(newImg);
      }
    });
  });

  //---------------------------------------
  // play button - adds 'play' to all elements
  //---------------------------------------
  const playButton = document.getElementById('play');
  playButton.addEventListener('click', function() {
    elements.forEach(function(element) {
      element.classList.add('play');
    });
  });

  //---------------------------------------
  // pause button - removes 'play' from all elements and hides the image
  //---------------------------------------
  const pauseButton = document.getElementById('pause');
  pauseButton.addEventListener('click', function() {
    elements.forEach(function(element) {
      element.classList.remove('play');


      const img = element.querySelector('img');
      if (img) {
        img.remove();
      }
    });
  });

});
