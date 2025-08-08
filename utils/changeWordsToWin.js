

function changeWordsToWin(fullWordArray, setFullWordArray){
    console.log("change words to win running")
 
    changeWordsToWinFirstWord(fullWordArray, setFullWordArray)





    console.log("newFullWordArray", [...newFullWordArray])

    // setFullWordArray(newFullWordArray)
    // console.log("test")
  
    console.log("fullWordArray in changeWordsToWin", newFullWordArray)
    return fullWordArray
}
function changeWordsToWinFirstWord(fullWordArray, setFullWordArray){
setTimeout(() => {
    let newFullWordArray=[...fullWordArray]
    newFullWordArray[3]="WIN!"
    setFullWordArray(newFullWordArray)
    console.log("newfullWordArray, 1st  Win", fullWordArray)
    // return fullWordArray
}, 1000); 
changeWordsToWinSecondWord(newFullWordArray, setFullWordArray)
}

function changeWordsToWinSecondWord(newFullWordArray, setFullWordArray){
    setTimeout(() => {
        // let newFullWordArray=[...fullWordArray]
        newFullWordArray[4]="WIN!"
        setFullWordArray(newFullWordArray)
        // return fullWordArray
}, 2000); 
changeWordsToWinThirdWord(newFullWordArray, setFullWordArray)

}
function changeWordsToWinThirdWord(newFulllWordArray, setFullWordArray){
    setTimeout(() => {
        // let newFullWordArray=[...fullWordArray]
        newFullWordArray[5]="WIN!"
        setFullWordArray(newFullWordArray)
        // return fullWordArray
}, 3000); 
changeWordsToWinThirdWord(fullWordArray, setFullWordArray)
}

export { changeWordsToWin }

