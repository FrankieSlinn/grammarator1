import { s } from '@/App.style.js';
import { React, useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { checkGrammar } from "../utils/grammarAPI";
import { resetRound } from "../utils/resetRound";

export function CashButton({ grammarCorrect, setGrammarCorrect , cashButtonPressed, setCashButtonPressed, fullWordArray, setFullWordArray, rowNumber, setRowNumber, 
  numberOfRows,
  grammarToCheck, setGrammarToCheck, rowLength, showPointsMessage, setShowPointsMessage, gameScore, setGameScore,
  correctSentenceDisplay, setCorrectSentenceDisplay, showCorrectSentenceDisplay, setShowCorrectSentenceDisplay, roundsLeft, setRoundsLeft,
  nudgesSpinsLeft, setNudgesSpinsLeft, setShowOutOfSpinsMessage
  
}) {

  useEffect(() => {
    console.log("✅ fullWordArray updated in Cash Button UseEffect:", fullWordArray);
  }, [fullWordArray]);
  

  async function handleCashButtonPress() {
    const result = await checkGrammar(
      grammarToCheck,
      setGrammarToCheck,
      grammarCorrect,
      setGrammarCorrect,
      setCashButtonPressed,
      rowNumber,
      setRowNumber,
      fullWordArray,
      rowLength
    );

    // ✅ Use the actual result from the API instead of grammarCorrect state
    if (result === true) {
      setShowCorrectSentenceDisplay(true)
      setCorrectSentenceDisplay(fullWordArray[3]+" "+fullWordArray[4]+" "+fullWordArray[5])
      setShowPointsMessage(true);
      // console.log("✅ Grammar correct in cash button:", result);
      let newGameScore = gameScore + 1;
      setGameScore(newGameScore);
      console.log("game score in cash button", newGameScore)
    

    } else {
      console.log("❌ Grammar incorrect in cash button:", result);
    }
    resetRound(fullWordArray, setFullWordArray, rowLength, numberOfRows, cashButtonPressed, setCashButtonPressed, setShowCorrectSentenceDisplay, setShowPointsMessage,
      roundsLeft, setRoundsLeft, nudgesSpinsLeft, setNudgesSpinsLeft, setShowOutOfSpinsMessage

    )
  }
 

  return (
    <View style={s.cashButtonContainer}>
      <TouchableOpacity title="CASH" style= {s.cashButton} onPress={handleCashButtonPress} >
    <Text style={s.cashButtonText}>CASH</Text>
  </TouchableOpacity>
    </View>
  );
}
