import {View} from 'react-native';
import React from 'react';
import {Searchbar, useTheme} from 'react-native-paper';

export interface SearchInputProps {
  placeholder?: string;
}

const SearchInput = (props: SearchInputProps) => {
  const theme = useTheme();
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
        iconColor={theme.colors.titleTextColor}
        placeholder={props.placeholder}
        onChangeText={query => setSearchQuery(query)}
        value={searchQuery}
      />
    </View>
  );
};

export default SearchInput;
