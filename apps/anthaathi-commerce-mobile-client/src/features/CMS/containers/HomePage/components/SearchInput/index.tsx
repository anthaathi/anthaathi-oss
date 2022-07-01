import {View} from 'react-native';
import React from 'react';
import {Searchbar} from 'react-native-paper';

export interface SearchInputProps {
  placeholder?: string;
}

const SearchInput = (props: SearchInputProps) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <View>
      <Searchbar
        style={{
          backgroundColor: '#EDFBF0',
          marginBottom: 10,
          marginHorizontal: 10,
        }}
        inputStyle={{fontSize: 16, color: '#EDFBF0'}}
        iconColor="#364A15"
        placeholder={props.placeholder}
        onChangeText={query => setSearchQuery(query)}
        value={searchQuery}
      />
    </View>
  );
};

export default SearchInput;
