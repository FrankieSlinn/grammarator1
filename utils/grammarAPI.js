import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.EXPO_PUBLIC_API_KEY,
});

// const openai = process.env.EXPO_PUBLIC_KEY
async function checkGrammar(
  grammarToCheck,
  setGrammarToCheck,
  grammarCorrect,
  setGrammarCorrect,
  setCashButtonPressed,
  // rowNumber,
  // setRowNumber,
  fullWordArray,
  rowLength,
  showCashButton,
  setShowCashButton
) {
  setShowCashButton(false)
  setTimeout(() => {
  setCashButtonPressed(true);
}, 1000); 
  console.log("Cash button pressed");

  let textToBeChecked = getSentenceToValidate(
    // rowNumber,
    // setRowNumber,
    setGrammarToCheck,
    fullWordArray,
    rowLength
  );
  console.log("sentence to check before validate", textToBeChecked);
  const prompt = `If word unknown assume it is a name. Is the sentence definitely grammatically correct in standard English? 
  Ignore punctuation and capitalisation. Return only true or false.: "${textToBeChecked}"`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",

      messages: [{ role: "user", content: prompt }],
      response_format: { type: "text" },
    });
    console.log("response", response);

    const answerRaw = response.choices[0]?.message?.content || "";
    const answer = answerRaw.trim().toLowerCase().replace(/[^\w]/g, ""); 
    // this strips punctuation like "." or "!"
    setGrammarCorrect(answer==="true")
    console.log("answer in API (normalized):", answer);
    
    if (answer === "true") return true;
    if (answer === "false") return false;

   
    
    console.warn("Unexpected answer format:", answerRaw);
    return null;
  } catch (error) {
    console.error("Error during OpenAI API call:", error);
    throw error; // or return a default value
  }
}

function getSentenceToValidate(
  // rowNumber,
  // setRowNumber,
  setGrammarToCheck,
  fullWordArray,
  rowLength
) {
  console.log("getSentenceToCheck running");
  // setRowNumber(rowNumber);
  // console.log("row number in getsentence", rowNumber);
  const fullWordArrayCopy = [...fullWordArray];
  const sentenceToCheckArray = fullWordArrayCopy.splice(
   3,
    rowLength
  );
  const sentenceToCheck = sentenceToCheckArray.join(" ");
  console.log("sentence To Check", sentenceToCheck);
  setGrammarToCheck(sentenceToCheck);
  return sentenceToCheck;
}

export { checkGrammar };
