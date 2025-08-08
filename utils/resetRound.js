import { spinColumn } from "../utils/wordColumnMovements";

function resetRound(fullWordArray, setFullWordArray, rowLength, numberOfRows, cashButtonPressed, setCashButtonPressed, setShowCorrectSentenceDisplay,
    setShowPointsMessage, roundsLeft, setRoundsLeft
){
    console.log("resetRound running")
    setTimeout(() => {
        setShowCorrectSentenceDisplay(false)
        setShowPointsMessage(false)
        setRoundsLeft(prevRounds => prevRounds - 1);

    setCashButtonPressed(false)
    spinColumn(numberOfRows,
        fullWordArray,
        setFullWordArray,
        rowLength,
       5)
    }, 5000); 


}

export { resetRound };
