import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { globalStyles } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons';
import uuid from 'uuid';
import Card from '../shared/card';
import GlitchForm from './GlitchForm';

const Home = ({ navigation }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [glitches, setGlitches] = useState([
    {
      game: 'GTAV',
      title: 'Free Cars',
      rating: 5,
      body:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum dignissimos corporis repellat, non hic inventore? Aspernatur et quibusdam amet error.',
      key: '1'
    },
    {
      game: 'Call of Duty 8',
      title: 'Rank Up Fast',
      rating: 4,
      body:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum dignissimos corporis repellat, non hic inventore? Aspernatur et quibusdam amet error.',
      key: '2'
    },
    {
      game: 'GTAV',
      title: 'Hidden Clothing',
      rating: 3,
      body:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum dignissimos corporis repellat, non hic inventore? Aspernatur et quibusdam amet error.',
      key: '3'
    }
  ]);

  const addGlitch = glitch => {
    glitch.key = uuid.v4();
    setGlitches(initialGlitches => {
      return [glitch, ...initialGlitches];
    });
    setModalOpen(false);
  };

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType='slide'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name='close'
              size={24}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
              onPress={() => setModalOpen(false)}
            />
            <GlitchForm addGlitch={addGlitch} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <MaterialIcons
        name='add'
        size={24}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />

      <FlatList
        data={glitches}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('GlitchDetails', item)}
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

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    alignSelf: 'center'
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0
  },
  modalContent: {
    flex: 1
  }
});

export default Home;
