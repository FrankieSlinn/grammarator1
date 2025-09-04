import { s } from '@/App.style.js';
import { React } from 'react';
import { Text, View } from 'react-native';


export function FinishGameMessage({gameScore, setGameScore}){
    return <>
  
    <View style={s.finishGameContainer}>
    <Text style={[s.standardText, s.centerText]}>You have finished the game! Your score is {gameScore} point/s in total!</Text>
    <Text style={[s.standardText, s.centerText]}>{'\n'}Click on the New Game Button to play again</Text>
    </View>

    
    </>
    
    }