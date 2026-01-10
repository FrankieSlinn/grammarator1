import { Platform, StyleSheet } from "react-native";

export const s = StyleSheet.create({
  appBodyView: {
    flex: 1,
  },
  centerText: {
    textAlign: "center",
  },
  logoContainer: {
    // height: "10%",
    marginTop: 15,
  },
  logo: {
    fontSize: 35,
    fontWeight: "bold",
    letterSpacing: 0.2,
    shadowColor: "#000",
    textAlign: "center",
  },
  dashboardContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    // backgroundColor: "purple"
  },
  slotMachineLayout: {
    flex: 0.5,
    justifyContent: "space-evenly",
    backgroundColor: "lightblue",
  },
  changeWordsButtonsContainerOuter: {
    flexDirection: "row",
    // width: "90%",
    justifyContent: "space-evenly",
  },

  changeWordsButtonsContainer: {
    // flexDirection: "column",

    marginTop: 100,
    marginBottom: -130,
    // backgroundColor:"lightyellow",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  spinButtonContainer: {
    // width: "97%",
    marginLeft: 5,
    marginBottom: 40,
    // alignItems: "center"
  },
  spinButton: {
    alignItems: "center",
  },

  changeWordsButton: {
    backgroundColor: "lightyellow",

    borderRadius: 10,
    padding: 5,
  },

  changeWordButtonText: {
    fontWeight: "bold",
    fontSize: 17,
  },
  wordsContainer: {
    // flex: 1,
    marginTop: 110,
    // marginBottom: -300,
    alignItems: "center",
    height: "20%",
    // backgroundColor: "pink",
  },

  wordRow: {
    // flex: 1,
    flexDirection: "row",
    marginTop: 10,
    marginHOrizontal: 10,

    backgroundColor: "lightYellow",
    alignItems: "center",
    justifyContent: "space-around",
    width: "95%",

    // height: "10%",
  },
  wordBorder: {
    borderWidth: 8,
    borderColor: "lightblue",
    borderRadius: 15,
    padding: 5,
  },

  wordButton: {
    paddingVertical: 10,
    // paddingHOrizontal: -5,
    width: 100,
    margin: 2,

    borderRadius: 10,
    backgroundColor: "aquamarine",
  },

  // unlockedWordButton: {
  //   backgroundColor: "aquamarine",
  // },
  word: {
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
  },
  nudgeButtonContainer: {
    flex: 0.05,
    // backgroundColor: "gray",
    flexDirection: "row",
    marginTop: Platform.OS === "android" ? 85 : 50,
    marginRight: 0,
    justifyContent: "center",
    // width: "88%",
    height: 79,
  },
  nudgeButton: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 5,
    height: 35,

    padding: 12,
    width: 45,
  },

  arrowIcon: {
    fontWeight: "bold",
    fontSize: 20,
    height: 17,
  },
  cashButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 270,
    marginBottom: -200,
    backgroundColor: "lightblue",
    // height: 200,
  },
  cashButton: {
    marginTop: -550,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: "lightpink",
    padding: 10,
  },
  cashButtonText: {
    color: "black",
    fontWeight: "bold",
  },

  cashButtonFeedbackContainer: {
    marginTop: 20,
    marginBottom: -100,

    alignItems: "center",
    // backgroundColor: "lightyellow",
  },
  displaySentenceContainer: {
    backgroundColor: "lightblue",
    marginTop: 110,
    marginBottom: -85,
    alignItems: "center",
    padding: 10,
  },

  standardText: {
    fontWeight: "bold",
    fontSize: 17,
  },
  outOfSpinsMessageContainer: {
    // backgroundColor: "lightblue",
    alignItems: "center",
    // marginTop: -300,
  },
  newRoundContainer: {
    alignItems: "center",
    marginBottom: 70,
  },
  newRoundButton: {
    padding: 15,
    backgroundColor: "aquamarine",
    borderRadius: 15,
  },
  pointsMessageContainer: {
    // flex: 0.5,
    marginTop: -30,
    marginHorizontal: 30,
    // marginHorizontal: 20,
    // marginBottom: 200,
    // backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  finishGameContainerOuter: {
    alignItems: "center",
  },
  finishGameContainer: {
    marginTop: Platform.OS === "android" ? -100 : -150,
    marginHorizontal: 30,
    alignItems: "center",

    textAlign: "center",
    justifyContent: "center",
    // backgroundColor: "lightyellow",
  },
});
