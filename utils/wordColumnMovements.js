import {
  insertActors,
  insertFinalWord,
  insertVerbs,
  randomNumberGenerator,
} from "./makeWordArrays";

function spinColumn(
  numberOfRows,
  fullWordArray,
  setFullWordArray,
  rowLength,
  index,
  nudgesSpinsLeft,
  setNudgesSpinsLeft,
  setShowOutOfSpinsMessage
) {
  console.log("spinColumn running");
  console.log("spin column index", index);
  if (index === 0) {
    insertActors(numberOfRows, rowLength, fullWordArray, setFullWordArray);
  } else if (index === 1) {
    insertVerbs(numberOfRows, rowLength, fullWordArray, setFullWordArray);
  } else if (index === 2) {
    insertFinalWord(numberOfRows, rowLength, fullWordArray, setFullWordArray);
  }
  else if(index===5){
    insertActors(numberOfRows, rowLength, fullWordArray, setFullWordArray);
    insertVerbs(numberOfRows, rowLength, fullWordArray, setFullWordArray);
    insertFinalWord(numberOfRows, rowLength, fullWordArray, setFullWordArray);


  }if(index!=5){
  resetNudgesSpins(nudgesSpinsLeft, setNudgesSpinsLeft, setShowOutOfSpinsMessage)
  }
}


function prepareToShiftColumns({
  numberOfRows,
  rowLength,
  fullWordArray,
  setFullWordArray,
  index,
  verticalArray,
  setVerticalArray,
  wordList,
  removedWordsArrayAbove,
  setRemovedWordsArrayAbove,
  removedWordsArrayBelow,
  setRemovedWordsArrayBelow,
  columnOffset,
  direction,
  nudgesSpinsLeft,
  setNudgesSpinsLeft,
  showOutOfSpinsMessage,
  setShowOutOfSpinsMessage
}) {
  console.log("Shifting column at index:", index);
  let newFullWordArray = [...fullWordArray];
  resetNudgesSpins(nudgesSpinsLeft, setNudgesSpinsLeft, setShowOutOfSpinsMessage)

  // Build the vertical array
  for (let i = 0; i < numberOfRows; i++) {
    verticalArray.push(fullWordArray[i * rowLength + columnOffset]);
  }

  console.log("Original Vertical Array:", verticalArray);

 shiftColumn({
    numberOfRows,
    rowLength,
    fullWordArray,
    setFullWordArray,
    index,
    verticalArray,
    setVerticalArray,
    wordList,
    removedWordsArrayAbove,
    setRemovedWordsArrayAbove,
    removedWordsArrayBelow,
    setRemovedWordsArrayBelow,
    columnOffset,
    newFullWordArray,
    direction,
  }) 
}

function shiftColumn({
  numberOfRows,
  rowLength,
  fullWordArray,
  setFullWordArray,
  index,
  verticalArray,
  setVerticalArray,
  wordList,
  removedWordsArrayAbove,
  setRemovedWordsArrayAbove,
  removedWordsArrayBelow,
  setRemovedWordsArrayBelow,
  columnOffset,
  newFullWordArray,
  direction,
}) {
  const newWord = wordList[randomNumberGenerator(wordList)];
  console.log("newWord", newWord)
  let removedWord;

  if (direction === "up") {
    // Step 1: Add a word to bottom of verticalArray
    if (removedWordsArrayBelow.length > 0) {
      const wordFromBelow = removedWordsArrayBelow[removedWordsArrayBelow.length - 1];
      let newVerticalArray = [...verticalArray]
      newVerticalArray.push(wordFromBelow);
      setVerticalArray(newVerticalArray)
      setRemovedWordsArrayBelow(prev => prev.slice(0, -1));
    } else {
      verticalArray.push(newWord);
    }

    // Step 2: Remove top word and store it in removedWordsArrayAbove
    removedWord = verticalArray.shift(); // remove first element
    setRemovedWordsArrayAbove(prev => [...prev, removedWord]);

    console.log("Shifted UP");
    console.log("Removed word (top):", removedWord);
    console.log("Updated removedWordsArrayAbove:", [...removedWordsArrayAbove, removedWord]);

  } else if (direction === "down") {
    let newVerticalArray = [...verticalArray]
    // Step 1: Add a word to top of verticalArray
    if (removedWordsArrayAbove.length > 0) {
      const wordFromAbove = removedWordsArrayAbove[removedWordsArrayAbove.length - 1];
  
      newVerticalArray.unshift(wordFromAbove);
      setVerticalArray(newVerticalArray)
      setRemovedWordsArrayAbove(prev => prev.slice(0, -1));
    } else {
     verticalArray.unshift(newWord);
 
    }

    // Step 2: Remove bottom word and store it in removedWordsArrayBelow
    removedWord = verticalArray.pop(); // remove last element
    setRemovedWordsArrayBelow(prev => [...prev, removedWord]);

    console.log("Shifted DOWN");
    console.log("Removed word (bottom):", removedWord);
    console.log("Updated removedWordsArrayBelow:", [...removedWordsArrayBelow, removedWord]);
  }

  // Final step: Apply changes to full word array
  repopulateFullWordArrayWithShiftedColumns({
    numberOfRows,
    rowLength,
    fullWordArray,
    setFullWordArray,
    index,
    verticalArray,
    wordList,
    columnOffset,
    newFullWordArray,
  });
}


function repopulateFullWordArrayWithShiftedColumns({
  numberOfRows,
  rowLength,
  fullWordArray,
  setFullWordArray,
  index,
  verticalArray,
  wordList,
  removedWordsArray,
  columnOffset,
  newFullWordArray,
}) {
  // Rebuild the full word array (all fields)
  for (let i = 0; i < numberOfRows; i++) {
    newFullWordArray[i * rowLength + columnOffset] = verticalArray[i];
  }
  console.log("newFullWordArray!!!!", newFullWordArray)

  setFullWordArray([...newFullWordArray]);
  console.log("Updated Full Word Array:", newFullWordArray);
}

function resetNudgesSpins(nudgesSpinsLeft, setNudgesSpinsLeft, setShowOutOfSpinsMessage){
  console.log("RESETNUDGESPINS RUNNING")
  console.log("NUDGESPINSLEFT", nudgesSpinsLeft)
  if(nudgesSpinsLeft>0){
    // setNudgesSpinsLeft(prev=>prev-1)   readd
    }

}

export { prepareToShiftColumns, spinColumn };

