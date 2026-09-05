import { s } from "@/App.style.js";
import { createAudioPlayer } from 'expo-audio';
import { React, useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { changeWordsToWin } from "../utils/changeWordsToWin";
import { checkGrammar } from "../utils/grammarAPI";
import { resetRound } from "../utils/resetRound";



export function CashButton({
  grammarCorrect,
  setGrammarCorrect,
  cashButtonPressed,
  setCashButtonPressed,
  fullWordArray,
  setFullWordArray,
  numberOfRows,
  grammarToCheck,
  setGrammarToCheck,
  rowLength,
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
  showFinishGameMessage,
  setShowFinishGameMessage,
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
  showNewGameButton,
  setShowNewGameButton,
  verticalArrayActors,
  setVerticalArrayActors,
  verticalArrayVerbs,
  setVerticalArrayVerbs,
  verticalArrayWordMix,
  setVerticalArrayWordMix,
  showCashButton,
  setShowCashButton,

        wordArrayPopulated,
        setWordArrayPopulated,
        correctWords,
        setCorrectWords, 
        arrayCorrectWords,
        setArrayCorrectWords
}) {

const cashPlayer = createAudioPlayer(
  require('../assets/sounds/CashRegister.mp3')
);

function cashButtonSound() {
  console.log('CASH PRESSED');
  cashPlayer.seekTo(0);
  cashPlayer.play();
}
//Load sound so first sound effect is played 
// useEffect(() => {
//   preloadWinSound();
// }, []);


  useEffect(() => {
    console.log(
      "✅ fullWordArray updated in Cash Button UseEffect:",
      fullWordArray,
    );
  }, [fullWordArray]);



  

  async function handleCashButtonPress() {
     cashButtonSound();
    const result = await checkGrammar(
      grammarToCheck,
      setGrammarToCheck,
      grammarCorrect,
      setGrammarCorrect,
      setCashButtonPressed,
      fullWordArray,
      setFullWordArray,
      rowLength,
      showCashButton,
      setShowCashButton,

    );
    console.log("!!!!!result before check rounds", result);
   

    // ✅ Use the actual result from the API instead of grammarCorrect state
    if (roundsLeft >= 0) {
      console.log("!!!!!rounds left, continuing to validate if true");

      if (result === true) {

        console.log("correct answer in cash button pressed");
          if (roundsLeft !== 1) {
                   let newGameScore = gameScore + 1;
                     
        setGameScore(newGameScore),
        console.log("!!!!game score in cash button", newGameScore);
          setShowPointsMessage(true);
        } 
    

     await changeWordsToWin(fullWordArray, setFullWordArray);
     setShowCorrectSentenceDisplay(true);
       setShowOutOfSpinsMessage(false);

        setCorrectSentenceDisplay(
          fullWordArray[3] + " " + fullWordArray[4] + " " + fullWordArray[5]
        );
      
        console.log("!!!!✅ Grammar correct in cash button:", result);
 
  
      } else {
        console.log("❌ Grammar incorrect in cash button:", result);
      }
      console.log("!!!!about to run reset round");

     await resetRound(
  fullWordArray,
  setFullWordArray,
  rowLength,
  numberOfRows,
  cashButtonPressed,
  setCashButtonPressed,
  setShowCorrectSentenceDisplay,
  setShowPointsMessage,
  roundsLeft,
  setRoundsLeft,
  nudgesSpinsLeft,
  setNudgesSpinsLeft,
  setShowOutOfSpinsMessage,
  showFinishGameMessage,
  setShowFinishGameMessage,
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
  setShowNewGameButton,
  verticalArrayActors,
  setVerticalArrayActors,
  verticalArrayVerbs,
  setVerticalArrayVerbs,
  verticalArrayWordMix,
  setVerticalArrayWordMix,
  showCashButton,
  setShowCashButton,
  wordArrayPopulated,
  setWordArrayPopulated,
  correctWords,
  setCorrectWords,
  arrayCorrectWords,
  setArrayCorrectWords

  
      );
           
      
    }
  }

  return (
    <View style={s.cashButtonContainer}>
      <TouchableOpacity
        title="CASH"
        style={s.cashButton}
        onPress={handleCashButtonPress}
      >
        <Text style={s.cashButtonText}>CASH</Text>
      </TouchableOpacity>
    </View>
  );
}
