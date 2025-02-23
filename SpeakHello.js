// STEP 2: Wrap the entire script in an IIFE
(function (window) {
  // STEP 3: Create the 'helloSpeaker' object
  var helloSpeaker = {};

  // DO NOT attach speakWord to helloSpeaker
  var speakWord = "Hello";

  // STEP 4: Attach the 'speak' function to helloSpeaker
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // STEP 5: Expose helloSpeaker to the global scope
  window.helloSpeaker = helloSpeaker;

})(window);
