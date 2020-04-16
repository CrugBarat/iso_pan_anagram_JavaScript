const AnagramFinder = function (word) {
  this.word = word
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  return otherWords.filter((otherWord) => {
    return this.isAnagram(otherWord) && this.isDifferentWord(otherWord);
  });
}

AnagramFinder.prototype.isAnagram = function (otherWord) {
  return this.prepare(this.word) === this.prepare(otherWord);
}

AnagramFinder.prototype.isDifferentWord = function (otherWord) {
  return this.word.toLowerCase() !== otherWord.toLowerCase();
}

AnagramFinder.prototype.prepare = function (word) {
  return word.toLowerCase().split('').sort().join('');
}


//or

// const sortedWord = word => word.toLowerCase().split('').sort().join('')
//
// AnagramFinder.prototype.findAnagrams = function (otherWords) {
//   const splitWord = sortedWord(this.word);
//   const result = otherWords.filter((item) => {
//     let temp = sortedWord(item);
//     if (temp === splitWord && item !== this.word) {
//       return item
//     }
//   })
//   return result
// }

module.exports = AnagramFinder;
