import { Text, TouchableOpacity, View } from "react-native";
import { s } from "../App.style";
import { spinColumn } from "../utils/wordColumnMovements";
import { actorList, shortVerbList, wordMix } from "../utils/wordList";

// let verticalArrayActors = [];
// let verticalArrayVerbs = [];
// let verticalArrayWordMix = [];
// let actorWordsRemoved = [];
// let verbWordsRemoved = [];
// let wordMixRemoved = [];

console.log(
  "!!!InSpinButtons actorList[0]",
  actorList[0],
  "shortVerbList[0]",
  shortVerbList[0],
  "wordMix[0]",
  wordMix[0],
);

export function SpinButtons({
  rowLength,
  numberOfRows,
  fullWordArray,
  setFullWordArray,
  nudgesSpinsLeft,
  setNudgesSpinsLeft,
  showOutOfSpinsMessage,
  setShowOutOfSpinsMessage,
  roundsLeft,
  lockedWords,
  setLockedWords,
  arrayCorrectWords,
  setArrayCorrectWords,
  correctWords, 
  setCorrectWords, 
  wordArrayPopulated,
  setWordArrayPopulated
}) {
  console.log("rounds left in Spin Column Component!!!!!!!!!", roundsLeft);
  console.log("nudgesSpinsLeft in SPIN BUTTON!!!!!!", nudgesSpinsLeft);
  console.log("£££££arrayCorrectWords££££", arrayCorrectWords)
  console.log("£££££correctWords in spin button££££££££££££")

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
                    nudgesSpinsLeft > 0 && !lockedWords.includes(`1-${index}`)
                      ? spinColumn(
                   numberOfRows,
  fullWordArray,
  setFullWordArray,
  rowLength,
  index,
  nudgesSpinsLeft,
  setNudgesSpinsLeft,
  setShowOutOfSpinsMessage,
  roundsLeft,
  arrayCorrectWords,
  setArrayCorrectWords,
    wordArrayPopulated,
  setWordArrayPopulated,
  correctWords,
  setCorrectWords
                        )
                      : nudgesSpinsLeft === 0
                        ? setShowOutOfSpinsMessage(true)
                        : null;
                  }}
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
