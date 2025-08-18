
import { Text, TouchableOpacity, View } from "react-native";
import { s } from "../App.style";
import { finishGame } from "../utils/finishGame";

export function NewGameButton({setShowOutOfSpinsMessage, setActorWordsRemovedAbove, setVerbWordsRemovedAbove, setWordMixRemovedAbove, setActorWordsRemovedBelow, 
    setVerbWordsRemovedBelow, setWordMixRemovedBelow, setShowCorrectSentenceDisplay, setShowPointsMessage, setRoundsLeft, roundsLeft,nudgesSpinsLeft, setNudgesSpinsLeft,
    setCashButtonPressed, numberOfRows, fullWordArray, setFullWordArray, rowLength, 
}){



return <>
<View style={s.newRoundContainer}>
<TouchableOpacity style={s.newRoundButton} onPress={()=>finishGame(setShowOutOfSpinsMessage, setActorWordsRemovedAbove, setVerbWordsRemovedAbove, setWordMixRemovedAbove, 
setActorWordsRemovedBelow, 
        setVerbWordsRemovedBelow, setWordMixRemovedBelow, setShowCorrectSentenceDisplay, setShowPointsMessage, setRoundsLeft, roundsLeft, nudgesSpinsLeft, 
        setNudgesSpinsLeft,
        numberOfRows, fullWordArray, setFullWordArray, rowLength
        )}>
    <Text style={s.word}>NEW GAME</Text></TouchableOpacity>
</View>

</>

}