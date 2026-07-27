function changeWordsToWin(fullWordArray, setFullWordArray) {
  return new Promise((resolve) => {
    console.log("change words to win running");

    setTimeout(() => {
      const updated1 = [...fullWordArray];
      updated1[3] = "WIN!";
      setFullWordArray(updated1);

      setTimeout(() => {
        const updated2 = [...updated1];
        updated2[4] = "WIN!";
        setFullWordArray(updated2);

        setTimeout(() => {
          const updated3 = [...updated2];
          updated3[5] = "WIN!";
          setFullWordArray(updated3);

          resolve(updated3); // ✅ only resolves once all 3 words are done
        }, 1000);
      }, 1000);
    }, 1000);
  });
}



export { changeWordsToWin };
