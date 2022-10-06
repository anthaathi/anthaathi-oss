import {View, Text, Pressable, Image} from 'react-native';
import React from 'react';
import {CartPageComponentType} from '../../../../types/common';
import {useIntl} from 'react-intl';
import {Button, Card, ProgressBar, useTheme} from 'react-native-paper';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export interface CartCardProps {
  title: string;
  handlePress?: () => void;
  buyAgainPress?: () => void;
  statusIcon: string;
  statusTitle: string;
  orderStatus: boolean; // if delivered true
  deliveryDate: string;
  deliveryBy: string;
  noOfItems: string;
  imageList: string[];
}

const CartCard = ({
  title,
  handlePress,
  buyAgainPress,
  statusIcon,
  statusTitle,
  deliveryDate,
  orderStatus,
  deliveryBy,
  noOfItems,
  imageList,
}: CartCardProps) => {
  const intl = useIntl();
  const theme = useTheme();
  return (
    <Card
      style={{
        marginHorizontal: 10,
        borderColor: theme.colors.cardBorderColor,
        borderWidth: 1,
        borderRadius: 4,
        marginVertical: 5,
      }}
      testID="cartCard">
      <Card.Content>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: theme.colors.titleTextColor,
              fontSize: 16,
              fontWeight: '600',
            }}>
            {title}
          </Text>

          {handlePress && (
            <Pressable onPress={handlePress} testID="handlePressBasketItem">
              <Text
                variant="titleMedium"
                style={{
                  marginBottom: 9,
                  textDecorationLine: 'underline',
                  fontSize: 14,
                  color: theme.colors.greenTextColor,
                }}>
                {intl.formatMessage({defaultMessage: 'View Details'})}
              </Text>
            </Pressable>
          )}
        </View>
        <View style={{flexDirection: 'row', marginVertical: 5}}>
          <SimpleLineIcons
            name={statusIcon}
            size={18}
            color={theme.colors.primary}
          />
          <Text
            style={{
              fontSize: 14,
              color: theme.colors.primary,
              fontWeight: '400',
              marginLeft: 10,
            }}>
            {statusTitle}
          </Text>
        </View>
        <ProgressBar
          progress={orderStatus ? 1 : 0.5}
          color={theme.colors.primary}
        />
        <View style={{marginVertical: 5}}>
          <TextData
            title={intl.formatMessage({defaultMessage: 'Delivered on'})}
            subtitle={deliveryDate}
          />
          <TextData
            title={intl.formatMessage({defaultMessage: 'Sold by'})}
            subtitle={deliveryBy}
          />
        </View>
        <View style={{marginVertical: 5}}>
          <Text
            style={{
              color: theme.colors.titleTextColor,
              fontSize: 14,
              fontWeight: '600',
              marginVertical: 5,
            }}>
            {noOfItems}
          </Text>
          <View style={{flexDirection: 'row'}}>
            {imageList.map((imageUrl, index) => (
              <Image
                key={index}
                source={{uri: imageUrl}}
                style={{height: 35, width: 25, marginRight: 5, borderRadius: 2}}
              />
            ))}
          </View>
        </View>

        {orderStatus && (
          <Button
            style={{marginTop: 8, borderRadius: 4}}
            onPress={buyAgainPress}
            mode="contained">
            {intl.formatMessage({defaultMessage: 'Buy Again'})}
          </Button>
        )}
      </Card.Content>
    </Card>
  );
};

const TextData = ({title, subtitle}: {title: string; subtitle: string}) => {
  const theme = useTheme();
  return (
    <View style={{flexDirection: 'row'}}>
      <Text
        style={{
          fontSize: 12,
          color: theme.colors.titleTextColor,
          fontWeight: '400',
        }}>
        {title}
      </Text>

      <Text
        style={{
          fontSize: 12,
          color: theme.colors.titleTextColor,
          fontWeight: '600',
          marginLeft: 5,
        }}>
        {subtitle}
      </Text>
    </View>
  );
};

export default CartCard;

export const CartCardCMSInput = {
  _component: CartPageComponentType.CartCard,
  component: CartCard,
};
