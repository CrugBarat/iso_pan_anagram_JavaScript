const IsogramFinder = function (word) {
  this.word = word.split('')
}

IsogramFinder.prototype.uniqueLetters = function () {
  return uniqueLetters = [...new Set(this.word)];
}

IsogramFinder.prototype.isIsogram = function () {
  return this.uniqueLetters().length === this.word.length;
}

//or

// IsogramFinder.prototype.isIsogram = function () {
//   return this.word.split('').every(letter => this.isUnique(letter));
// }
//
// IsogramFinder.prototype.isUnique = function (letter) {
//   return this.word.indexOf(letter) === this.word.lastIndexOf(letter);
// }

module.exports = IsogramFinder;
