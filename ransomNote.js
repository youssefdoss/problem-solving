/**
 * Ransom Note
 *
 * Given two strings ransomNote and magazine, return true if ransomNote can be
 * constructed by using the letters from magazine and false otherwise.
 *
 * Each letter in magazine can only be used once in ransomNote.
 *
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  if (magazine.length < ransomNote) return false;

  ransomChars = {};
  magazineChars = {};

  for (let char of ransomNote) {
      ransomChars[char] = (ransomChars[char] || 0) + 1;
  }

  for (let char of magazine) {
      magazineChars[char] = (magazineChars[char] || 0) + 1;
  }

  for (let char in ransomChars) {
      if (ransomChars[char] > magazineChars[char] || !magazineChars[char]) return false;
  }

  return true;
};