import * as React from 'react';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';

const WkSearchbar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <View style={{ flex: 1, minWidth: 200 }}>
      <Searchbar placeholder="Quick search" value={searchQuery} onChangeText={setSearchQuery} />
    </View>
  );
};

export default WkSearchbar;
