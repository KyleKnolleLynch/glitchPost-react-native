import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/Home";
import GlitchDetails from "../screens/GlitchDetails";
import Header from "../shared/header";
import React from "react";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} title={"GlitchPost"} />
        )
      };
    }
  },
  GlitchDetails: {
    screen: GlitchDetails,
    navigationOptions: {
      title: "Glitch Details"
    }
  }
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "#eee", height: 60 }
  }
});

export default HomeStack;
