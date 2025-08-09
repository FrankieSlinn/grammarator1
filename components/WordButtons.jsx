import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { s } from "../App.style";
import { makeWordArrays } from "../utils/makeWordArrays";
import { CashButton } from "./CashButton";

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
  correctSentenceDisplay, setCorrectSentenceDisplay, showCorrectSentenceDisplay, setShowCorrectSentenceDisplay,
  roundsLeft, setRoundsLeft, nudgesSpinsLeft, setNudgesSpinsLeft, setShowOutOfSpinsMessage
}) {
  const [rowNumber, setRowNumber] = useState();
  const [grammarToCheck, setGrammarToCheck] = useState("");
  const [wordArrayPopulated, setWordArrayPopulated] = useState(false);
  const [pressedRowIndex, setPressedRowIndex] = useState(null);

  // ✅ Track lock state of each button individually




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

  return (
    <>
      <View style={s.wordsContainer}>
        {rows.map((row, index) => (
          <View key={index} style={s.wordRow}>
            {row.map((word, wordIndex) => {
              const key = `${index}-${wordIndex}`;
              // const isLocked = individualButtonLocked[key];
 

              return (
                <View key={key} style={s. wordButtonContainer}>
                  <TouchableOpacity
          
                    style={[
                      s.wordButton, s.wordButton
                    ]}
                  >
                    <Text style={s.word}>{word}</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
       
            { index===1?
            <CashButton
              grammarCorrect={grammarCorrect}
              setGrammarCorrect={setGrammarCorrect}
              cashButtonPressed={cashButtonPressed}
              setCashButtonPressed={setCashButtonPressed}
              fullWordArray={fullWordArray}
              setFullWordArray={setFullWordArray}
              rowNumber={index}
              setRowNumber={setRowNumber}
              numberOfRows={numberOfRows}
              grammarToCheck={grammarToCheck}
              setGrammarToCheck={setGrammarToCheck}
              rowLength={rowLength}
              pressedRowIndex={pressedRowIndex}
              setPressedRowIndex={setPressedRowIndex}
              showPointsMessage={showPointsMessage}
              setShowPointsMessage={setShowPointsMessage}
              gameScore={gameScore}
              setGameScore={setGameScore}
              correctSentenceDssplay={correctSentenceDisplay}
              setCorrectSentenceDisplay={setCorrectSentenceDisplay}
              showCorrectSentenceDisplay={showCorrectSentenceDisplay}
              setShowCorrectSentenceDisplay={setShowCorrectSentenceDisplay}
              roundsLeft={roundsLeft}
              setRoundsLeft={setRoundsLeft}
              nudgesSpinsLeft={nudgesSpinsLeft}
              setNudgesSpinsLeft={setNudgesSpinsLeft}
              setShowOutOfSpinsMessage={setShowOutOfSpinsMessage}

            />:null}
          </View>
        ))}
      </View>
{/* 
      <NewGameButton
        newRound={newRound}
        setNewRound={setNewRound}
        cashButtonPressed={cashButtonPressed}
        setCashButtonPressed={setCashButtonPressed}
        rowLength={rowLength}
        numberOfRows={numberOfRows}
        fullWordArray={fullWordArray}
        setFullWordArray={setFullWordArray}

      /> */}
    </>
  );
}
