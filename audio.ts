// Audio utility for playing success sounds
export const playSuccessSound = () => {
  try {
    const audio = new Audio('/sounds/success.mp3');
    audio.volume = 0.3; // Set volume to 30%
    audio.play().catch(error => {
      console.log('Could not play success sound:', error);
    });
  } catch (error) {
    console.log('Audio not available:', error);
  }
};

export const playErrorSound = () => {
  try {
    const audio = new Audio('/sounds/error.mp3');
    audio.volume = 0.3; // Set volume to 30%
    audio.play().catch(error => {
      console.log('Could not play error sound:', error);
    });
  } catch (error) {
    console.log('Audio not available:', error);
  }
};