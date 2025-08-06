import { s } from '@/App.style.js';
import { React } from 'react';
import { Text, View } from 'react-native';


export function PointsMessage({gameScore, setGameScore}){
    return <>
    <View style={s.pointsMessageContainer}>
    <Text style={s.standardText}>Congratulations! You have won {gameScore} point/s!</Text>
    {/* <Text style={s.pointsMessage}>Congratulations! You have won 100 points!</Text> */}
    </View>
    
    </>
    
    }