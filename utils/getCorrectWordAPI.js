import Constants from "expo-constants";
const OPENAI_API_KEY1 =
  Constants.expoConfig.extra.openaiApiKey || process.env.OPENAI_API_KEY;

//May not be needed (whole function as AI not good at putting together sentences. )

async function getCorrectWord(
  rowLength,
  index,
  actorList,
  shortVerbList,
  wordMix,
  arrayCorrectWords,
  setArrayCorrectWords,
) {
  console.log("!!!GET CORRECT WORD API RUNNING!!!");

  //print out so used (import not deleted on save. so that list is availabe in API prompt)

  console.log(
    "!!!!!!!actorList[0]",
    actorList[0],
    "shortVerbList[0]",
    shortVerbList[0],
    "wordMix[0]",
    wordMix[0],
    "!!!!",
  );

  //TEST

  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => res.json())
    .then(console.log)
    .catch(console.error);

  console.log(
    "Key in build!!!!!!!!!!",
    Constants.expoConfig.extra.openaiApiKey,
  );

  const prompt = `
Target index (0-based):
${index}
actorList:
${JSON.stringify(actorList)}

shortVerbList:
${JSON.stringify(shortVerbList)}

wordMix:
${JSON.stringify(wordMix)}
You are a strict English grammar checker. Treat any unknown word as a proper name.
Rules:
The wordLists are: actorList, shortVerbList and wordMix. 


Never interpret sentences as imperative
Ignore punctuation and capitalisation
A sentence always has exactly three words
Word positions are fixed: index 0 = actorList, index 1 = verbList, index 2 = wordMix

Your task:
Pick two words from two different lists (never use the same list twice). The two words must occupy their correct positional order and form a grammatically valid partial sentence,
 assuming a suitable third word will be added later. Ignore ". The three word sentence has to be grammatically correct. 
 The full sentence must make grmmatical sense in the English language. 
For example, if you pick from verbList (position 1) and wordMix (position 2), the output assumes a valid actorList word will fill position 0.
Vary your selections — rotate which two lists you draw from across calls. Never return "unknown" as a word.
Also return: the word from the third list that would complete the sentence correctly.
When using the actorList please include a word that is actually from the list. 
The words HAVE to be from the lists (never actor or actorname). 

Where listIndex: 0 = actorList, 1 = shortVerbList, 2 = wordMix

Vary your selections — you must rotate through all possible list combinations with equal frequency. The three possible combinations are:

actorList (0) + verbList (1) — third word from wordMix
actorList (0) + wordMix (2) — third word from verbList
verbList (1) + wordMix (2) — third word from actorList

For every returned word:

1. Verify it exists in the specified list.
2. If it does not exist, choose another word.
3. Never invent words.

Track which combination was last used and never use the same combination twice in a row. Over time, each combination should appear roughly the same number of times.

CRITICAL: You are forbidden from always picking actorList + verbList together. This combination must not appear more than once every three responses.
 Return: 

[firstWord, firstWordListIndex, secondWord, secondWordListIndex]
Return ONLY valid JSON.

{
  "word1": "...",
  "index1": 0,
  "word2": "...",
  "index2": 2,

}

Please make second word a word from the wordMix list a third of the time. 
`;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY1}`,
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
    console.log("response message in api", data.choices[0].message);
    const answer = data.choices[0].message.content.trim().toLowerCase();
    console.log("answer in API!!!!", answer);
    //if answer ===true, should be true, else false

    if (answer === "true") return true;
    if (answer === "false") return false;
    return null; // fallback
  } catch (error) {
    console.error("Error during OpenAI API call:", error);
    throw error;
  }
}

export { getCorrectWord };
