import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import Card from "../shared/card";
import { globalStyles } from "../styles/global";

const Home = ({ navigation }) => {
  const [glitches, setGlitches] = useState([
    {
      game: "GTAV",
      title: "Free Cars",
      rating: 5,
      body:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum dignissimos corporis repellat, non hic inventore? Aspernatur et quibusdam amet error.",
      key: "1"
    },
    {
      game: "Call of Duty 8",
      title: "Rank Up Fast",
      rating: 4,
      body:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum dignissimos corporis repellat, non hic inventore? Aspernatur et quibusdam amet error.",
      key: "2"
    },
    {
      game: "GTAV",
      title: "Hidden Clothing",
      rating: 3,
      body:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum dignissimos corporis repellat, non hic inventore? Aspernatur et quibusdam amet error.",
      key: "3"
    }
  ]);

  return (
    <View style={globalStyles.container}>
      {/* <Text style={globalStyles.mainText}>Glitches/Methods</Text> */}
      <FlatList
        data={glitches}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("GlitchDetails", item)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.game}</Text>
              <Text style={globalStyles.subtitleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;
