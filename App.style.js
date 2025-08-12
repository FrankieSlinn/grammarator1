import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  appBodyView: {
    flex: 1,
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
  },
  slotMachineLayout: {
    flex: 1,
    justifyContent: "space-evenly",
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
    marginBottom: 2,
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
    flex: 1,
    marginTop: 110,
    alignItems: "center",
    // marginBottom: ,

    // backgroundColor: "pink",
  },

  wordRow: {
    // flex: 1,
    flexDirection: "row",
    marginHOrizontal: 10,

    backgroundColor: "lightYellow",
    alignItems: "center",
    justifyContent: "space-around",
    width: "95%",

    height: "10%",
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
    // flex: 0.05,
    backgroundColor: "pink",
    flexDirection: "row",
    marginTop: -550,
    marginRight: 0,
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
    marginTop: -200,
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
    // backgroundColor: "lightyellow"
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
    flex: 0.5,
    marginTop: -220,
    marginHorizontal: 20,
    // marginBottom: 200,
    // backgroundColor: "lightgreen",
    alignItems: "center",
  },
});
