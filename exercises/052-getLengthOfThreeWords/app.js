function getLengthOfThreeWords(word1, word2, word3) {
  let wordLength1, wordLength2, wordLength3, wordsLength;
  wordLength1 = word1.length;
  wordLength2 = word2.length;
  wordLength3 = word3.length;

  wordsLength = wordLength1 + wordLength2 + wordLength3;
  return wordsLength;

}