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
  rowLength
) {
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
  const prompt = `Is the sentence grammatically correct in standard English? Would people use this in normal conversation? Ignore punctuation and capitalisation. Return only true or false.: "${textToBeChecked}"`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",

      messages: [{ role: "user", content: prompt }],
    });
    console.log("response", response);

    const answer = response.choices[0].message.content.trim().toLowerCase();
    console.log("answer in API", answer);
    setGrammarCorrect(answer === "true");

    // Return boolean true or false based on answer
    if (answer === "true") return true;
    if (answer === "false") return false;

    // Fallback: if unexpected response, return null or throw error
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
