const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log('Timer Started');
  },
  onTick() {
    console.log('Timer just dicked down');
  },
  onComplete() {
    console.log('Timer is completed');
  }
  });



