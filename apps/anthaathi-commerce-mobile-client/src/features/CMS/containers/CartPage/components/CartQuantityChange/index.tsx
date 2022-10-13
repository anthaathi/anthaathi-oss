import {IconButton, Text, useTheme} from 'react-native-paper';
import {View} from 'react-native';
import * as React from 'react';
import {useState} from 'react';

const CartQuantityChange = ({
  trashIcon,
  onChangeQuantity,
  initialValue = 0,
}: {
  id: number;
  initialValue?: number;
  trashIcon?: boolean;
  onChangeQuantity: (input: number) => void;
}) => {
  const [quantity, setQuantity] = useState(initialValue);
  const theme = useTheme();

  function increaseValue() {
    setQuantity(prev => {
      return prev + 1;
    });
    onChangeQuantity(quantity + 1);
  }

  function decreaseValue() {
    setQuantity(prev => {
      if (prev === 0) {
        return prev;
      }
      return prev - 1;
    });
    onChangeQuantity(quantity - 1);
  }

  return (
    <View
      style={{
        width: 110,
        flexDirection: 'row',
        backgroundColor: '#F1F9F4',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 35,
        marginVertical: 10,
        borderRadius: 50,
      }}>
      <IconButton
        style={{
          borderRadius: 50,
          height: 35,
          marginLeft: 0,
          width: 35,
          backgroundColor: '#D4EDDD',
        }}
        icon={quantity === 1 && trashIcon ? 'delete' : 'minus'}
        iconColor={theme.colors.greenTextColor}
        size={20}
        onPress={() => {
          decreaseValue();
        }}
      />
      <Text
        style={{
          marginHorizontal: 5,
          fontSize: 14,
          color: theme.colors.titleTextColor,
          fontWeight: '700',

          textAlign: 'center',
        }}>
        {quantity}
      </Text>
      <IconButton
        style={{
          borderRadius: 50,
          height: 35,
          marginRight: 0,
          backgroundColor: '#D4EDDD',
          width: 35,
        }}
        icon="plus"
        iconColor={theme.colors.greenTextColor}
        size={20}
        onPress={() => {
          increaseValue();
        }}
      />
    </View>
  );
};

export default CartQuantityChange;
