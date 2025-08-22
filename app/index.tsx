import { useEffect, useState } from "react";
import { View } from "react-native";
import { s } from "../App.style";
import { CashButton } from "../components/CashButton";
import { CashButtonFeedback } from "../components/CashButtonFeedback";
import { Dashboard } from "../components/Dashboard";
import { DisplaySentence } from "../components/DisplaySentence";
import { FinishGameMessage } from "../components/FinishGameMessage";
import { Logo } from "../components/Logo";
import { NewGameButton } from "../components/NewGameButton";
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
  const[showFinishGameMessage, setShowFinishGameMessage] = useState(false)
  const[showNewGameButton, setShowNewGameButton]=useState(false)
  const [showCashButton, setShowCashButton] =useState(true)
  const [grammarToCheck, setGrammarToCheck] = useState("");
  const [pressedRowIndex, setPressedRowIndex] = useState(null);
  const [actorWordsRemovedAbove, setActorWordsRemovedAbove] = useState([]);
  const [verbWordsRemovedAbove, setVerbWordsRemovedAbove] = useState([]);
  const [wordMixRemovedAbove, setWordMixRemovedAbove] = useState([])
  const [actorWordsRemovedBelow, setActorWordsRemovedBelow] = useState([]);
  const [verbWordsRemovedBelow, setVerbWordsRemovedBelow] = useState([]);
  const [wordMixRemovedBelow, setWordMixRemovedBelow] = useState([])
  const [verticalArrayActors, setVerticalArrayActors]=useState([])
  const [verticalArrayVerbs, setVerticalArrayVerbs] = useState([])
  const [verticalArrayWordMix, setVerticalArrayWordMix] = useState([])
 
  
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
     
        <SpinButtons
          rowLength={rowLength}
          numberOfRows={numberOfRows}
          fullWordArray={fullWordArray}
          setFullWordArray={setFullWordArray}
          nudgesSpinsLeft={nudgesSpinsLeft}
          setNudgesSpinsLeft={setNudgesSpinsLeft}
          showOutOfSpinsMessage={showOutOfSpinsMessage}
          setShowOutOfSpinsMessage={setShowOutOfSpinsMessage}
          roundsLeft={roundsLeft}
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
          actorWordsRemovedAbove={actorWordsRemovedAbove}
          setActorWordsRemovedAbove={setActorWordsRemovedAbove}
          verbWordsRemovedAbove={verbWordsRemovedAbove}
          setVerbWordsRemovedAbove={setVerbWordsRemovedAbove}
          wordMixRemovedAbove={wordMixRemovedAbove}
          setWordMixRemovedAbove={setWordMixRemovedAbove}
          actorWordsRemovedBelow={actorWordsRemovedBelow}
          setActorWordsRemovedBelow={setActorWordsRemovedBelow}
          verbWordsRemovedBelow={verbWordsRemovedBelow}
          setVerbWordsRemovedBelow={setVerbWordsRemovedBelow}
          wordMixRemovedBelow={wordMixRemovedBelow}
          setWordMixRemovedBelow={setWordMixRemovedBelow}
          verticalArrayActors= {verticalArrayActors}
          setVerticalArrayActors={setVerticalArrayActors}
          verticalArrayVerbs = {verticalArrayVerbs}
          setVerticalArrayVerbs = {setVerticalArrayVerbs}
          verticalArrayWordMix = {verticalArrayWordMix}
          setVerticalArrayWordMix = {setVerticalArrayWordMix}
          roundsLeft={roundsLeft}
        />
        {showCashButton===true?
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
              showFinishGameMessage={showFinishGameMessage}
              setShowFinishGameMessage={setShowFinishGameMessage}
              actorWordsRemovedAbove={actorWordsRemovedAbove}
              setActorWordsRemovedAbove={setActorWordsRemovedAbove}
              verbWordsRemovedAbove={verbWordsRemovedAbove}
              setVerbWordsRemovedAbove={setVerbWordsRemovedAbove}
              wordMixRemovedAbove={wordMixRemovedAbove}
              setWordMixRemovedAbove={setWordMixRemovedAbove}
              actorWordsRemovedBelow={actorWordsRemovedBelow}
              setActorWordsRemovedBelow={setActorWordsRemovedBelow}
              verbWordsRemovedBelow={verbWordsRemovedBelow}
              setVerbWordsRemovedBelow={setVerbWordsRemovedBelow}
              wordMixRemovedBelow={wordMixRemovedBelow}
              setWordMixRemovedBelow={setWordMixRemovedBelow}
              showOutOfSpinsMessage={showOutOfSpinsMessage}
              setShowOutOfSpinsMessage={setShowOutOfSpinsMessage}
              actorWordsRemovedAbove={actorWordsRemovedAbove}
              setActorWordsRemovedAbove={setActorWordsRemovedAbove}
              verbWordsRemovedAbove={verbWordsRemovedAbove}
              setVerbWordsRemovedAbove={setVerbWordsRemovedAbove}
              wordMixRemovedAbove={wordMixRemovedAbove}
              setWordMixRemovedAbove={setWordMixRemovedAbove}
              actorWordsRemovedBelow={actorWordsRemovedBelow}
              setActorWordsRemovedBelow={setActorWordsRemovedBelow}
              verbWordsRemovedBelow={verbWordsRemovedBelow}
              setVerbWordsRemovedBelow={setVerbWordsRemovedBelow}
              wordMixRemovedBelow={wordMixRemovedBelow}
              setWordMixRemovedBelow={setWordMixRemovedBelow}
              showNewGameButton={showNewGameButton}
              setShowNewGameButton={setShowNewGameButton}
              verticalArrayActors= {verticalArrayActors}
              setVerticalArrayActors={setVerticalArrayActors}
              verticalArrayVerbs = {verticalArrayVerbs}
              setVerticalArrayVerbs = {setVerticalArrayVerbs}
              verticalArrayWordMix = {verticalArrayWordMix}
              setVerticalArrayWordMix = {setVerticalArrayWordMix}
              showCashButton={showCashButton}
              setShowCashButton={setShowCashButton}
            />: null}
         
       { showPointsMessage?
        <PointsMessage
        gameScore={gameScore}
        setGameScore={setGameScore}
        />
        :null}
        {showOutOfSpinsMessage?
        <OutOfSpinsMessage/>:null}
      </View>
      <View>
{showFinishGameMessage?
        <FinishGameMessage
        gameScore={gameScore}
        
        />
        :null}
      </View>
{showNewGameButton?
  <NewGameButton
  
  setShowOutOfSpinsMessage={setShowOutOfSpinsMessage}
 setActorWordsRemovedAbove={setActorWordsRemovedAbove}
 setVerbWordsRemovedAbove={setVerbWordsRemovedAbove}
 setWordMixRemovedAbove={setWordMixRemovedAbove}
 setActorWordsRemovedBelow={setActorWordsRemovedBelow}
  setVerbWordsRemovedBelow={setVerbWordsRemovedBelow}
  setWordMixRemovedBelow={setWordMixRemovedBelow}
  roundsLeft={roundsLeft}
  setRoundsLeft={setRoundsLeft}
  setShowCorrectSentenceDisplay={setShowCorrectSentenceDisplay}
  nudgesSpinsLeft={nudgesSpinsLeft}
 setNudgesSpinsLeft={setNudgesSpinsLeft}
  setCashButtonPressed={setCashButtonPressed}
  numberOfRows={numberOfRows}
  fullWordArray={fullWordArray}
  setFullWordArray={setFullWordArray}
  rowLength={rowLength}
  verticalArrayActors= {verticalArrayActors}
  setVerticalArrayActors={setVerticalArrayActors}
  verticalArrayVerbs = {verticalArrayVerbs}
  setVerticalArrayVerbs = {setVerticalArrayVerbs}
  verticalArrayWordMix = {verticalArrayWordMix}
  setVerticalArrayWordMix = {setVerticalArrayWordMix}
  showPointsMessage={showPointsMessage}
  setShowPointsMessage ={setShowPointsMessage}
  showFinishGameMessage={showFinishGameMessage}
  setShowFinishGameMessage={setShowFinishGameMessage}
  gameScore ={gameScore}
  setGameScore={setGameScore}
  roundsLeft={roundsLeft}
  setRoundsLeft={setRoundsLeft}
  showNewGameButton={showNewGameButton}
  setShowNewGameButton={setShowNewGameButton}
  showCashButton={showCashButton}
  setShowCashButton={setShowCashButton}
  />
  :null}
    </>
  );
}

