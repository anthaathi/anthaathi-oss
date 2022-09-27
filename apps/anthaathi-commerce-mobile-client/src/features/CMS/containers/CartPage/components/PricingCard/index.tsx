import {View, Text, TextStyle, StyleProp} from 'react-native';
import React from 'react';
import {Card} from 'react-native-paper';
import {useIntl} from 'react-intl';
import {CartPageComponentType} from '../../../../types/common';

export interface ViewTextProps {
  title: string;
  subtitle: string;
  titleStyle?: StyleProp<TextStyle>;
  subtitleStyle?: StyleProp<TextStyle>;
}

export interface PriceCurrencyProps {
  currency: string;
  price: number;
}
export interface PricingCardProps {
  title?: string;
  subtotal: PriceCurrencyProps;
  discount: PriceCurrencyProps;
  taxAmount: PriceCurrencyProps;
  shippingCharges: PriceCurrencyProps;
  total: PriceCurrencyProps;
}

const PricingCard = (props: PricingCardProps) => {
  const intl = useIntl();

  return (
    <View
      style={{marginHorizontal: 10, marginVertical: 5}}
      testID="pricingCard">
      {props.title && (
        <Text
          style={{
            color: '#364A15',
            fontSize: 16,
            fontWeight: '600',
            marginBottom: 5
          }}>
          {props.title}
        </Text>
      )}

      <Card
        style={{
          borderColor: '#E3E2E7',
          borderWidth: 1,
          borderRadius: 4,
        }}>
        <Card.Content>
          <ViewText
            title={intl.formatMessage({defaultMessage: 'Subtotal'})}
            subtitle={intl.formatNumber(props.subtotal.price, {
              style: 'currency',
              currency: props.subtotal.currency,
            })}
          />
          <ViewText
            title={intl.formatMessage({defaultMessage: 'Tax (5% VAT)'})}
            subtitle={intl.formatNumber(props.taxAmount.price, {
              style: 'currency',
              currency: props.taxAmount.currency,
            })}
          />
          <ViewText
            title={intl.formatMessage({defaultMessage: 'Discount'})}
            subtitle={intl.formatNumber(props.discount.price, {
              style: 'currency',
              currency: props.discount.currency,
            })}
          />
          <ViewText
            title={intl.formatMessage({defaultMessage: 'Shipping Charges.'})}
            subtitle={intl.formatNumber(props.shippingCharges.price, {
              style: 'currency',
              currency: props.shippingCharges.currency,
            })}
            subtitleStyle={{fontWeight: '500'}}
          />
          <ViewText
            title={intl.formatMessage({defaultMessage: 'Total'})}
            subtitle={intl.formatNumber(props.total.price, {
              style: 'currency',
              currency: props.total.currency,
            })}
            titleStyle={{fontSize: 16, fontWeight: '700', color: '#364A15'}}
            subtitleStyle={{fontSize: 16, fontWeight: '700', color: '#008D3E'}}
          />
        </Card.Content>
      </Card>
    </View>
  );
};

const ViewText = ({
  title,
  subtitle,
  titleStyle,
  subtitleStyle,
}: ViewTextProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 3,
        marginVertical: 5,
      }}>
      <Text
        testID="title"
        style={[{color: '#808080', fontSize: 14}, titleStyle]}>
        {title}
      </Text>
      <Text
        testID="subtitle"
        style={[
          {color: '#364A15', fontSize: 14, fontWeight: '600'},
          subtitleStyle,
        ]}>
        {subtitle}
      </Text>
    </View>
  );
};

export default PricingCard;

export const PricingCardCMSInput = {
  _component: CartPageComponentType.PricingCard,
  component: PricingCard,
};
