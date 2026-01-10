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
  setShowOutOfSpinsMessage,
  roundsLeft,
) {
  console.log("spinColumn running");
  console.log("spin column index", index);
  console.log("roundsLeft in SPINCOLUMN", roundsLeft);
  if (roundsLeft > 0) {
    console.log("Rounds Left Over 1!");
    if (index === 0) {
      insertActors(numberOfRows, rowLength, fullWordArray, setFullWordArray);
    } else if (index === 1) {
      insertVerbs(numberOfRows, rowLength, fullWordArray, setFullWordArray);
    } else if (index === 2) {
      insertFinalWord(numberOfRows, rowLength, fullWordArray, setFullWordArray);
    } else if (index === 5) {
      insertActors(numberOfRows, rowLength, fullWordArray, setFullWordArray);
      insertVerbs(numberOfRows, rowLength, fullWordArray, setFullWordArray);
      insertFinalWord(numberOfRows, rowLength, fullWordArray, setFullWordArray);
    }
    if (index != 5) {
      resetNudgesSpins(
        nudgesSpinsLeft,
        setNudgesSpinsLeft,
        setShowOutOfSpinsMessage,
      );
    }
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
  //columnOffeset = index
  columnOffset,
  direction,
  nudgesSpinsLeft,
  setNudgesSpinsLeft,
  showOutOfSpinsMessage,
  setShowOutOfSpinsMessage,
  roundsLeft,
}) {
  console.log("Shifting column at index:", index);
  if (roundsLeft > 0) {
    let newFullWordArray = [...fullWordArray];
    //set amount of nudge back to original amount.
    resetNudgesSpins(
      nudgesSpinsLeft,
      setNudgesSpinsLeft,
      setShowOutOfSpinsMessage,
    );

    // Build the vertical array
    for (let i = 0; i < numberOfRows; i++) {
      //verticalArray is wordlist for which nudge button pressed. The below function should create a list of 3 words
      //displayed in the column.
      if (verticalArray.length < numberOfRows) {
        verticalArray.push(fullWordArray[i * rowLength + columnOffset]);
      }
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
    });
  }
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
  console.log("newWord", newWord);
  // let removedWord;
  let newVerticalArray = [...verticalArray];
  if (direction === "up") {
    console.log("-------FUNCTION FOR UP NUDGE BUTTON RUNNING");
    console.log(
      "--------!!!removedWordsArrayBelow at start:",
      removedWordsArrayBelow,
    );

    // Always start from a fresh copy
    restoreWordPrevRemovedFromBottom(removedWordsArrayBelow, setRemovedWordsArrayBelow, newVerticalArray, newWord)

    console.log("---------newVerticalArray after adding bottom word:", [
      ...newVerticalArray,
    ]);
    // STEP 2: Capture top word WITHOUT removing it
    // need to remove top words and add it to the array of removed words above
    //Define word to be removed
    const removedWord = newVerticalArray[0];
    //Add word to array of words removed on top
    setRemovedWordsArrayAbove((prev) => [...prev, removedWord]);

    // STEP 3: Remove top word for the shifted column
    newVerticalArray = newVerticalArray.slice(1);

    setVerticalArray(newVerticalArray);
        console.log("Removed word (top):", removedWord);
        //Do this to ensure the full array can be rebuilt without react timing issues
    verticalArray = newVerticalArray;


    console.log("Shifted UP");

    console.log("Final vertical array:", [...newVerticalArray]);


  } else if (direction === "down") {
    console.log("--------FUNCTION FOR DOWN NUDGE BUTTON RUNNING");

    //If no words were previously removed from array
    if (removedWordsArrayAbove.length > 0) {
      // word to restore from above
      const wordFromAbove =
        removedWordsArrayAbove[removedWordsArrayAbove.length - 1];
      console.log("wordFromAbove to be restored:", wordFromAbove);

      newVerticalArray.unshift(wordFromAbove);
      console.log(
        "---------newVerticalArray after word from above added",
        newVerticalArray,
      );
      //Add word to array of words removed on bottom
      setRemovedWordsArrayBelow((prev) => [...prev, wordFromAbove]);
      console.log("removedWordsArrayBelow :", removedWordsArrayAbove);
    } else {
      newVerticalArray.unshift(newWord);
      console.log(
        "------verticalArray no words removed, new word added to bottom:",
        newVerticalArray,
      );
    }
    console.log(
      "newVerticalArray[newVerticalArray.length  -1]",
      newVerticalArray[newVerticalArray.length - 1],
    );
    const wordToAddToremovedWordsArrayBelow =
      newVerticalArray[newVerticalArray.length - 1];
    setRemovedWordsArrayBelow((prev) => [
      ...prev,
      wordToAddToremovedWordsArrayBelow,
    ]);

    newVerticalArray.pop();
    setVerticalArray(newVerticalArray);

    console.log(
      "-----verticalArray after popped last element----",
      newVerticalArray,
    );
    verticalArray = newVerticalArray;
    console.log(
      "vertical array after resset before rebuild fullWordArray",
      verticalArray,
    );

    console.log("-----New vertical array after down", verticalArray);
    console.log("------removedWordsArrayBelow :", removedWordsArrayBelow);
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
  console.log("!!!----FUNCTION FOR Rebulding full word array running");
  for (let i = 0; i < numberOfRows; i++) {
    newFullWordArray[i * rowLength + columnOffset] = verticalArray[i];
  }
  console.log("newFullWordArray!!!!", newFullWordArray);

  setFullWordArray([...newFullWordArray]);
  console.log("Updated Full Word Array:", newFullWordArray);
}

function restoreWordPrevRemovedFromBottom(removedWordsArrayBelow, setRemovedWordsArrayBelow,newVerticalArray, newWord) {
      // STEP 1: If word previously removed from bottom, restore it
    if (removedWordsArrayBelow.length > 0) {
      //capture word to be removed from array of removed if user clicked down first
      const wordFromBelow =
        removedWordsArrayBelow[removedWordsArrayBelow.length - 1];
      //Restore previously removed word to array
      newVerticalArray.push(wordFromBelow);

      // remove LAST element from array of previously removed words immutably
      setRemovedWordsArrayBelow((prev) => prev.slice(0, 0));
    } else {
      newVerticalArray.push(newWord);
    }
}






function resetNudgesSpins(
  nudgesSpinsLeft,
  setNudgesSpinsLeft,
  setShowOutOfSpinsMessage,
) {
  console.log("RESETNUDGESPINS RUNNING");
  console.log("NUDGESPINSLEFT", nudgesSpinsLeft);
  if (nudgesSpinsLeft > 0) {
    setNudgesSpinsLeft((prev) => prev - 1);
  }
}








export { prepareToShiftColumns, spinColumn };
