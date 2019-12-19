import React, { useState } from "react";
import * as Font from "expo-font";
import Home from "./screens/Home";
import { AppLoading } from "expo";
import Navigator from './routes/homeStack';

const getFonts = () =>
  Font.loadAsync({
    "exo2-regular": require("./assets/fonts/Exo2-Regular.ttf"),
    "exo2-bold": require("./assets/fonts/Exo2-Bold.ttf"),
    "exo2-lightItalic": require("./assets/fonts/Exo2-LightItalic.ttf")
  });

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return <Navigator />;
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
};

export default App;
