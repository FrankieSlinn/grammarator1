import { s } from '@/App.style.js';
import { React } from 'react';
import { Text, View } from 'react-native';


export function PointsMessage({gameScore, setGameScore}){
    return <>
    <View style={s.pointsMessageContainer}>
    <Text style={s.standardText}>Congratulations! You have won a point! You now have {gameScore} point/s in total!</Text>
    </View>
    
    </>
    
    }