import {View, GestureResponderEvent, ImageBackground} from 'react-native';
import React from 'react';
import {Text, useTheme, TouchableRipple} from 'react-native-paper';
import {MD3Colors} from 'react-native-paper/lib/typescript/types';
import {HomePageComponentType} from '../../../../types/common';

export interface HeroSlideProps {
  backgroundImageSrc: string;
  title: string;
  subTitle: string;
  buttonTitle: string;
  handlePress?: () => void;
}

const HeroSlide = (props: HeroSlideProps) => {
  const theme = useTheme();

  return (
    <View style={{marginVertical: 10}} testID="heroSlide">
      <ImageBackground
        testID="backgroundImage"
        source={{
          uri: props.backgroundImageSrc,
        }}
        style={{
          height: 240,
          width: '100%',
        }}>
        <View
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(0,0,0,0.1)',
          }}>
          <View
            style={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'flex-end',
              marginHorizontal: 20,
              marginVertical: 30,
            }}>
            <Text
              style={{
                color: (theme.colors as MD3Colors).background,
                fontSize: 24,
                fontWeight: 'bold',
                marginVertical: 5,
                paddingTop: 10,
              }}
              variant="titleSmall">
              {props.title}
            </Text>

            <Text
              style={{
                color: (theme.colors as MD3Colors).background,
                fontSize: 16,
                fontWeight: '400',
                marginVertical: 10,
              }}
              variant="titleSmall">
              {props.subTitle}
            </Text>
            {props.buttonTitle && (
              <HeroSlideButton
                label={props.buttonTitle}
                onPress={props.handlePress}
              />
            )}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

function HeroSlideButton(props: {
  onPress: ((e: GestureResponderEvent) => void) | undefined;
  label: string;
}) {
  const theme = useTheme();

  return (
    <TouchableRipple testID="heroSlideOnPress" onPress={props.onPress}>
      <View
        style={{
          backgroundColor: (theme.colors as MD3Colors).background,
          borderRadius: 1,
        }}>
        <Text
          testID="buttonTitle"
          style={{
            color: (theme.colors as MD3Colors).onBackground,
            paddingLeft: 18,
            paddingRight: 18,
            paddingTop: 8,
            paddingBottom: 8,
            fontWeight: '700',
          }}
          variant="labelSmall">
          {props.label}
        </Text>
      </View>
    </TouchableRipple>
  );
}

export default HeroSlide;

export const HeroSlideCMSInput = {
  _component: HomePageComponentType.HeroSlide,
  component: HeroSlide,
};
