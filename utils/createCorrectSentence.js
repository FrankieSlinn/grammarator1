import { actorList, shortVerbList, wordMix } from "./wordList";
console.log(actorList[0], shortVerbList[0], wordMix[0]);
console.log("$$$$TEST!!!!!!!!")

const actorWordsNoThirdPersonSingular = [
  "I",
  "YOU",
  "WE",
  "THEY",
  "ADULTS",
  "CATS",
  "ELEPHANTS",
  "DETECTIVES",
];

const eatWords = [
  "CHICKEN",
  "SALAD",
  "CAKE",
  "BURGERS",
  "CARROTS",
  "SWEETS",
  "OUT",
  "SLOWLY",
];

const goWords = [
  "FISHING",
  "SWIMMING",
  "WALKING",
  "OUT",
  "AWAY",
  "SKIING",
  "SLOWLY",
];
const likeWords = [
  "CHICKEN",
  "SALAD",
  "CAKE",
  "BURGERS",
  "CARROTS",
  "SWEETS",
  "FISHING",
  "SWIMMING",
  "WALKING",
  "SKIING",
];

function randomNumber(listLength) {
  return Math.floor(Math.random() * (listLength-1));
}


//generate random number for actorList
function getActorWord() {
  console.log("@@@getActorWord function running");

  const actorChosen = actorList[randomNumber(actorList.length)];
  console.log("random Actor in function", actorChosen);
  return actorChosen;
}



//get corresponding word from shortVerbList

function getVerb(randomActor) {


  console.log("@@@@randomActor in getVerb", randomActor)
  const shortVerbListHalved = shortVerbList.length / 2;
  const randomNumShortVerb = randomNumber(shortVerbListHalved);
  console.log("&&&&&randomNumShortVerb in getVerb", randomNumShortVerb);
  const randomVerbNoThirdPersSingular = shortVerbList[randomNumShortVerb * 2];
//   console.log(
//     "&&&&&randomVerbNoThirdPersSingular",
//     randomVerbNoThirdPersSingular,
//   );
  const randomVerbThirdPersSingular =
    shortVerbList[((randomNumShortVerb) * 2) + 1];
    console.log(
      "&&&&&randomVerbThirdPersSingular in getVerb",randomVerbThirdPersSingular)

  if (actorWordsNoThirdPersonSingular.includes(randomActor)) {
    console.log(
      "&&&&&randomVerbNoThirdPersSingular in getVerb",
      randomVerbNoThirdPersSingular,
    );

    return randomVerbNoThirdPersSingular;
  } else {
    console.log(
      "&&&&&randomVerbThirdPersSingular in getVerb",
      randomVerbThirdPersSingular,
    );

    return randomVerbThirdPersSingular;
  }
}

//get word from wordMix
function getWordMixWord(randomVerb) {
  console.log("getWordMixWord running");
  console.log("@@@@@@@@randomVerb in getWordMixWord", randomVerb);
  let wordMixWord;

  if (randomVerb === "EAT" || randomVerb === "EATS") {
    console.log("randomVerb in getWordMixWord is EAT / EATS ");
    wordMixWord = eatWords[randomNumber(eatWords.length)];
    console.log("eatWord", wordMixWord);
  } else if (randomVerb === "GO" || randomVerb === "GOES") {
    wordMixWord = goWords[randomNumber(goWords.length)];
  } else if (randomVerb === "LIKE" || randomVerb === "LIKES") {
    wordMixWord = likeWords[randomNumber(likeWords.length)];
  }
  return wordMixWord;
}

function getRightWords(correctWords, setCorrectWords) {
  console.log("getRightWords running");
  console.log("@@@@@@@randomActor in getRightWords", randomActor)
  const randomActor = getActorWord();

  const randomVerb = getVerb(randomActor);
  console.log("@@@@@randomVerb in getRightWords", randomVerb);
  const randomWordMixWord = getWordMixWord(randomVerb);
  const rightWordsArray = [randomActor, 0, randomVerb, 1, randomWordMixWord, 2];
  console.log("@@@@@rightWordsArray in getRightWords", rightWordsArray);
  
 setCorrectWords(rightWordsArray)
 console.log("@@@@correctWords", correctWords)
 return rightWordsArray

}



export { getRightWords };

