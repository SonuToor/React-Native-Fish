import * as React from 'react';
import { Button, View } from 'react-native';

const Restaurant = props => {
  const { name, select } = props;
  return (
    <View>
      <Button title={name} onPress={e => select(e, name)} />
    </View>
  );
};
export default Restaurant;