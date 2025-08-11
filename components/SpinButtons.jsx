import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { s } from "../App.style";
import { spinColumn } from "../utils/wordColumnMovements";

let verticalArrayActors = [];
let verticalArrayVerbs = [];
let verticalArrayWordMix = [];
let actorWordsRemoved = [];
let verbWordsRemoved = [];
let wordMixRemoved = [];


export function SpinButtons({
  rowLength,
  numberOfRows,
  fullWordArray,
  setFullWordArray,
  nudgesSpinsLeft,
  setNudgesSpinsLeft, 
  showOutOfSpinsMessage, 
  setShowOutOfSpinsMessage
}) {
  const [actorWordsRemovedAbove, setActorWordsRemovedAbove] = useState([]);
  const [verbWordsRemovedAbove, setVerbWordsRemovedAbove] = useState([]);
  const [wordMixRemovedAbove, setWordMixRemovedAbove] = useState([])
  const [actorWordsRemovedBelow, setActorWordsRemovedBelow] = useState([]);
  const [verbWordsRemovedBelow, setVerbWordsRemovedBelow] = useState([]);
  const [wordMixRemovedBelow, setWordMixRemovedBelow] = useState([])
  return (
    <>
      <View style={s.changeWordsButtonsContainerOuter}>
        {Array(rowLength)
          .fill()
          .map((_, index) => (
            <View key={index} style={s.changeWordsButtonsContainer}>
              {/* Spin Button */}
              <View style={s.spinButtonContainer}>
                <TouchableOpacity
                  onPress={() => {
                    nudgesSpinsLeft>0?
                    spinColumn(
                      numberOfRows,
                      fullWordArray,
                      setFullWordArray,
                      rowLength,
                      index,
                      nudgesSpinsLeft,
                      setNudgesSpinsLeft,
                      setShowOutOfSpinsMessage
                    )
                  :null}}
                  style={[s.changeWordsButton, s.spinButton]}
                >
                  <Text style={s.changeWordButtonText}>SPIN</Text>
                </TouchableOpacity>
              </View>

 
            </View>
          ))}
      </View>
    </>
  );
}
