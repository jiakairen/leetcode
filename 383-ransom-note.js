var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false;

  const stock = {};

  for (let i = 0; i < magazine.length; i++) {
    const note = ransomNote[i];
    const magazineLetter = magazine[i];

    if (note) {
      if (!stock[note]) {
        stock[note] = 0;
      }
      stock[note]--;
    }

    if (magazineLetter) {
      if (!stock[magazineLetter]) {
        stock[magazineLetter] = 0;
      }
      stock[magazineLetter]++;
    }
  }

  console.log(stock);

  return Object.values(stock).filter((qty) => qty < 0).length > 0
    ? false
    : true;
};

console.log(canConstruct("aa", "ab"));
console.log(canConstruct("aa", "aab"));
