import { spinColumn } from "../utils/wordColumnMovements";

function resetRound(fullWordArray, setFullWordArray, rowLength, numberOfRows, cashButtonPressed, setCashButtonPressed, setShowCorrectSentenceDisplay,
    setShowPointsMessage
){
    console.log("resetRound running")
    setTimeout(() => {
        setShowCorrectSentenceDisplay(false)
        setShowPointsMessage(false)

    setCashButtonPressed(false)
    spinColumn(numberOfRows,
        fullWordArray,
        setFullWordArray,
        rowLength,
       5)
    }, 5000); 


}

export { resetRound };
