import React from "react";
import { View, Text } from "react-native";
import Card from "../shared/card";
import { globalStyles } from "../styles/global";

const GlitchDetails = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>
          {navigation.getParam("game")}
        </Text>
        <Text style={globalStyles.subtitleText}>
          {navigation.getParam("title")}
        </Text>
        <Text>Rating: {navigation.getParam("rating")}</Text>
        <Text style={globalStyles.paragraph}>
          {navigation.getParam("body")}
        </Text>
      </Card>
    </View>
  );
};

export default GlitchDetails;
