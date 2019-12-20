import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  mainText: {
    fontFamily: "exo2-bold",
    fontSize: 30,
    color: '#FF720B',
    marginBottom: 12
  },
  titleText: {
    fontFamily: "exo2-bold",
    fontSize: 18,
    color: '#333'
  },
  subtitleText: {
    fontFamily: 'exo2-regular',
    fontSize: 15,
    color: '#333'
  },
  listItem: {
    backgroundColor: '#EBB60E',
    marginVertical: 12,
    padding: 10,
    borderRadius: 5
  },  
  paragraph: {
    marginVertical: 8,
    lineHeight: 20
  }
});
