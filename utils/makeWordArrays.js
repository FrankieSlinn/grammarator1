import { actorList, shortVerbList, wordMix } from "./wordList";

function randomNumberGenerator(dataType) {
  return Math.floor(Math.random() * dataType.length);
}

function allocateWords(
  rowLength,
  numberOfRows,
  wordArrayPopulated,
  setWordArrayPopulated,
  fullWordArray,
  setFullWordArray,
) {
  console.log("rowLength", rowLength, "numberOfRows", numberOfRows);
  const arrayLength = rowLength * numberOfRows;
  console.log("arrayLength", arrayLength);
  const newWords = new Array(arrayLength).fill("X");
  console.log("new words", newWords);

  //   const newWords = [];

  //   console.log("rowLength * numberOfRows", rowLength * numberOfRows);
  // //populate initial word list
  //   if (wordArrayPopulated === false) {
  //     while (newWords.length < rowLength * numberOfRows) {
  //       console.log("while loop for words running");
  //       const randomWord = wordList[randomNumberGenerator(wordList)];
  //       console.log("randomWord", randomWord);
  //       newWords.push(randomWord);
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
  );
}

//To make it easier to compile a sentence that is grammatically correct
function insertHelpfulWords(
  numberOfRows,
  newWords,
  rowLength,
  fullWordArray,
  setFullWordArray,
) {
  // Insert actor word at the beginning of a random row

  console.log("new words in insertHelpfulwrods", newWords);
  insertActors(numberOfRows, rowLength, newWords, setFullWordArray);
  insertVerbs(numberOfRows, rowLength, newWords, setFullWordArray);
  insertFinalWord(numberOfRows, rowLength, newWords, setFullWordArray);

  //Insert one adverb 2nd field of random row
  // const randomRowIndexAdverb1 = randomNumberGenerator(new Array(numberOfRows));
  // let randomRowIndexGerund1;
  // do {
  //   randomRowIndexGerund1 = randomNumberGenerator(new Array(numberOfRows));
  // } while (randomRowIndexAdverb1 === randomRowIndexGerund1);

  // const adverbWord = adverbList[randomNumberGenerator(adverbList)];
  // const gerundWord=gerundList[[randomNumberGenerator(gerundList)]]

  // console.log("adverbWord", adverbWord);
  // newWords[randomRowIndexAdverb1 * rowLength + 2] = adverbWord;
  // newWords[randomRowIndexGerund1 * rowLength+2] = gerundWord;

  console.log("Final word array:", newWords);
  setFullWordArray(newWords);
  return newWords;
}

function insertActors(numberOfRows, rowLength, newWords, setFullWordArray) {
  console.log("insert actors running");
  // const actorWord1 = actorList[randomNumberGenerator(actorList)];
  //   const actorWord2 = actorList[randomNumberGenerator(actorList)];
  //   const actorWord3 = actorList[randomNumberGenerator(actorList)];
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

// function insertActors(numberOfRows, rowLength, newWords) {
//   //select a random row to insert word into
//   const randomRowIndexActor1 = randomNumberGenerator(new Array(numberOfRows));
//   //select a second random row (different from the first) to insert word into
//   let randomRowIndexActor2;

//   do {
//     randomRowIndexActor2 = randomNumberGenerator(new Array(numberOfRows));
//   } while (randomRowIndexActor2 === randomRowIndexActor1);

//   let randomRowIndexActor3;
//   do {
//     randomRowIndexActor3 = randomNumberGenerator(new Array(numberOfRows));
//   } while (randomRowIndexActor3 === randomRowIndexActor2);

//   const actorWord1 = actorList[randomNumberGenerator(actorList)];
//   const actorWord2 = actorList[randomNumberGenerator(actorList)];
//   const actorWord3 = actorList[randomNumberGenerator(actorList)];
//   console.log("actorWord1", actorWord1);
//   console.log("actorWord2", actorWord2);
//   console.log("actorWord3", actorWord3);
//   console.log("randomRowIndexActor1", randomRowIndexActor1);
//   console.log(
//     "randomRowIndexActor1 * rowLength",
//     randomRowIndexActor1 * rowLength
//   );
//   newWords[randomRowIndexActor1 * rowLength] = actorWord1;
//   newWords[randomRowIndexActor2 * rowLength] = actorWord2;
//   newWords[randomRowIndexActor3 * rowLength] = actorWord3;
//   console.log("newWords after actor insert", newWords);
// // }
// function insertVerbs(numberOfRows, rowLength, newWords) {
//   //Insert verb 2nd field of random row -
//   //This chooses random row
//   const randomRowIndexVerb1 = randomNumberGenerator(new Array(numberOfRows));
//   let randomRowIndexVerb2;
//   do {
//     randomRowIndexVerb2 = randomNumberGenerator(new Array(numberOfRows));
//   } while (randomRowIndexVerb2 === randomRowIndexVerb1);
//   let randomRowIndexVerb3;
//   do {
//     randomRowIndexVerb3 = randomNumberGenerator(new Array(numberOfRows));
//   } while (
//     randomRowIndexVerb2 === (randomRowIndexVerb1 || randomRowIndexVerb2)
//   );
//   const verbWord1 = verbList[randomNumberGenerator(verbList)];
//   const verbWord2 = verbList[randomNumberGenerator(verbList)];
//   const verbWord3 = beingVerbList[randomNumberGenerator(beingVerbList)];
//   console.log("randomRowIndexVerb1", randomRowIndexVerb1);
//   console.log("verbWrod", verbWord1);
//   //Insert verb into correct row / position
//   newWords[randomRowIndexVerb1 * rowLength + 1] = verbWord1;
//   newWords[randomRowIndexVerb2 * rowLength + 1] = verbWord2;
//   newWords[randomRowIndexVerb3 * rowLength + 1] = verbWord3;
//   console.log("newWords after verb insert", newWords);
// }

function makeWordArrays(
  rowLength,
  numberOfRows,
  wordArrayPopulated,
  setWordArrayPopulated,
  fullWordArray,
  setFullWordArray,
) {
  const newWordArray = allocateWords(
    rowLength,
    numberOfRows,
    wordArrayPopulated,
    setWordArrayPopulated,
    fullWordArray,
    setFullWordArray,
  );
}

export {
  insertActors,
  insertFinalWord,
  insertVerbs,
  makeWordArrays,
  randomNumberGenerator,
};
