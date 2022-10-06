import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {Card, Divider, useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CheckOutPageComponentType} from '../../../../types/common';

type PaymentOptions = {
  key: string;
  name: string;
};

export interface PaymentMethodProps {
  title: string;
  options: PaymentOptions[];
}

const PaymentMethodSelection = (props: PaymentMethodProps) => {
  const theme = useTheme();
  const [checkedKey, setCheckedKey] = useState('');
  return (
    <View style={{marginHorizontal: 10}} testID="paymentMethodSelection">
      <Text
        style={{
          color: theme.colors.titleTextColor,
          fontSize: 16,
          fontWeight: '600',
        }}>
        {props.title}
      </Text>

      <Card
        style={{
          borderColor: theme.colors.cardBorderColor,
          borderWidth: 1,
          borderRadius: 10,
          marginVertical: 5,
        }}>
        <Card.Content>
          {props.options.map(item => {
            return (
              <OptionItem
                key={item.key}
                item={item}
                checkedKey={checkedKey}
                setCheckedKey={setCheckedKey}
              />
            );
          })}
        </Card.Content>
      </Card>
    </View>
  );
};

const OptionItem = ({
  item,
  checkedKey,
  setCheckedKey,
}: {
  item: PaymentOptions;
  checkedKey: string;
  setCheckedKey: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const theme = useTheme();
  return (
    <View>
      <Pressable
        onPress={() => {
          setCheckedKey(item.key);
        }}>
        <View
          style={{
            marginVertical: 10,
            flexDirection: 'row',
          }}>
          <Icon
            name={item.key === checkedKey ? 'circle-slice-8' : 'circle-outline'}
            color={theme.colors.greenTextColor}
            size={18}
          />
          <Text
            style={{
              marginLeft: 10,
              color: theme.colors.titleTextColor,
              fontSize: 14,
              fontWeight: item.key === checkedKey ? '600' : '400',
            }}>
            {item.name}
          </Text>
        </View>
      </Pressable>
      <Divider
        style={{
          backgroundColor: theme.colors.cardBorderColor,
          marginVertical: 3,
        }}
      />
    </View>
  );
};

export default PaymentMethodSelection;

export const PaymentMethodSelectionCMSInput = {
  _component: CheckOutPageComponentType.PaymentMethodSelection,
  component: PaymentMethodSelection,
};
