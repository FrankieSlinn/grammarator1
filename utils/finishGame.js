import { spinAndReset } from "./resetRound";

function finishGame(setShowOutOfSpinsMessage, setActorWordsRemovedAbove, setVerbWordsRemovedAbove, setWordMixRemovedAbove, setActorWordsRemovedBelow, 
  setVerbWordsRemovedBelow, setWordMixRemovedBelow, setShowCorrectSentenceDisplay, setShowPointsMessage, setRoundsLeft, roundsLeft, nudgesSpinsLeft, setNudgesSpinsLeft,
  setCashButtonPressed, numberOfRows,fullWordArray, setFullWordArray, rowLength,
  verticalArrayActors,
  setVerticalArrayActors,
  verticalArrayVerbs,
  setVerticalArrayVerbs, 
  verticalArrayWordMix, 
  setVerticalArrayWordMix,
  gameScore,
  setGameScore,
  showFinishGameMessage,
  setShowFinishGameMessage,
setShowNewGameButton, showCashButton, setShowCashButton){
  console.log("finish game button pressed!!!!!")
    spinAndReset(setShowOutOfSpinsMessage, setActorWordsRemovedAbove, setVerbWordsRemovedAbove, setWordMixRemovedAbove, setActorWordsRemovedBelow, 
      setVerbWordsRemovedBelow, setWordMixRemovedBelow, setShowCorrectSentenceDisplay, setShowPointsMessage, setRoundsLeft, roundsLeft, nudgesSpinsLeft, setNudgesSpinsLeft,
      setCashButtonPressed, numberOfRows,fullWordArray, setFullWordArray, rowLength,
      verticalArrayActors,
      setVerticalArrayActors,
      verticalArrayVerbs,
      setVerticalArrayVerbs, 
      verticalArrayWordMix, 
      setVerticalArrayWordMix,
      showCashButton, setShowCashButton
      )
      setShowNewGameButton(false)
      setGameScore(0)
      setShowFinishGameMessage(false)
      setRoundsLeft(10)


}

export { finishGame };
