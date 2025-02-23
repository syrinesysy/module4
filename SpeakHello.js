// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
(function (window) {
  var speakWord = "Hello";

  // STEP 3: Create an object, called 'helloSpeaker'
  var helloSpeaker = {};

  // STEP 4: Attach the 'speak' method to the helloSpeaker object
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // STEP 5: Expose 'helloSpeaker' to the global scope
  window.helloSpeaker = helloSpeaker;

})(window);
