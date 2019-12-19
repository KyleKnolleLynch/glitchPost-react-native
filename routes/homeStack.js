import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import GlitchDetails from '../screens/GlitchDetails';

const screens = {
  Home: {
    screen: Home 
  },
  GlitchDetails: {
    screen: GlitchDetails
  }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack)