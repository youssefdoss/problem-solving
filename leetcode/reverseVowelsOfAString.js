/**
 * Reverse Vowels of a String
 *
 * Given a string s, reverse only all the vowels in the string and return it.
 *
 * The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower
 * and upper cases, more than once.
 *
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  let vowelsSeen = [];
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let sSplit = s.split('');

  for (let char of sSplit) {
      if (vowels.includes(char)) vowelsSeen.push(char);
  }

  for (let i = 0; i < sSplit.length; i++) {
      if (vowels.includes(sSplit[i])) sSplit[i] = vowelsSeen.pop();
  }

  return sSplit.join('');
};