import * as React from 'react';
import { FlatList, Text, TextInput, View, StyleSheet } from 'react-native';
import restaurauntData from '../assets/restauraunts.json';
import Restaurant from './Restaurant';

export default class SelectRestaurantForm extends React.Component {
  state = {
    searchedRestaurants: restaurauntData['restaurants'],
    restaurantsArray: restaurauntData['restaurants'],
  };

  onSelect = (e, restaurant) => {
    console.log(restaurant);
    this.props.onRestaurantSelect(restaurant);
  };

  onChange = event => {
    const { restaurantsArray } = this.state;
    const input = event.target.value.trim().toLowerCase();
    const newSearchedRestaurants = restaurantsArray.filter(
      restaurant => restaurant.name.toLowerCase().indexOf(input) > -1
    );
    this.setState({
      searchedRestaurants: newSearchedRestaurants,
    });
  };

  render() {
    return (
      <View>
        <Text>
          <h4>
            Fish falling from the sky?! No this isn't some weird apocalyptic
            scenario.
          </h4>
          <h4>
            Flying fish delivers fresh fish and chips directly from the seaside
            to your door via drones. Welcome to the future.
          </h4>
        </Text>
        <TextInput
          placeholder="Enter a Restaurant Name"
          onChange={this.onChange}
          style={styles.restaurantInput}
        />
        <View style={styles.form}>
          <FlatList
            data={this.state.searchedRestaurants}
            renderItem={({ item }) => (
              <Restaurant
                key={item.id}
                name={item.name}
                select={this.onSelect}
              />
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    marginTop: '2%',
    height: '25vh',
    marginBottom: '20%',
  },
  restaurantInput: {
    marginTop: '5%',
    marginBottom: '4%',
    textAlign: 'center',
    height: '5vh',
    border: '2px solid rgb(33, 150, 243)',
  },
});
