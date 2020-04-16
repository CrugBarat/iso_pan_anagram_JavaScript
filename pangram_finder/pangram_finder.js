const PangramFinder = function (phrase) {
  this.phrase = phrase.toLowerCase().split('');
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
}

PangramFinder.prototype.isPangram = function () {
  for (letter of this.alphabet) {
    if (this.phrase.includes(letter) === false) {
      return false;
    }
  }
  return true;
}

module.exports = PangramFinder;
