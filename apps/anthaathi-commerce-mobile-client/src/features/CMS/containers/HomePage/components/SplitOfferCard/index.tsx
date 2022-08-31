import {View, Image} from 'react-native';
import React from 'react';
import {useResponsiveValue} from '../../../../utils/useResponsiveValue';
import {Button, Colors, Text} from 'react-native-paper';
import {HomePageComponentType} from '../../../../types/common';

export interface SplitCardOfferProps {
  title: string;
  subtitle: string;
  description?: string;
  image: string;
  buttonTitle: string;
  onPress?: () => void;
}

const SplitOfferCard = (props: SplitCardOfferProps) => {
  const itemWidth = useResponsiveValue(['90%', '60%', '50%', '50%']);
  const itemHeight = useResponsiveValue([240, 280, 320, 320]);
  const itemTwoWidth = useResponsiveValue(['80%', '40%', '50%', '50%']);

  return (
    <View
      style={{
        flexDirection: itemWidth === '90%' ? 'column' : 'row-reverse',
        alignItems: 'center',
        marginVertical: 10,
        marginTop: 48,
        paddingTop: 48,
        paddingBottom: 48,
        backgroundColor: Colors.green100,
      }}
      testID="splitCardOffer">
      <Image
        testID="offerImage"
        source={{
          uri: props.image,
        }}
        style={{
          width: itemWidth,
          height: itemHeight,
        }}
      />
      <View style={{width: itemTwoWidth, alignItems: 'center'}}>
        <Text
          style={{
            color: '#000',
            fontSize: 22,
            fontWeight: 'bold',
            marginVertical: 5,
            paddingTop: 10,
          }}
          variant="titleSmall">
          {props.title}
        </Text>

        <Text
          style={{
            textAlign: 'center',
            color: '#000',
            fontSize: 16,
            fontWeight: '100',
            marginVertical: 10,
          }}
          variant="titleSmall">
          {props.subtitle}
        </Text>
        <Button
          testID="buttonPress"
          mode="contained"
          style={{
            backgroundColor: '#000000',
            borderRadius: 1,
            marginVertical: 5,
          }}
          onPress={props.onPress}>
          {props.buttonTitle}
        </Button>
      </View>
    </View>
  );
};

export default SplitOfferCard;

export const SplitOfferCardCMSInput = {
  _component: HomePageComponentType.SplitOfferCard,
  component: SplitOfferCard,
};
