
//Sets Word Buttons to read "WIN" after Cash button pressed - Correct Grammar. 
function changeWordsToWin(fullWordArray, setFullWordArray) {
  console.log("change words to win running");

  changeWordsToWinFirstWord(fullWordArray, setFullWordArray);




  return fullWordArray;
}
function changeWordsToWinFirstWord(fullWordArray, setFullWordArray) {
  const newFullWordArray = [...fullWordArray];
  setTimeout(() => {

    newFullWordArray[3] = "WIN!";
    setFullWordArray(newFullWordArray);
    console.log("newfullWordArray, 1st  Win", fullWordArray);
    // return fullWordArray
  }, 1000);
  changeWordsToWinSecondWord(newFullWordArray, setFullWordArray);
}

function changeWordsToWinSecondWord(newFullWordArray, setFullWordArray) {
  setTimeout(() => {
    // let newFullWordArray=[...fullWordArray]
    newFullWordArray[4] = "WIN!";
    setFullWordArray(newFullWordArray);
    // return fullWordArray
  }, 2000);
  changeWordsToWinThirdWord(newFullWordArray, setFullWordArray);
}
function changeWordsToWinThirdWord(newFulllWordArray, setFullWordArray) {
  setTimeout(() => {
    // let newFullWordArray=[...fullWordArray]
    newFullWordArray[5] = "WIN!";
    setFullWordArray(newFullWordArray);
    // return fullWordArray
  }, 3000);
  changeWordsToWinThirdWord(fullWordArray, setFullWordArray);
}

export { changeWordsToWin };
