import * as React from 'react';
import {CommonPlacement, HomePageComponentType} from '../../../../types/common';
import {GestureResponderEvent, Image, View} from 'react-native';
import {Text, TouchableRipple, useTheme} from 'react-native-paper';
import {MD3Colors} from 'react-native-paper/lib/typescript/types';
import {
  ResponsiveInput,
  useResponsiveValue,
} from '../../../../utils/useResponsiveValue';

export interface PromotionalGridProps {
  items: PromotionalGridItem[];
}

export interface PromotionalGridItem {
  subHeading: string;
  heading: string;
  text: string;
  button1Text: string;
  onPress1?: () => void;
  button2Text?: string;
  onPress2?: () => void;
  image: string;
  videoURL?: string;
  width?: ResponsiveInput<'33%' | '50%' | '100%'>;
  height: ResponsiveInput<number>;
  textAlignment?: CommonPlacement;
  textColor?: string;
  key: string;
  paddingLeft?: ResponsiveInput<number>;
  paddingRight?: ResponsiveInput<number>;
  paddingBottom?: ResponsiveInput<number>;
  paddingTop?: ResponsiveInput<number>;
}

export default function PromotionalGrid(props: PromotionalGridProps) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}
      testID="promotionalGrid">
      {props.items.map(item => {
        return <PromotionalGridItemRenderer key={item.key} item={item} />;
      })}
    </View>
  );
}

/* A Component that returns a button. */
function PromotionalGridButton(props: {
  onPress: ((e: GestureResponderEvent) => void) | undefined;
  label: string;
}) {
  const theme = useTheme();

  return (
    <TouchableRipple onPress={props.onPress}>
      <View style={{backgroundColor: (theme.colors as MD3Colors).background}}>
        <Text
          style={{
            color: (theme.colors as MD3Colors).onBackground,
            paddingLeft: 18,
            paddingRight: 18,
            paddingTop: 8,
            paddingBottom: 8,
            fontWeight: 'bold',
          }}
          variant="labelSmall">
          {props.label}
        </Text>
      </View>
    </TouchableRipple>
  );
}

function PromotionalGridItemRenderer({item}: {item: PromotionalGridItem}) {
  const theme = useTheme();

  const itemWidth = useResponsiveValue(item.width ?? '33%');
  const itemHeight = useResponsiveValue(item.height);
  const paddingLeft = useResponsiveValue(item.paddingLeft ?? 12);
  const paddingRight = useResponsiveValue(item.paddingRight ?? 12);
  const paddingTop = useResponsiveValue(item.paddingTop ?? 12);
  const paddingBottom = useResponsiveValue(item.paddingBottom ?? 12);

  return (
    <View
      style={{
        width: itemWidth,
        paddingLeft: paddingLeft,
        paddingRight: paddingRight,
        paddingTop: paddingTop,
        paddingBottom: paddingBottom,
      }}>
      <View
        style={{
          height: itemHeight,
        }}>
        <Image
          source={{
            uri: item.image,
          }}
          style={{
            position: 'absolute',
            height: '100%' as never,
            width: '100%' as never,
          }}
        />

        <View
          style={{
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              textAlign: item.textAlignment ?? 'center',
              color: (theme.colors as MD3Colors).onPrimary,
              marginBottom: 6,
            }}
            variant="titleSmall">
            {item.subHeading}
          </Text>
          <Text
            style={{
              textAlign: item.textAlignment ?? 'center',
              color: (theme.colors as MD3Colors).onPrimary,
              marginBottom: 6,
            }}
            variant="titleLarge">
            {item.heading}
          </Text>
          <Text
            style={{
              textAlign: item.textAlignment ?? 'center',
              color: (theme.colors as MD3Colors).onPrimary,
              marginBottom: 12,
            }}
            variant="bodyMedium">
            {item.text}
          </Text>
        </View>

        {(item.button1Text || item.button2Text) && (
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              paddingBottom: 12,
            }}>
            {item.button1Text && (
              <PromotionalGridButton
                label={item.button1Text}
                onPress={item.onPress1}
              />
            )}
            {item.button2Text && (
              <>
                <View style={{width: 12}} />
                <PromotionalGridButton
                  label={item.button2Text}
                  onPress={item.onPress1}
                />
              </>
            )}
          </View>
        )}
      </View>
    </View>
  );
}

export const PromotionalGridCMSInput = {
  _component: HomePageComponentType.PromotionalGrid,
  component: PromotionalGrid,
};
