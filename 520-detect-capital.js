var detectCapitalUse = function (word) {
  const firstLetter = word[0];
  const lastLetter = word[word.length - 1];

  // if the first letter is lower case, then all must be lower case
  if (firstLetter.toLowerCase() === firstLetter) {
    for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      if (letter.toLowerCase() !== letter) return false;
    }
  } else if (firstLetter.toUpperCase() === firstLetter) {
    // first letter is upper case
    // if the last letter is also upper case, all must be upper case
    if (lastLetter.toUpperCase() === lastLetter) {
      for (let i = 0; i < word.length; i++) {
        const letter = word[i];
        if (letter.toUpperCase() !== letter) return false;
      }
    } else {
      // first letter is upper case, last letter is lower case, then only the first letter should be upper case
      for (let j = 1; j < word.length; j++) {
        const letter = word[j];
        if (letter.toLowerCase() !== letter) return false;
      }
    }
  }
  return true;
};

console.log(detectCapitalUse("USA"));
console.log(detectCapitalUse("FLaG"));
console.log(detectCapitalUse("flag"));
