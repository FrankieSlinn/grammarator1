import { Text, View } from "react-native";
import { s } from "../App.style";

export function Dashboard({ gameScore, roundsLeft, nudgesSpinsLeft }) {
  return (
    <>
      <View style={s.dashboardContainer}>
        <Text style={s.standardText}>Score: {gameScore ?? 0}</Text>
        <Text style={s.standardText}>Rounds: {11 - roundsLeft}/10</Text>
        <Text style={s.standardText}>Moves: {nudgesSpinsLeft}/2</Text>
      </View>
    </>
  );
}
