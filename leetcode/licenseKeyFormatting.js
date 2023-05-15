/**
 * License Key Formatting
 *
 * You are given a license key represented as a string s that consists of only
 * alphanumeric characters and dashes. The string is separated into n + 1 groups
 * by n dashes. You are also given an integer k.
 *
 * We want to reformat the string s such that each group contains exactly k
 * characters, except for the first group, which could be shorter than k but
 * still must contain at least one character. Furthermore, there must be a dash
 * inserted between two groups, and you should convert all lowercase letters to
 * uppercase.
 *
 * Return the reformatted license key.
 *
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
  let modified = '';

  for (let char of s) {
      if (char === '-') continue;
      modified += char.toUpperCase();
  }

  let length = modified.length;
  let firstLength = length % k;
  let formatted = '';
  let i = 0;

  if (firstLength > 0) {
      formatted += modified.slice(0, firstLength);
      i = firstLength;
  }

  while (i < length) {
      if (formatted.length > 0) {
          formatted += '-';
      }
      formatted += modified.slice(i, i + k);
      i += k;
  }

  return formatted;
};