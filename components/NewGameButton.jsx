
import { Text, TouchableOpacity, View } from "react-native";
import { s } from "../App.style";
import { resetRound } from "../utils/resetRound";

export function NewGameButton({cashButtonPressed, setCashButtonPressed, numberOfRows, fullWordArray, setFullWordArray, rowLength, 
}){

//Removes feedback message as to whether grammar was correct
    function resetCashButton(){
        console.log("resetting CashButton in NewRoundButton")
        setCashButtonPressed(false)
        console.log("cashButtonPressed in NewRoundButton", cashButtonPressed)
    }





return <>
<View style={s.newRoundContainer}>
<TouchableOpacity style={s.newRoundButton} onPress={()=>resetRound(fullWordArray, setFullWordArray, rowLength, cashButtonPressed, setCashButtonPressed)}>
    <Text style={s.word}>NEW ROUND</Text></TouchableOpacity>
</View>

</>

}