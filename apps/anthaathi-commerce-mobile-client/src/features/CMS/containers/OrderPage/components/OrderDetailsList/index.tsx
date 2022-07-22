import {Pressable, View} from 'react-native';
import React from 'react';
import {Card, Text} from 'react-native-paper';
import {useIntl} from 'react-intl';
import {OrderPageComponentType} from '../../../../types/common';

export interface OrderDetailsProps {
  orderId: string;
  dateOfOrder: string;
  numberOrderItems: number;
  totalPrice: number;
  currency: string;
}

export interface OrderDetailsListProps {
  orders: OrderDetailsProps[];
}

const OrderDetailsList = (props: OrderDetailsListProps) => {
  return (
    <View style={{marginHorizontal: 10}} testID="orderDetailsList">
      {props.orders.map((order, index) => {
        return <OrderDetails key={index} order={order} />;
      })}
    </View>
  );
};

const OrderDetails = ({order}: {order: OrderDetailsProps}) => {
  const intl = useIntl();

  return (
    <Card
      style={{
        borderColor: '#E3E2E7',
        borderWidth: 1,
        borderRadius: 4,
        marginVertical: 5,
      }}
      testID="personalInformation">
      <Card.Content>
        <InformationRenderer
          label={intl.formatMessage({defaultMessage: 'Order ID'})}
          name={order.orderId}
        />
        <InformationRenderer
          label={intl.formatMessage({defaultMessage: 'Date'})}
          name={order.dateOfOrder}
        />
        <InformationRenderer
          label={intl.formatMessage({defaultMessage: 'Order Items'})}
          name={order.numberOrderItems + ' Items'}
        />
        <InformationRenderer
          label={intl.formatMessage({defaultMessage: 'Total Bill'})}
          name={intl.formatNumber(order.totalPrice, {
            style: 'currency',
            currency: order.currency,
          })}
        />
        <Pressable onPress={() => console.log('Pressed')}>
          <Text
            style={{
              color: '#008D3E',
              fontSize: 14,
              fontWeight: '700',
              marginVertical: 10,
              marginRight: 20,
            }}>
            {intl.formatMessage({defaultMessage: 'Reorder Items'})}
          </Text>
        </Pressable>
      </Card.Content>
    </Card>
  );
};

const InformationRenderer = ({label, name}: {label: string; name: string}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
      }}>
      <Text
        testID="labelInfoRendererId"
        style={{color: '#808080', fontSize: 14, fontWeight: '400'}}>
        {label + ':  '}
      </Text>
      <Text
        testID="nameInfoRendererId"
        style={{color: '#364A15', fontSize: 14, fontWeight: '500'}}>
        {name}
      </Text>
    </View>
  );
};

export default OrderDetailsList;

export const OrderDetailsListCMSInput = {
  _component: OrderPageComponentType.OrderDetailsList,
  component: OrderDetailsList,
};
