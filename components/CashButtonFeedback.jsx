
import { useEffect } from "react";
import { Text, View } from "react-native";
import { s } from "../App.style";

export function CashButtonFeedback({cashButtonPressed, grammarCorrect}){
  console.log("grammarCorrect in CashButtonFeedback", grammarCorrect)

    useEffect(()=>{
      console.log("grammarCorrect", grammarCorrect)


    }, [grammarCorrect])


    return (
      <>

          <View style={s.cashButtonFeedbackContainer}>
          {cashButtonPressed ? (
            <Text style={s.standardText}>
              {grammarCorrect
                ? "This grammar is correct!"
                : "This grammar is incorrect."}
            </Text>):null}
          </View>
      
      </>
    );
  }



