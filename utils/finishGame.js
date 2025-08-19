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
setShowNewGameButton){
    spinAndReset(setShowOutOfSpinsMessage, setActorWordsRemovedAbove, setVerbWordsRemovedAbove, setWordMixRemovedAbove, setActorWordsRemovedBelow, 
      setVerbWordsRemovedBelow, setWordMixRemovedBelow, setShowCorrectSentenceDisplay, setShowPointsMessage, setRoundsLeft, roundsLeft, nudgesSpinsLeft, setNudgesSpinsLeft,
      setCashButtonPressed, numberOfRows,fullWordArray, setFullWordArray, rowLength,
      verticalArrayActors,
      setVerticalArrayActors,
      verticalArrayVerbs,
      setVerticalArrayVerbs, 
      verticalArrayWordMix, 
      setVerticalArrayWordMix
      )
      setShowNewGameButton(false)
      setGameScore(0)
      setShowFinishGameMessage(false)
      setRoundsLeft(10)


}

export { finishGame };
