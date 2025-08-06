
import { Text, View } from "react-native";
import { s } from "../App.style";

export function DisplaySentence({fullWordArray}){


return <>
<View style={s.displaySentenceContainer}>
<Text style={s.standardText}>S{fullWordArray[3]+" "+fullWordArray[4]+fullWordArray[5]}</Text>

</View>

</>

}