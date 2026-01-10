import { Text, View } from "react-native";
import { s } from "../App.style";

export function Logo() {
  return (
    <>
      <View style={s.logoContainer}>
        <Text style={s.logo}>Grammarator</Text>
      </View>
    </>
  );
}
