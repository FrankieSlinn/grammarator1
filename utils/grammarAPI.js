
import Constants from "expo-constants";

const OPENAI_API_KEY1 = Constants.expoConfig.extra.openaiApiKey ||
  process.env.OPENAI_API_KEY;;

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
  //TEST

  fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(res => res.json())
  .then(console.log)
  .catch(console.error);

  console.log("Key in build!!!!!!!!!!", Constants.expoConfig.extra.openaiApiKey);

  let textToBeChecked = getSentenceToValidate(
    setGrammarToCheck,
    fullWordArray,
    rowLength
  );
  console.log("sentence to check before validate in api", textToBeChecked);

  const prompt = `You are a strict English grammar checker. If word unknown assume it is a name. Is the sentence grammatically correct in standard English? Something like "bob go away" should always be incorrect.
  Do not interpreet anything as imperative. Ignore punctuation and capitalisation. Return only true or false.: "${textToBeChecked}"`;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {

          "Content-Type": "application/json",
  "Authorization": `Bearer ${OPENAI_API_KEY1}`,
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
    console.log("response message in api", data.choices[0].message)
    const answer = data.choices[0].message.content.trim().toLowerCase();
    console.log("answer in API!!!!", answer);
    //if answer ===true, should be true, else false
    setGrammarCorrect(answer === "true");
    console.log("grammarCorrect in api function", answer, grammarCorrect)

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
