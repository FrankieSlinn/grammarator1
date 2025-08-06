
import { Text, TouchableOpacity, View } from "react-native";
import { s } from "../App.style";
import { spinColumn } from "../utils/wordColumnMovements";

export function NewRoundButton({cashButtonPressed, setCashButtonPressed, numberOfRows, fullWordArray, setFullWordArray, rowLength, individualButtonLocked, 
    setIndividualButtonLocked
}){

//Removes feedback message as to whether grammar was correct
    function resetCashButton(){
        console.log("resetting CashButton in NewRoundButton")
        setCashButtonPressed(false)
        console.log("cashButtonPressed in NewRoundButton", cashButtonPressed)
    }

    // function resetButtonLocked(){
    //     console.log("resetting wor buttons to unlocked")
    //     setIndividualButtonLocked(false)
    //     // console.log("cashButtonPressed in NewRoundButton", cashButtonPressed)
    // }



return <>
<View style={s.newRoundContainer}>
<TouchableOpacity style={s.newRoundButton} onPress={()=>[resetCashButton(), spinColumn(numberOfRows,
  fullWordArray,
  setFullWordArray,
  rowLength,
 5)]}><Text style={s.word}>NEW ROUND</Text></TouchableOpacity>
</View>

</>

}