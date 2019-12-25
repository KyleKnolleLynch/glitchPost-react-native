import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/Home";
import GlitchDetails from "../screens/GlitchDetails";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: "GlitchPost"
    }
  },
  GlitchDetails: {
    screen: GlitchDetails,
    navigationOptions: {
      title: "Glitch Getails"
    }
  }
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: "#eee", height: 60 }
  }
});

export default HomeStack;
