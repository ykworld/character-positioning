var params = process.argv.slice(2).join('');

function countLetters(letters) {
  return letters.split('').reduce(function(result, letter, index) {
    result[letter] ? result[letter] += ", " + index.toString() : result[letter] = index.toString();
    return result;
  }, {});
};

console.log(countLetters(params));