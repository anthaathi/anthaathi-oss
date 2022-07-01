import {View, Text, TextStyle, StyleProp} from 'react-native';
import React from 'react';
import {Card} from 'react-native-paper';
import {useIntl} from 'react-intl';

export interface ViewTextProps {
  title: string;
  subtitle: string;
  titleStyle?: StyleProp<TextStyle>;
  subtitleStyle?: StyleProp<TextStyle>;
}
const PricingCard = () => {
  const intl = useIntl();

  return (
    <Card
      style={{
        marginHorizontal: 10,
        borderColor: '#E3E2E7',
        borderWidth: 1,
        borderRadius: 4,
        marginVertical: 5,
      }}>
      <Card.Content>
        <ViewText
          title={intl.formatMessage({defaultMessage: 'Subtotal'})}
          subtitle={'AED 00.00'}
        />
        <ViewText
          title={intl.formatMessage({defaultMessage: 'Discount'})}
          subtitle={'AED 00.00'}
        />
        <ViewText
          title={intl.formatMessage({defaultMessage: 'Promo Discount'})}
          subtitle={'AED 00.00'}
        />
        <ViewText
          title={intl.formatMessage({defaultMessage: 'Shipping Charges.'})}
          subtitle={'Free'}
          subtitleStyle={{fontWeight: '500', color: '#E94040'}}
        />
        <ViewText
          title={intl.formatMessage({defaultMessage: 'Promo Discount'})}
          subtitle={'AED 00.00'}
          titleStyle={{fontSize: 16, fontWeight: '700', color: '#364A15'}}
          subtitleStyle={{fontSize: 16, fontWeight: '700', color: '#008D3E'}}
        />
      </Card.Content>
    </Card>
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
      <Text style={[{color: '#808080', fontSize: 14}, titleStyle]}>
        {title}
      </Text>
      <Text
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
