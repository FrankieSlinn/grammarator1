

function changeWordsToWin(fullWordArray, setFullWordArray){
    console.log("change words to win running")
    let newFullWordArray=[...fullWordArray]

    newFullWordArray[3]="WIN!"
    newFullWordArray[4]="WIN!"
    newFullWordArray[5]="WIN!"
    console.log("newFullWordArray", [...newFullWordArray])

    setFullWordArray(newFullWordArray)
    console.log("test")
  
    console.log("fullWordArray in changeWordsToWin", newFullWordArray)
    return newFullWordArray





}

export { changeWordsToWin }

