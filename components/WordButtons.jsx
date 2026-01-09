import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { s } from "../App.style";
import { makeWordArrays } from "../utils/makeWordArrays";

export function WordButtons({
  setFullWordArray,
  fullWordArray,
  cashButtonPressed,
  setCashButtonPressed,
  grammarCorrect,
  setGrammarCorrect,
  newRound,
  setNewRound,
  rowLength,
  setRowLength,
  numberOfRows,
  setNumberOfRows,
  showPointsMessage,
  setShowPointsMessage,
  gameScore,
  setGameScore,
  correctSentenceDisplay,
  setCorrectSentenceDisplay,
  showCorrectSentenceDisplay,
  setShowCorrectSentenceDisplay,
  roundsLeft,
  setRoundsLeft,
  nudgesSpinsLeft,
  setNudgesSpinsLeft,
  setShowOutOfSpinsMessage,
  lockedWords,
  setLockedWords

}) {
  const [wordArrayPopulated, setWordArrayPopulated] = useState(false);



  useEffect(() => {
    console.log("RENDER TRIGGERED: fullWordArray updated", fullWordArray);
  }, [fullWordArray]);

  useEffect(() => {
    if (fullWordArray.length === 0) {
      console.log("Calling makeWordArrays...");
      makeWordArrays(
        rowLength,
        numberOfRows,
        wordArrayPopulated,
        setWordArrayPopulated,
        fullWordArray,
        setFullWordArray
      );
    }
  }, []);

  const rows = [];
  for (let i = 0; i < fullWordArray.length; i += rowLength) {
    rows.push(fullWordArray.slice(i, i + rowLength));
  }

  if (fullWordArray.length === 0) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  function wordButtonPressed(key) {
  setLockedWords(prev => {
    if (prev.includes(key)) {
      // remove key
      return prev.filter(k => k !== key);
    }
    // add key
    return [...prev, key];
  });
}

console.log("-----Locked Words:", lockedWords);
  return (
    <>
      <View style={s.wordsContainer}>
        {/* row = horizontal, index = vertical */}
        {rows.map((row, index) => (
          <View key={index} style={[s.wordRow,index===1?s.wordBorder:null]}>
            {row.map((word, wordIndex) => {
              const key = `${index}-${wordIndex}`;
              //Defines which words are locked
              const isLocked = index === 1 && lockedWords.includes(key);


              return (
                <View key={key} style={s.wordButtonContainer}>
                  <TouchableOpacity onPress={() => wordButtonPressed(key)}
 style={[s.wordButton, s.wordButton, 
                    {backgroundColor: isLocked? "gold":"aquamarine" }
                  ]}>
                    <Text style={s.word}>{word}</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        ))}
      </View>
    </>
  );
}
