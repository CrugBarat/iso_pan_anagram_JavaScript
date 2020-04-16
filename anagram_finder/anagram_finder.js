const AnagramFinder = function (word) {
  this.word = word
}

AnagramFinder.prototype.splitArg = function () {
  return this.word.toUpperCase().split('')
}

AnagramFinder.prototype.checkSame = function (otherWords) {
  const newArray = []
  for (word of otherWords) {
    if (word !== this.word) {
      newArray.push(word.toUpperCase());
    }
  }
  return newArray;
}

AnagramFinder.prototype.splitWords = function (otherWords) {
  const newArray = [];
  for (word of this.checkSame(otherWords)) {
    newArray.push(word.split(''));
  }
  return newArray;
}

AnagramFinder.prototype.checkSize = function (otherWords) {
  const newArray = []
  for (word of this.splitWords(otherWords)) {
    if (this.splitArg().length === word.length) {
      newArray.push(word);
    }
  }
  return newArray;
}

AnagramFinder.prototype.checkAnagrams = function (words) {
  const sizeCheckedWords = words;
  const word = this.splitArg();
  const result = sizeCheckedWords.filter(a => a.every(b => word.includes(b)));
  return result;
}

AnagramFinder.prototype.joinWords = function (result) {
  const newArray = [];
  for (word of result) {
    newArray.push(word.join(''));
  }
  return newArray;
}

AnagramFinder.prototype.revertCase = function (otherWords) {
  const newArray = []
  const upperWords = this.joinWords(this.checkAnagrams(this.checkSize(otherWords)));
  for (word1 of upperWords) {
    for (word2 of otherWords) {
      if (word2.toUpperCase() === word1) {
        newArray.push(word2);
      }
    }
  }
  return newArray;
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  const result = this.revertCase(otherWords);
  return result;
}

module.exports = AnagramFinder;
