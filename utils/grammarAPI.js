
async function checkGrammar(
  grammarToCheck,
  setGrammarToCheck,
  grammarCorrect,
  setGrammarCorrect,
  setCashButtonPressed,
  fullWordArray,
  rowLength,
  showCashButton,
  setShowCashButton
) {
  setShowCashButton(false);
  setTimeout(() => {
    setCashButtonPressed(true);
  }, 1000);
  console.log("Cash button pressed");

  let textToBeChecked = getSentenceToValidate(
    setGrammarToCheck,
    fullWordArray,
    rowLength
  );
  console.log("sentence to check before validate", textToBeChecked);

  const prompt = `If word unknown assume it is a name. Is the sentence grammatically correct in standard English? Something like "people go swimming" should be correct.
  Ignore punctuation and capitalisation. Return only true or false.: "${textToBeChecked}"`;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`, 
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("response", data);

    const answer = data.choices[0].message.content.trim().toLowerCase();
    console.log("answer in API", answer);
    setGrammarCorrect(answer === "true");
    console.log("grammarCorrect in api function", grammarCorrect)

    if (answer === "true") return true;
    if (answer === "false") return false;
    return null; // fallback
  } catch (error) {
    console.error("Error during OpenAI API call:", error);
    throw error;
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
