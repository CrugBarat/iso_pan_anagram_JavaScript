const IsogramFinder = function (word) {
  this.word = word.split('')
}

IsogramFinder.prototype.uniqueLetters = function () {
  return uniqueLetters = [...new Set(this.word)];
}

IsogramFinder.prototype.isIsogram = function () {
  return this.uniqueLetters().length === this.word.length;
}

module.exports = IsogramFinder;
