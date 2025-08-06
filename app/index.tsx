import { useEffect, useState } from "react";
import { View } from "react-native";
import { s } from "../App.style";
import { CashButtonFeedback } from "../components/CashButtonFeedback";
import { ChangeWordsButtons } from "../components/ChangeWordsButtons";
import { Dashboard } from "../components/Dashboard";
import { Logo } from "../components/Logo";
import { PointsMessage } from "../components/PointsMessage";
import { WordButtons } from "../components/WordButtons";

export default function Index() {
  const [grammarCorrect, setGrammarCorrect] = useState(false);
  const [fullWordArray, setFullWordArray] = useState([]);
  const [cashButtonPressed, setCashButtonPressed] = useState(false);
  const [newRound, setNewRound] = useState(false);
  const [rowLength, setRowLength] = useState(3);
  const [numberOfRows, setNumberOfRows] = useState(3);
  const [buttonLocked, setButtonLocked] = useState(false);
  const [showPointsMessage, setShowPointsMessage]=useState(false);
  const [gameScore, setGameScore] = useState(0); 
  const [roundsLeft, setRoundsLeft] = useState(10); 
  const [nudgesSpinsLeft, setNudgesSpinsLeft] = useState(2)
 
  
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
        <ChangeWordsButtons
          rowLength={rowLength}
          numberOfRows={numberOfRows}
          fullWordArray={fullWordArray}
          setFullWordArray={setFullWordArray}
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
          buttonLocked={buttonLocked}
          setButtonLocked={setButtonLocked}
          showPointsMessage={showPointsMessage}
          setShowPointsMessage={setShowPointsMessage}
          gameScore={gameScore}
          setGameScore={setGameScore}
        />
       { showPointsMessage?
        <PointsMessage
        gameScore={gameScore}
        setGameScore={setGameScore}
        />
        :null}
      </View>
    </>
  );
}

