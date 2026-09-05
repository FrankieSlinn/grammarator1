import { createAudioPlayer } from 'expo-audio';

const winPlayerWinWordsWinWords = createAudioPlayer(
  require('../assets/sounds/winWordSound.wav')
);



function winButtonSound() {
  winPlayerWinWordsWinWords.seekTo(0);
  winPlayerWinWordsWinWords.play();

}



const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function changeWordsToWin(fullWordArray, setFullWordArray) {
  console.log("changeWordsToWin running");

  // First sound
  winButtonSound();

  const updated1 = [...fullWordArray];
  updated1[3] = "WIN!";
  setFullWordArray(updated1);

  // Wait for first sound
  await delay(1000);

  // Second sound
  winButtonSound();

  const updated2 = [...updated1];
  updated2[4] = "WIN!";
  setFullWordArray(updated2);

  // Wait for second sound
  await delay(1000);

  // Third sound
  winButtonSound();

  const updated3 = [...updated2];
  updated3[5] = "WIN!";
  setFullWordArray(updated3);

  return updated3;
}


export { changeWordsToWin };
