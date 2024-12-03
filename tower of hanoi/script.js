document.addEventListener('DOMContentLoaded', () => {
    const clickSound = document.getElementById('clickSound');
    const radios = document.querySelectorAll('input[type="radio"]');
    const resetButton = document.getElementById('resetButton');
  
    // Play sound on radio button click
    radios.forEach(radio => {
      radio.addEventListener('click', () => {
        clickSound.currentTime = 0; // Reset sound to the start
        clickSound.play();
      });
    });

  
    // Play sound on reset button click
    resetButton.addEventListener('click', () => {
      clickSound.currentTime = 0;
      clickSound.play();
    });
  });
  