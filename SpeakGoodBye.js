// STEP 6: Wrap the entire script in an IIFE
(function (window) {
  // STEP 7: Create the 'byeSpeaker' object
  var byeSpeaker = {};

  // DO NOT attach speakWord to byeSpeaker
  var speakWord = "Good Bye";

  // STEP 8: Attach the 'speak' function to byeSpeaker
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // STEP 9: Expose byeSpeaker to the global scope
  window.byeSpeaker = byeSpeaker;

})(window);
