import React from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ navigation, title }) {
  const pressHandler = () => {
    navigation.openDrawer();
  };

  return (
    <ImageBackground
      source={require("../assets/game_bg.png")}
      style={styles.header}
    >
      <MaterialIcons
        name="menu"
        size={30}
        style={styles.icon}
        onPress={pressHandler}
      />
      <View style={styles.headerHero}>
        <Image
          source={require("../assets/head_logo.png")}
          style={styles.headerImage}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  headerText: {
    fontFamily: "exo2-bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1
  },
  icon: {
    position: "absolute",
    left: 18
  },
  headerHero: {
    flexDirection: "row"
  },
  headerImage: {
    width: 24,
    height: 24,
    marginHorizontal: 10
  }
});
