// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord(bool) {
    return typeof bool == "boolean" ? (bool ? "Yes" : "No") : "Not a boolean";
  }
  
  console.log(boolToWord("false"));
  