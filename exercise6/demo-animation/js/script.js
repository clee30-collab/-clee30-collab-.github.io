document.addEventListener("DOMContentLoaded", function () {
const pauseicon = 'pause';
const playicon = 'play';
const controls = document.querySelectorAll('.controls')
  
  //---------------------------------------
  // when an individual element is clicked
  // toggle the 'play' class
  //---------------------------------------
  const elements = document.querySelectorAll('.element');
  elements.forEach(function(element) {
    element.addEventListener('click', function() {
      this.classList.toggle('play');
    });
  });


  //---------------------------------------
  // play button - adds 'play' to all elements
  //---------------------------------------

function onChange (event) {
  const buttonElement = event.currentTarget
  const isplayicon = buttonElement.classList.contains(playicon)

  if (isplayicon) {
    buttonElement.classList.remove(playicon)
    buttonElement.classList.add(pauseicon)
    
  } else {
    buttonElement.classList.remove(pauseicon)
    buttonElement.classList.add(playicon)
  }

}

controls.forEach(controls => {
  controls.addEventListener('click', onChange)
})

  //---------------------------------------
  // pause button - removes 'play' from all elements
  //---------------------------------------
  const pauseButton = document.getElementById('pause');
  pauseButton.addEventListener('click', function() {
    elements.forEach(function(element) {
      element.classList.remove('play');
    });
  });

});
