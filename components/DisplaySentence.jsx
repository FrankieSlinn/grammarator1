import { Text, View } from "react-native";
import { s } from "../App.style";

export function DisplaySentence({ correctSentenceDisplay }) {
  return (
    <>
      <View style={s.displaySentenceContainer}>
        <Text style={s.standardText}>{correctSentenceDisplay}</Text>
      </View>
    </>
  );
}
