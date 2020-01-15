import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  // mainText: {
  //   fontFamily: "exo2-bold",
  //   fontSize: 16,
  //   color: '#FF720B',
  //   marginBottom: 12
  // },
  titleText: {
    fontFamily: 'exo2-bold',
    fontSize: 20,
    color: '#333'
  },
  subtitleText: {
    fontFamily: 'exo2-regular',
    fontSize: 16,
    color: '#333'
  },
  paragraph: {
    fontFamily: 'exo2-regular',
    fontSize: 14,
    marginVertical: 8,
    lineHeight: 20
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#eee',
    padding: 10,
    fontSize: 18
  },
  errorText: {
    marginTop: 5,
    marginBottom: 14,
    color: 'crimson',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export const images = {
  ratings: {
    '1': require('../assets/rating-1.png'),
    '2': require('../assets/rating-2.png'),
    '3': require('../assets/rating-3.png'),
    '4': require('../assets/rating-4.png'),
    '5': require('../assets/rating-5.png')
  }
};
