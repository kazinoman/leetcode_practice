/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLastWord = function (s) {
// };

const lengthOfLastWord = (s) => s.trim().split(" ").at(-1).length;
console.log(lengthOfLastWord("   fly me   to   the moon  "));
