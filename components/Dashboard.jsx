
import { Text, View } from "react-native";
import { s } from "../App.style";

export function Dashboard({gameScore, roundsLeft, nudgesSpinsLeft}){


return <>
<View style={s.dashboardContainer}>
<Text style={s.standardText}>Score: {gameScore??0}</Text>
<Text style={s.standardText}>Rounds: 1/{roundsLeft}</Text>
<Text style={s.standardText}>Nudges / Spins: 2/{nudgesSpinsLeft}</Text>
</View>

</>

}