import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import OrderDetailsForm from './components/orderDetailsForm';
import OrderDeliveryForm from './components/OrderDeliveryForm';
import SelectRestaurantForm from './components/SelectRestaurantForm';

export default class App extends React.Component {
  state = {
    showRestaurantForm: true,
    showOrderForm: false,
    showDeliveryForm: false,
    restaurantSelected: '',
    fish: 'Cod',
    peas: 'Yes',
  };

  updateSelectedRestaurant = restaurant => {
    this.setState({
      showRestaurantForm: false,
      showOrderForm: true,
      restaurantSelected: restaurant,
    });
  };

  updateFishSelection = fish => {
    this.setState({
      fish: fish,
    });
  };

  updatePeasSelection = answer => {
    this.setState({
      peas: answer,
    });
  };

  returnToRestaurantForm = () => {
    this.setState({
      showRestaurantForm: true,
      showOrderForm: false,
      restaurantSelected: '',
    });
  };

  returnToOrderDetailsForm = () => {
    this.setState({
      showOrderForm: true,
      showDeliveryForm: false,
    });
  };

  updateDeliveryForm = () => {
    this.setState({
      showOrderForm: false,
      showDeliveryForm: true,
    });
  };

  render() {
    const {
      showRestaurantForm,
      showOrderForm,
      showDeliveryForm,
      restaurantSelected,
      fish,
      peas,
    } = this.state;

    return (
      <View style={styles.container}>
        <Text>
          <h1>Flying Fish</h1>
        </Text>
        {showRestaurantForm === true ? (
          <SelectRestaurantForm
            onRestaurantSelect={this.updateSelectedRestaurant}
          />
        ) : null}
        {showOrderForm === true ? (
          <OrderDetailsForm
            restaurant={restaurantSelected}
            headBack={this.returnToRestaurantForm}
            handleFish={this.updateFishSelection}
            handleMushyPeas={this.updatePeasSelection}
            finishedOrderDetails={this.updateDeliveryForm}
          />
        ) : null}
        {showDeliveryForm === true ? (
          <OrderDeliveryForm
            restaurant={restaurantSelected}
            fish={fish}
            peas={peas}
            headBack={this.returnToOrderDetailsForm}
          />
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginTop: '5%',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
