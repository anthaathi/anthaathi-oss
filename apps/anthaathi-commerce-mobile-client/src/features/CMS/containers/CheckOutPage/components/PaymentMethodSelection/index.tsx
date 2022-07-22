import React, {useState} from 'react';
import {Pressable, View} from 'react-native';
import {Card, Divider, Text} from 'react-native-paper';
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
  const [checkedKey, setCheckedKey] = useState('');
  return (
    <View style={{marginHorizontal: 10}} testID="paymentMethodSelection">
      <Text style={{color: '#364A15', fontSize: 16, fontWeight: '600'}}>
        {props.title}
      </Text>

      <Card
        style={{
          borderColor: '#E3E2E7',
          borderWidth: 1,
          borderRadius: 4,
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
  return (
    <View>
      <Pressable
        onPress={() => {
          setCheckedKey(item.key);
        }}>
        <View
          style={{
            marginVertical: 7,
            flexDirection: 'row',
          }}>
          <Icon
            name={item.key === checkedKey ? 'circle-slice-8' : 'circle-outline'}
            color="#008D3E"
            size={18}
          />
          <Text
            style={{
              marginLeft: 10,
              color: '#364A15',
              fontSize: 14,
              fontWeight: item.key === checkedKey ? '600' : '400',
            }}>
            {item.name}
          </Text>
        </View>
      </Pressable>
      <Divider style={{backgroundColor: '#E3E2E7', marginVertical: 3}} />
    </View>
  );
};

export default PaymentMethodSelection;

export const PaymentMethodSelectionCMSInput = {
  _component: CheckOutPageComponentType.PaymentMethodSelection,
  component: PaymentMethodSelection,
};
