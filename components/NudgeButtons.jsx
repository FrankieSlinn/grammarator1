import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { s } from "../App.style";
import { prepareToShiftColumns } from "../utils/wordColumnMovements";
import { actorList, verbList, wordMix } from "../utils/wordList";

let verticalArrayActors = [];
let verticalArrayVerbs = [];
let verticalArrayWordMix = [];

export function NudgeButtons({
  rowLength,
  numberOfRows,
  fullWordArray,
  setFullWordArray,
  nudgesSpinsLeft,
  setNudgesSpinsLeft,
  showOutOfSpinsMessage,
  setShowOutOfSpinsMessage,
  actorWordsRemovedAbove,
  setActorWordsRemovedAbove,
  verbWordsRemovedAbove,
  setVerbWordsRemovedAbove,
  wordMixRemovedAbove,
  setWordMixRemovedAbove,
  actorWordsRemovedBelow,
  setActorWordsRemovedBelow,
  verbWordsRemovedBelow,
  setVerbWordsRemovedBelow,
  wordMixRemovedBelow,
  setWordMixRemovedBelow,
  verticalArrayActors,
  setVerticalArrayActors,
  verticalArrayVerbs,
  setVerticalArrayVerbs,
  verticalArrayWordMix,
  setVerticalArrayWordMix,
  roundsLeft,
  lockedWords,
  setLockedWords,
}) {
  // Lockedwords {"0-0": true, "0-1": true} Number on Left = rows; Number on right = columns
  //The word row will always be one (as center row)

  function displayOutOfSpinsMessage(setShowOutOfSpinsMessage) {
    console.log("setting out of spins message to show!!!");
    setShowOutOfSpinsMessage(true);
  }
  console.log("nudgesSpinsLeft in NUDGEBUTTON!!!", nudgesSpinsLeft);

  return (
    <>
      <View style={s.changeWordsButtonsContainerOuter}>
        {Array(rowLength)
          .fill()
          .map((_, index) => (
            <View key={index} style={s.nudgeButtonContainer}>
              {/* Left Nudge Button - UP */}

              <TouchableOpacity
                onPress={() => {
                  nudgesSpinsLeft > 0 && !lockedWords.includes(`1-${index}`)
                    ? prepareToShiftColumns({
                        numberOfRows,
                        rowLength,
                        fullWordArray,
                        setFullWordArray,
                        index,
                        verticalArray:
                          index === 0
                            ? verticalArrayActors
                            : index === 1
                              ? verticalArrayVerbs
                              : verticalArrayWordMix,
                        setVerticalArray:
                          index === 0
                            ? setVerticalArrayActors
                            : index === 1
                              ? setVerticalArrayVerbs
                              : setVerticalArrayWordMix,
                        wordList:
                          index === 0
                            ? actorList
                            : index === 1
                              ? verbList
                              : wordMix,
                        removedWordsArrayAbove:
                          index === 0
                            ? actorWordsRemovedAbove
                            : index === 1
                              ? verbWordsRemovedAbove
                              : wordMixRemovedAbove,
                        setRemovedWordsArrayAbove:
                          index === 0
                            ? setActorWordsRemovedAbove
                            : index === 1
                              ? setVerbWordsRemovedAbove
                              : setWordMixRemovedAbove,
                        removedWordsArrayBelow:
                          index === 0
                            ? actorWordsRemovedBelow
                            : index === 1
                              ? verbWordsRemovedBelow
                              : wordMixRemovedBelow,
                        setRemovedWordsArrayBelow:
                          index === 0
                            ? setActorWordsRemovedBelow
                            : index === 1
                              ? setVerbWordsRemovedBelow
                              : setWordMixRemovedBelow,
                        columnOffset: index,
                        direction: "up",
                        nudgesSpinsLeft,
                        setNudgesSpinsLeft,
                        showOutOfSpinsMessage,
                        setShowOutOfSpinsMessage,
                        roundsLeft,
                      })
                    : nudgesSpinsLeft === 0
                      ? setShowOutOfSpinsMessage(true)
                      : null;
                }}
                style={[s.nudgeButton, s.changeWordsButton]}
              >
                <Text style={s.changeWordButtonText}>1 </Text>
                <Ionicons name="arrow-up-outline" style={s.arrowIcon} />
              </TouchableOpacity>
              {/* Right Nudge Button */}
              <TouchableOpacity
                onPress={() => {
                  nudgesSpinsLeft > 0 && !lockedWords.includes(`1-${index}`)
                    ? prepareToShiftColumns({
                        //parameters in function (depends on index)
                        numberOfRows,
                        rowLength,
                        fullWordArray,
                        setFullWordArray,
                        index,
                        verticalArray:
                          index === 0
                            ? verticalArrayActors
                            : index === 1
                              ? verticalArrayVerbs
                              : verticalArrayWordMix,
                        wordList:
                          index === 0
                            ? actorList
                            : index === 1
                              ? verbList
                              : wordMix,
                        setVerticalArray:
                          index === 0
                            ? setVerticalArrayActors
                            : index === 1
                              ? setVerticalArrayVerbs
                              : setVerticalArrayWordMix,
                        removedWordsArrayAbove:
                          index === 0
                            ? actorWordsRemovedAbove
                            : index === 1
                              ? verbWordsRemovedAbove
                              : wordMixRemovedAbove,
                        setRemovedWordsArrayAbove:
                          index === 0
                            ? setActorWordsRemovedAbove
                            : index === 1
                              ? setVerbWordsRemovedAbove
                              : setWordMixRemovedAbove,
                        removedWordsArrayBelow:
                          index === 0
                            ? actorWordsRemovedBelow
                            : index === 1
                              ? verbWordsRemovedBelow
                              : wordMixRemovedBelow,
                        setRemovedWordsArrayBelow:
                          index === 0
                            ? setActorWordsRemovedBelow
                            : index === 1
                              ? setVerbWordsRemovedBelow
                              : setWordMixRemovedBelow,
                        columnOffset: index,
                        direction: "down",
                        nudgesSpinsLeft,
                        setNudgesSpinsLeft,
                        showOutOfSpinsMessage,
                        setShowOutOfSpinsMessage,
                        roundsLeft,
                      })
                    : nudgesSpinsLeft === 0
                      ? setShowOutOfSpinsMessage(true)
                      : null;
                }}
                style={[s.nudgeButton, s.changeWordsButton]}
              >
                <Text style={s.changeWordButtonText}>1 </Text>
                <Ionicons name="arrow-down-outline" style={s.arrowIcon} />
              </TouchableOpacity>
            </View>
          ))}
      </View>
    </>
  );
}
