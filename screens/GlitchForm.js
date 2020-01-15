import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';

const glitchSchema = yup.object({
  game: yup
    .string()
    .required()
    .min(3),
  title: yup
    .string()
    .required()
    .min(4),
  body: yup
    .string()
    .required()
    .min(10),
  rating: yup
    .string()
    .required()
    .test('is-num-1-5', 'Rating must be a number 1 - 5!', val => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    })
});

const GlitchForm = ({ addGlitch }) => {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ game: '', title: '', body: '', rating: '' }}
        validationSchema={glitchSchema}
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
              onBlur={formikProps.handleBlur('game')}
            />
            <Text style={globalStyles.errorText}>
              {formikProps.touched.game && formikProps.errors.game}
            </Text>
            <TextInput
              style={globalStyles.input}
              placeholder='Glitch/Method Title'
              onChangeText={formikProps.handleChange('title')}
              value={formikProps.values.title}
              onBlur={formikProps.handleBlur('title')}
            />
              <Text style={globalStyles.errorText}>
              {formikProps.touched.title && formikProps.errors.title}
            </Text>
            <TextInput
              multiline
              style={globalStyles.input}
              placeholder='Glitch/Method Details'
              onChangeText={formikProps.handleChange('body')}
              value={formikProps.values.body}
              onBlur={formikProps.handleBlur('body')}
            />
              <Text style={globalStyles.errorText}>
              {formikProps.touched.body && formikProps.errors.body}
            </Text>
            <TextInput
              style={globalStyles.input}
              placeholder='Rating (1-5)'
              onChangeText={formikProps.handleChange('rating')}
              value={formikProps.values.rating}
              keyboardType='numeric'
              onBlur={formikProps.handleBlur('rating')}
            />
              <Text style={globalStyles.errorText}>
              {formikProps.touched.rating && formikProps.errors.rating}
            </Text>
            <Button
              title='submit'
              color='#FF720B'
              onPress={formikProps.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default GlitchForm;
