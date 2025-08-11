import { useEffect, useState } from "react";
import { View } from "react-native";
import { s } from "../App.style";
import { CashButton } from "../components/CashButton";
import { CashButtonFeedback } from "../components/CashButtonFeedback";
import { Dashboard } from "../components/Dashboard";
import { DisplaySentence } from "../components/DisplaySentence";
import { Logo } from "../components/Logo";
import { NudgeButtons } from "../components/NudgeButtons";
import { OutOfSpinsMessage } from "../components/OutOfSpinsMessage";
import { PointsMessage } from "../components/PointsMessage";
import { SpinButtons } from "../components/SpinButtons";
import { WordButtons } from "../components/WordButtons";

export default function Index() {
  const [grammarCorrect, setGrammarCorrect] = useState(false);
  const [fullWordArray, setFullWordArray] = useState([]);
  const [cashButtonPressed, setCashButtonPressed] = useState(false);
  const [newRound, setNewRound] = useState(false);
  const [rowLength, setRowLength] = useState(3);
  const [numberOfRows, setNumberOfRows] = useState(3);
  const [showPointsMessage, setShowPointsMessage]=useState(false);
  const [gameScore, setGameScore] = useState(0); 
  const [roundsLeft, setRoundsLeft] = useState(10); 
  const [nudgesSpinsLeft, setNudgesSpinsLeft] = useState(2)
  const[correctSentenceDisplay, setCorrectSentenceDisplay] = useState("");
  const[showCorrectSentenceDisplay, setShowCorrectSentenceDisplay]=useState(false)
  const[showOutOfSpinsMessage, setShowOutOfSpinsMessage] = useState(false)
  const [grammarToCheck, setGrammarToCheck] = useState("");
  const [pressedRowIndex, setPressedRowIndex] = useState(null);
 
  
  console.log("fullWordArray in index", fullWordArray);

  useEffect(()=>{
    console.log("showPointsMessage", showPointsMessage)


  }, [grammarCorrect])

  return (
    <>
      <View>
        <Logo />
      </View>
      <View style={s.appBodyView}>
        <Dashboard
        gameScore={gameScore}
        roundsLeft={roundsLeft}
        nudgesSpinsLeft={nudgesSpinsLeft}

        
        
        />
        <CashButtonFeedback
          cashButtonPressed={cashButtonPressed}
          grammarCorrect={grammarCorrect}
        />
        {showCorrectSentenceDisplay===true?
        <DisplaySentence
        correctSentenceDisplay={correctSentenceDisplay}
        
        />
        :null}
        <View style={s.slotMachineLayout}>
        <SpinButtons
          rowLength={rowLength}
          numberOfRows={numberOfRows}
          fullWordArray={fullWordArray}
          setFullWordArray={setFullWordArray}
          nudgesSpinsLeft={nudgesSpinsLeft}
          setNudgesSpinsLeft={setNudgesSpinsLeft}
          showOutOfSpinsMessage={showOutOfSpinsMessage}
          setShowOutOfSpinsMessage={setShowOutOfSpinsMessage}
        />

        <WordButtons
          grammarCorrect={grammarCorrect}
          setGrammarCorrect={setGrammarCorrect}
          fullWordArray={fullWordArray}
          setFullWordArray={setFullWordArray}
          cashButtonPressed={cashButtonPressed}
          setCashButtonPressed={setCashButtonPressed}
          newRound={newRound}
          setNewRound={setNewRound}
          rowLength={rowLength}
          setRowLength={setRowLength}
          numberOfRows={numberOfRows}
          setNumberOfRows={setNumberOfRows}
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
          grammarToCheck={grammarToCheck}
          setGrammarToCheck={setGrammarToCheck}
          pressedRowIndex={pressedRowIndex}
          setPressedRowIndex={setPressedRowIndex}
        />
                <NudgeButtons
          rowLength={rowLength}
          numberOfRows={numberOfRows}
          fullWordArray={fullWordArray}
          setFullWordArray={setFullWordArray}
          nudgesSpinsLeft={nudgesSpinsLeft}
          setNudgesSpinsLeft={setNudgesSpinsLeft}
          showOutOfSpinsMessage={showOutOfSpinsMessage}
          setShowOutOfSpinsMessage={setShowOutOfSpinsMessage}
        />
         <CashButton
              grammarCorrect={grammarCorrect}
              setGrammarCorrect={setGrammarCorrect}
              cashButtonPressed={cashButtonPressed}
              setCashButtonPressed={setCashButtonPressed}
              fullWordArray={fullWordArray}
              setFullWordArray={setFullWordArray}
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

            />
            </View>
       { showPointsMessage?
        <PointsMessage
        gameScore={gameScore}
        setGameScore={setGameScore}
        />
        :null}
        {showOutOfSpinsMessage?
        <OutOfSpinsMessage/>:null}
      </View>
    </>
  );
}

