import { spinColumn } from "../utils/wordColumnMovements";

function resetRound(fullWordArray, setFullWordArray, rowLength, numberOfRows, cashButtonPressed, setCashButtonPressed, setShowCorrectSentenceDisplay,
    setShowPointsMessage, roundsLeft, setRoundsLeft, nudgesSpinsLeft, setNudgesSpinsLeft, setShowOutOfSpinsMessage
){
    console.log("resetRound running")
    setTimeout(() => {
        setShowCorrectSentenceDisplay(false)
        setShowPointsMessage(false)
        setRoundsLeft(prevRounds => prevRounds - 1);
        setNudgesSpinsLeft(2)

    setCashButtonPressed(false)
    //logic for spin all columns when index ===5
    spinColumn(  numberOfRows,
        fullWordArray,
        setFullWordArray,
        rowLength,
       5,
        nudgesSpinsLeft,
        setNudgesSpinsLeft,
        setShowOutOfSpinsMessage)
    }, 4000); 


}

export { resetRound };
