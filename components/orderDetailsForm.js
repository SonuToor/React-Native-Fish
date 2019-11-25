import * as React from 'react';
import {
  Button,
  FlatList,
  Text,
  TextInput,
  Picker,
  View,
  StyleSheet,
} from 'react-native';
import Constants from 'expo-constants';

const OrderDetailsForm = props => {
  return (
    <View style={styles.orderForm}>
      <Text>
        <h2>{props.restaurant}</h2>
        <h4>Customize your order!</h4>
      </Text>
      <View style={styles.customize}>
        <Text>
          <p>What sort of fish?</p>
        </Text>
        <Picker onValueChange={itemValue => props.handleFish(itemValue)}>
          <Picker.Item label="Cod" value="Cod" />
          <Picker.Item label="Halibut" value="Halibut" />
        </Picker>
        <Text>
          <p>Add Mushy Peas?</p>
        </Text>
        <Picker onValueChange={itemValue => props.handleMushyPeas(itemValue)}>
          <Picker.Item label="Yes" value="Yes" />
          <Picker.Item label="No" value="No" />
        </Picker>
      </View>
      <View style={styles.button}>
        <Button title="Back" onPress={props.headBack} />
      </View>
      <View style={styles.button}>
        <Button title="Delivery Details" onPress={props.finishedOrderDetails} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  orderForm: {
    textAlign: 'center',
  },
  button: {
    marginBottom: '5%'
  },
  customize: {
    marginBottom: '10%',
  },
});

export default OrderDetailsForm;
