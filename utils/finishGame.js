import { spinAndReset } from "./resetRound";

function finishGame(){
    spinAndReset(setShowOutOfSpinsMessage, setActorWordsRemovedAbove, setVerbWordsRemovedAbove, setWordMixRemovedAbove, setActorWordsRemovedBelow, 
        setVerbWordsRemovedBelow, setWordMixRemovedBelow, setShowCorrectSentenceDisplay, setShowPointsMessage, setRoundsLeft, roundsLeft, setNudgesSpinsLeft,
        setCashButtonPressed
      )


}

export { finishGame };
