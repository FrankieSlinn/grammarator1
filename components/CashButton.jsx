import { s } from "@/App.style.js";
import { React, useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { checkGrammar } from "../utils/grammarAPI";
import { resetRound } from "../utils/resetRound";

export function CashButton({
  grammarCorrect,
  setGrammarCorrect,
  cashButtonPressed,
  setCashButtonPressed,
  fullWordArray,
  setFullWordArray,
  // rowNumber, setRowNumber,
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
  lockedWords,
  setLockedWords,
}) {
  useEffect(() => {
    console.log(
      "✅ fullWordArray updated in Cash Button UseEffect:",
      fullWordArray,
    );
  }, [fullWordArray]);

  async function handleCashButtonPress() {
    const result = await checkGrammar(
      grammarToCheck,
      setGrammarToCheck,
      grammarCorrect,
      setGrammarCorrect,
      setCashButtonPressed,
      fullWordArray,
      rowLength,
      showCashButton,
      setShowCashButton,
      lockedWords,
      setLockedWords,
    );
    console.log("result before check rounds", result);

    // ✅ Use the actual result from the API instead of grammarCorrect state
    if (roundsLeft >= 0) {
      console.log("rounds left, continuing to validate if true");

      if (result === true) {
        console.log("correct answer in cash button pressed");
        setShowCorrectSentenceDisplay(true);
        setShowOutOfSpinsMessage(false);
        setCorrectSentenceDisplay(
          fullWordArray[3] + " " + fullWordArray[4] + " " + fullWordArray[5],
        );
        if (!roundsLeft === 1) {
          setShowPointsMessage(true);
        } // console.log("✅ Grammar correct in cash button:", result);
        let newGameScore = gameScore + 1;
        setGameScore(newGameScore);
        console.log("game score in cash button", newGameScore);
      } else {
        console.log("❌ Grammar incorrect in cash button:", result);
      }
      console.log("about to run reset round");
      resetRound(
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
        lockedWords,
        setLockedWords,
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
