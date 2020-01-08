import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Card from "../shared/card";
import { globalStyles, images } from "../styles/global";

const GlitchDetails = ({ navigation }) => {
  const rating = navigation.getParam("rating");

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>
          {navigation.getParam("game")}
        </Text>
        <Text style={globalStyles.subtitleText}>
          {navigation.getParam("title")}
        </Text>
        <Text style={globalStyles.paragraph}>
          {navigation.getParam("body")}
        </Text>
        <View style={styles.rating}>
          <Text>GlitchPost Rating: </Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 14,
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopColor: "#eee"
  }
});

export default GlitchDetails;
