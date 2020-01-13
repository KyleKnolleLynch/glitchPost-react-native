import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';

const GlitchForm = ({ addGlitch }) => {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ game: '', title: '', body: '', rating: '' }}
        onSubmit={(values, actions) => {
          actions.resetForm();
         addGlitch(values);
        }}
      >
        {formikProps => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder='Game Title'
              onChangeText={formikProps.handleChange('game')}
              value={formikProps.values.game}
            />
            <TextInput
              style={globalStyles.input}
              placeholder='Glitch/Method Title'
              onChangeText={formikProps.handleChange('title')}
              value={formikProps.values.title}
            />
            <TextInput
              multiline
              style={globalStyles.input}
              placeholder='Glitch/Method Details'
              onChangeText={formikProps.handleChange('body')}
              value={formikProps.values.body}
            />
            <TextInput
              style={globalStyles.input}
              placeholder='Rating (1-5)'
              onChangeText={formikProps.handleChange('rating')}
              value={formikProps.values.rating}
              keyboardType='numeric'
            />

            <Button title='submit' color='#FF720B' onPress={formikProps.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default GlitchForm;
