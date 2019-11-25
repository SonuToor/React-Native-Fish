import * as React from 'react';

import {
  Button,
  FlatList,
  Text,
  TextInput,
  View,
  StyleSheet,
} from 'react-native';

const OrderDetailsForm = props => {
  const { headBack, peas, fish, restaurant } = props;
  return (
    <View style={styles.form}>
      <Text>
        <h2>{props.restaurant}</h2>
        <h3>Review your order.</h3>
        <View style={styles.orderReview}>
          <View>
            <h5>Type of fish</h5>
            {props.fish}
          </View>
          <View>
            <h5>Mushy peas</h5>
            {props.peas}
          </View>
        </View>
        Add delivery instructions.
      </Text>
      <TextInput placeholder="Enter name" style={styles.singleLineInput} />
      <TextInput
        placeholder="Enter street address"
        style={styles.singleLineInput}
      />
      <TextInput placeholder="Enter post code" style={styles.singleLineInput} />
      <TextInput
        placeholder="Enter special delivery instructions"
        multiline={true}
        numberOfLines={4}
        style={styles.multilineInput}
      />
      <View style={styles.button}>
      <Button title="Back" onPress={headBack} />
      </View>
      <View style={styles.button}>
      <Button title="Submit Order" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    textAlign: 'center',
  },
  orderReview: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '10%'
  },

  singleLineInput: {
    marginTop: '5%',
    height: '5vh',
    width: '100%',
    border: '2px solid rgb(33, 150, 243)',
  },
  multilineInput: {
    border: '2px solid rgb(33, 150, 243)',
    marginTop: '5%',
    marginBottom: '2%',
  },
  button: {
    marginBottom: '5%',
    marginTop: '5%',
  }
});

export default OrderDetailsForm;
