import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { s } from "../App.style";

export function CashButtonFeedback({ cashButtonPressed, grammarCorrect }) {
  console.log("grammarCorrect in CashButtonFeedback", grammarCorrect);
  const [giveCorrectAnswer, setGiveCorrectAnswer] = useState(null);
  // const [result, setResult] = useState(null);

  // async function getResult() {
  //   const res = await checkGrammar(
  //     grammarToCheck,
  //     setGrammarToCheck,
  //     grammarCorrect,
  //     setGrammarCorrect,
  //     setCashButtonPressed,
  //     fullWordArray,
  //     rowLength,
  //     showCashButton,
  //     setShowCashButton
  //   );
  //   setResult(res);
  // }

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
