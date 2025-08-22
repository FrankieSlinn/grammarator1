import { spinColumn } from "../utils/wordColumnMovements";

function resetRound(
  fullWordArray,
  setFullWordArray,
  rowLength,
  numberOfRows,
  cashButtonPressed,
  setCashButtonPressed,
  setShowCorrectSentenceDisplay,
  setShowPointsMessage,
  roundsLeft,
  setRoundsLeft,
  nudgesSpinsLeft,
  setNudgesSpinsLeft,
  setShowOutOfSpinsMessage,
  showFinishGameMessage,
  setShowFinishGameMessage,
  actorWordsRemovedAbove,
  setActorWordsRemovedAbove,
  verbWordsRemovedAbove,
  setVerbWordsRemovedAbove,
  wordMixRemovedAbove,
  setWordMixRemovedAbove,
  actorWordsRemovedBelow,
  setActorWordsRemovedBelow,
  verbWordsRemovedBelow,
  setVerbWordsRemovedBelow,
  wordMixRemovedBelow,
  setWordMixRemovedBelow,
  setShowNewGameButton,
  verticalArrayActors,
  setVerticalArrayActors,
  verticalArrayVerbs,
  setVerticalArrayVerbs, 
  verticalArrayWordMix, 
  setVerticalArrayWordMix,
  showCashButton,
  setShowCashButton



  
  
) {
  console.log("resetRound running");
  console.log("rounds left", roundsLeft)
  if (roundsLeft <= 1) {
    console.log("roundsLeft is 0 or less!!!!!!!");
    setShowFinishGameMessage(true);
    setShowNewGameButton(true);
  } else {
    setTimeout(() => {
      console.log("rounds Left should be over 0")
      setRoundsLeft((prevRounds) => prevRounds - 1);
      spinAndReset(setShowOutOfSpinsMessage, setActorWordsRemovedAbove, setVerbWordsRemovedAbove, setWordMixRemovedAbove, setActorWordsRemovedBelow, 
        setVerbWordsRemovedBelow, setWordMixRemovedBelow, setShowCorrectSentenceDisplay, setShowPointsMessage, setRoundsLeft, roundsLeft, nudgesSpinsLeft, setNudgesSpinsLeft,
        setCashButtonPressed, numberOfRows,fullWordArray, setFullWordArray, rowLength,
        verticalArrayActors,
        setVerticalArrayActors,
        verticalArrayVerbs,
        setVerticalArrayVerbs, 
        verticalArrayWordMix, 
        setVerticalArrayWordMix,
        showCashButton,
        setShowCashButton
      )

    }, 2000);
  }
}

function spinAndReset(setShowOutOfSpinsMessage, setActorWordsRemovedAbove, setVerbWordsRemovedAbove, setWordMixRemovedAbove, setActorWordsRemovedBelow, 
  setVerbWordsRemovedBelow, setWordMixRemovedBelow, setShowCorrectSentenceDisplay, setShowPointsMessage, setRoundsLeft, roundsLeft, nudgesSpinsLeft, setNudgesSpinsLeft,
  setCashButtonPressed, numberOfRows, fullWordArray, setFullWordArray, rowLength,
  verticalArrayActors,
  setVerticalArrayActors,
  verticalArrayVerbs,
  setVerticalArrayVerbs, 
  verticalArrayWordMix, 
  setVerticalArrayWordMix,
  showCashButton,
  setShowCashButton
){
  setShowOutOfSpinsMessage(false);
      setActorWordsRemovedAbove([]);
      setVerbWordsRemovedAbove([]);
      setWordMixRemovedAbove([]);
      setActorWordsRemovedBelow([]);
      setVerbWordsRemovedBelow([]);
      setWordMixRemovedBelow([]);
      setShowCorrectSentenceDisplay(false);
      setShowPointsMessage(false);
      setShowCashButton(true)
 
      setVerticalArrayActors([])
      setVerticalArrayVerbs([])
      setVerticalArrayWordMix([])

      setNudgesSpinsLeft(2);

      setCashButtonPressed(false);
      //logic for spin all columns when index ===5
      spinColumn(
        numberOfRows,
        fullWordArray,
        setFullWordArray,
        rowLength,
        5,
        nudgesSpinsLeft,
        setNudgesSpinsLeft,
        setShowOutOfSpinsMessage,
        roundsLeft
      );


}

export { resetRound, spinAndReset };


