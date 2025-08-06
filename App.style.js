import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  appBodyView: {
    flex: 1,
    marginLeft: 3,
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
  dashboardContainer:{
  marginTop: 20,
    flexDirection: "row", 
    alignItems: "center",
    justifyContent: "space-evenly"


  },
  changeWordsButtonsContainerOuter: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-evenly",
    marginLeft: -17,
  },
  changeWordsButtonsContainer: {
    flexDirection: "column",
    marginTop: 140,
    marginBottom: -115,
    marginLeft: -7,
    marginRight: -5,

    // backgroundColor:"lightyellow",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  spinButtonContainer: {
    width: "97%",
    marginLeft: 5,
    marginBottom: 2,
    // alignItems: "center"
  },
  spinButton: {
    alignItems: "center",
    marginRight: 0,
  },
  nudgeButtonContainer: {
    flexDirection: "row",
    marginTop: 5,
    marginRight: 0,
    width: "88%",
  },
  nudgeButton: {
    flexDirection: "row",
    marginRight: 5,

    padding: 12,
    width: 45,
    color: "green",
  },
  nudgeButtonDown: {},
  arrowIcon: {
    fontWeight: "bold",
    fontSize: 20,
    height: 17,
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
    marginTop: 120,
    marginBottom: -200,

    width: "95%",
    // backgroundColor: "pink",
  },

  wordRow: {
    // flex: 1,
    flexDirection: "row",
    marginHOrizontal: 5,

    backgroundColor: "lightYellow",
    alignItems: "center",
    justifyContent: "space-between",
    width: "84%",

    height: "10%",
  },

  wordButton: {
    paddingVertical: 10,
    // paddingHOrizontal: -5,
    width: 100,
    margin: 2,

    borderRadius: 10,
  },
  // lockedWordButton:{
  //   backgroundColor: "lightblue", 
  // },
  unlockedWordButton:{
    backgroundColor: "aquamarine",

  },
  word: {
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
  },
  cashButtonContainer: {
    marginLeft: 12,
    marginRight: -7,
  },
  cashButton: {
    // marginRight: -2,
    backgroundColor: "lightpink",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  cashButtonText: {
    color: "darkblue",
    fontWeight: "bold",
  },
  cashButtonFeedbackContainer: {
    marginTop: 20,
    marginBottom: -100,

    alignItems: "center",
    // backgroundColor: "lightyellow"
  },
  displaySentenceContainer:{

    backgroundColor: "lightblue",
    marginTop: 110,
    marginBottom: -125,
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
  pointsMessageContainer:{
    flex: 0.5,
marginTop: -300,
// marginBottom: 200,
// backgroundColor: "lightgreen", 
alignItems: "center"

  }

});
