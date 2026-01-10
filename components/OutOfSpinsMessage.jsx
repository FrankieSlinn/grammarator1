import { s } from "@/App.style.js";
import { React } from "react";
import { Text, View } from "react-native";

export function OutOfSpinsMessage({ gameScore, setGameScore }) {
  return (
    <>
      <View style={s.outOfSpinsMessageContainer}>
        <Text style={s.standardText}>You are out of moves for this round.</Text>
      </View>
    </>
  );
}
