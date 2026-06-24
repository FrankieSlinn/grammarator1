import { getRightWords, randomActor } from "./createCorrectSentence";
import { actorList, shortVerbList, wordMix } from "./wordList";

function randomNumberGenerator(wordListType) {
  return Math.floor(Math.random() * wordListType.length);
}

function allocateWords(
  rowLength,
  numberOfRows,
  wordArrayPopulated,
  setWordArrayPopulated,
  fullWordArray,
  setFullWordArray,
  arrayCorrectWords,
  setArrayCorrectWords,
  correctWords, 
  setCorrectWords
) {
  console.log("rowLength", rowLength, "numberOfRows", numberOfRows);
  const arrayLength = rowLength * numberOfRows;
  console.log("arrayLength", arrayLength);
  const newWords = new Array(arrayLength).fill("X");
  console.log("new words", newWords);
   const rightWordsArray = getRightWords(randomActor, correctWords, setCorrectWords)
   console.log("@@@@@rightWordsArray", rightWordsArray)
const firstHalfRightWordsArray = rightWordsArray.slice(rightWordsArray.length / 2);
   const randomNumberForRightWords = randomNumberGenerator(firstHalfRightWordsArray)*2
   console.log("@@@@randomNumberForRightWords", randomNumberForRightWords)
   const rightWordsToUse = rightWordsArray.splice( randomNumberForRightWords, 2)
   console.log("@@@@@right words to use", rightWordsToUse)
   console.log("@@@@@revised rightWordsArray", rightWordsArray)


  console.log("newWords bing build", newWords);
  //     }
  setWordArrayPopulated(true);
  //   }
  insertHelpfulWords(
    numberOfRows,
    newWords,
    rowLength,
    fullWordArray,
    setFullWordArray,
    correctWords,
    setCorrectWords
  );
}
//Creates one correct sentence - eliminate 1 word for this for user to figure out. 
  //  const rightSentence = getRightWords(randomActor, correctWords, setCorrectWords);
  //  console.log("@@@@rightSentence", rightSentence)

//To make it easier to compile a sentence that is grammatically correct
function insertHelpfulWords(
  numberOfRows,
  newWords,
  rowLength,
  fullWordArray,
  setFullWordArray,
  correctWords,
  setCorrectWords
) {
  // Insert actor word at the beginning of a random row

  console.log("new words in insertHelpfulwrods", newWords);
  console.log("@@@@correctWords in insertHelpfulWirds", correctWords)
  insertActors(numberOfRows, rowLength, newWords, setFullWordArray);
  insertVerbs(numberOfRows, rowLength, newWords, setFullWordArray);
  insertFinalWord(numberOfRows, rowLength, newWords, setFullWordArray);

  console.log("Final word array:", newWords);
  setFullWordArray(newWords);
  return newWords;
}

function insertActors(numberOfRows, rowLength, newWords, setFullWordArray) {
  console.log("insert actors running");

  if (rowLength === 3) {
    console.log("rowlength ===3");
    for (let i = 0; i < numberOfRows; i++) {
      let newActor = actorList[randomNumberGenerator(actorList)];
      console.log("new actor", newActor);
      newWords[i * rowLength] = newActor;
      console.log("newWords after actor inserted", newWords);
      setFullWordArray([...newWords]);
    }
  }
}

function insertVerbs(numberOfRows, rowLength, newWords, setFullWordArray) {
  console.log("insert verbs running");
  for (let i = 0; i < numberOfRows; i++) {
    let newVerb = shortVerbList[randomNumberGenerator(shortVerbList)];

    newWords[i * rowLength + 1] = newVerb;

    setFullWordArray([...newWords]);
  }
}

function insertFinalWord(numberOfRows, rowLength, newWords, setFullWordArray) {
  console.log("insert final word running");
  for (let i = 0; i < numberOfRows; i++) {
    // let newVerb = shortVerbList[randomNumberGenerator(shortVerbList)];
    let newMixWord = wordMix[randomNumberGenerator(wordMix)];
    // newWords[i*rowLength+1]=newVerb;
    newWords[i * rowLength + 2] = newMixWord;
    setFullWordArray([...newWords]);
  }
}



function makeWordArrays(
        rowLength,
        numberOfRows,
        wordArrayPopulated,
        setWordArrayPopulated,
        fullWordArray,
        setFullWordArray,
        arrayCorrectWords,
        setArrayCorrectWords,
        correctWords,
        setCorrectWords
) {
  const newWordArray = allocateWords(
  rowLength,
  numberOfRows,
  wordArrayPopulated,
  setWordArrayPopulated,
  fullWordArray,
  setFullWordArray,
  arrayCorrectWords,
  setArrayCorrectWords,
  correctWords, 
  setCorrectWords
  );
}

export {
  insertActors,
  insertFinalWord,
  insertVerbs,
  makeWordArrays,
  randomNumberGenerator
};

