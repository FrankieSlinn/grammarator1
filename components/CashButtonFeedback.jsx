import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { s } from "../App.style";
//Shows whether result is correct or not. 
export function CashButtonFeedback({ cashButtonPressed, grammarCorrect }) {
  console.log("grammarCorrect in CashButtonFeedback", grammarCorrect);
  const [giveCorrectAnswer, setGiveCorrectAnswer] = useState(null);


  useEffect(() => {
    console.log("grammarCorrect in CashBUTTONFEEDBACK1!!!!");
    grammarCorrect ? setGiveCorrectAnswer(true) : setGiveCorrectAnswer(false);
  }, [grammarCorrect]);

  return (
    <>
      {/* {cashButtonPressed? */}
      <View
        style={[
          s.cashButtonFeedbackContainer,
          { marginBottom: giveCorrectAnswer === true ? -100 : -80 },
        ]}
      >
        {cashButtonPressed && (
          <Text style={s.standardText}>
            {giveCorrectAnswer === true
              ? "This grammar is correct!"
              : "This grammar is incorrect."}
          </Text>
        )}
      </View>
    </>
  );
}
