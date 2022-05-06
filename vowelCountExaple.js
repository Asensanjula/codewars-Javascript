// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let vowelsCount = 0;

  // enter your magic here
  vowelsCount = str.split("").filter((char) => "aeiou".includes(char)).length;
  //return (str.match(/[aeiou]/ig)||[]).length; another approch using match i means case senstive g mean global

  return vowelsCount;
}

console.log(getCount("abracadabra"));
