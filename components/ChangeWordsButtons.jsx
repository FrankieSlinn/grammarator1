import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { s } from "../App.style";
import { prepareToShiftColumns, spinColumn } from "../utils/wordColumnMovements";
import { actorList, verbList, wordMix } from "../utils/wordList";
let verticalArrayActors = [];
let verticalArrayVerbs = [];
let verticalArrayWordMix = [];
let actorWordsRemoved = [];
let verbWordsRemoved = [];
let wordMixRemoved = [];


export function ChangeWordsButtons({
  rowLength,
  numberOfRows,
  fullWordArray,
  setFullWordArray,
  nudgesSpinsLeft,
  setNudgesSpinsLeft
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
                    spinColumn(
                      numberOfRows,
                      fullWordArray,
                      setFullWordArray,
                      rowLength,
                      index, 
                      nudgesSpinsLeft,
                      setNudgesSpinsLeft
                    );
                  }}
                  style={[s.changeWordsButton, s.spinButton]}
                >
                  <Text style={s.changeWordButtonText}>SPIN</Text>
                </TouchableOpacity>
              </View>

              {/* Nudge Buttons */}
              <View style={s.nudgeButtonContainer}>
                <View style={s.nudgeButtonDown}>
                  <TouchableOpacity
                    onPress={() => {
                      prepareToShiftColumns({
                        numberOfRows,
                        rowLength,
                        fullWordArray,
                        setFullWordArray,
                        index,
                        verticalArray:
                          index === 0
                            ? verticalArrayActors
                            : index===1?verticalArrayVerbs: verticalArrayWordMix,
                        wordList: index === 0 ? actorList : index===1?verbList: wordMix,
                        removedWordsArrayAbove:
                          index === 0 ? actorWordsRemovedAbove : index===1?verbWordsRemovedAbove: wordMixRemovedAbove,
                          setRemovedWordsArrayAbove:
                          index === 0 ? setActorWordsRemovedAbove : index===1?setVerbWordsRemovedAbove: setWordMixRemovedAbove,
                          removedWordsArrayBelow:
                          index === 0 ? actorWordsRemovedBelow : index===1?verbWordsRemovedBelow: wordMixRemovedBelow,
                          setRemovedWordsArrayBelow:
                          index === 0 ? setActorWordsRemovedBelow : index===1?setVerbWordsRemovedBelow: setWordMixRemovedBelow,
                        columnOffset: index,
                        direction: "up",
                        nudgesSpinsLeft, setNudgesSpinsLeft
                      });
                    }}
                    style={[s.nudgeButton, s.changeWordsButton]}
                  >
                    <Text style={s.changeWordButtonText}>1 </Text>
                    <Ionicons name="arrow-up-outline" style={s.arrowIcon} />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity 
                 onPress={() => {
                  prepareToShiftColumns({
                    numberOfRows,
                    rowLength,
                    fullWordArray,
                    setFullWordArray,
                    index,
                    verticalArray:
                      index === 0
                        ? verticalArrayActors
                        : index===1?verticalArrayVerbs: verticalArrayWordMix,
                    wordList: index === 0 ? actorList : index===1?verbList: wordMix,
                    removedWordsArrayAbove:
                    index === 0 ? actorWordsRemovedAbove : index===1?verbWordsRemovedAbove: wordMixRemovedAbove,
                    setRemovedWordsArrayAbove:
                    index === 0 ? setActorWordsRemovedAbove : index===1?setVerbWordsRemovedAbove: setWordMixRemovedAbove,
                    removedWordsArrayBelow:
                    index === 0 ? actorWordsRemovedBelow : index===1?verbWordsRemovedBelow: wordMixRemovedBelow,
                    setRemovedWordsArrayBelow:
                    index === 0 ? setActorWordsRemovedBelow : index===1?setVerbWordsRemovedBelow: setWordMixRemovedBelow,
                    columnOffset: index,
                    direction: "down",
                    nudgesSpinsLeft, setNudgesSpinsLeft
                  });
                }}
                
                style={[s.nudgeButton, s.changeWordsButton]}>
                  <Text style={s.changeWordButtonText}>1 </Text>
                  <Ionicons name="arrow-down-outline" style={s.arrowIcon} />
                </TouchableOpacity>
              </View>
            </View>
          ))}
      </View>
    </>
  );
}
