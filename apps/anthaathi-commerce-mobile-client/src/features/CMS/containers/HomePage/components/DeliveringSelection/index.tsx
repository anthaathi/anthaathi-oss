/* eslint-disable react/self-closing-comp */
import * as React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {useIntl} from 'react-intl';
import {Divider, IconButton, Text, useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {HomePageComponentType} from '../../../../types/common';
import CMSBottomSheet from '../../../Core/components/CMSBottomSheet';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export interface DeliveringSelectionProps {
  onPress?: () => void;
  userAddresses: {key: number; title: string; subtitle: string}[];
}

export function DeliveringSelection(props: DeliveringSelectionProps) {
  const intl = useIntl();
  const theme = useTheme();
  const [isVisible, setVisible] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState(0);

  return (
    <View testID="deliveringSelection">
      <TouchableHighlight
        style={{marginVertical: 5}}
        underlayColor={theme.colors.primary}
        onPress={() => {
          setVisible(!isVisible);
        }}>
        <View
          style={[
            styles.root,
            {
              borderStyle: 'solid',
              borderWidth: 1,
              borderColor: theme.colors.primary,
              borderRadius: 4,
              backgroundColor: theme.colors.primaryContainer,
            },
          ]}>
          <View style={{...styles.alignCenter, ...{width: 38}}}>
            <Icon name="map-marker" color={theme.colors.primary} size={24} />
          </View>
          <View style={styles.column}>
            <Text variant="labelMedium">
              {intl.formatMessage({defaultMessage: 'Delivering to'})}
            </Text>
            <Text variant="labelLarge">
              {props.userAddresses[selectedOption]['title']}
            </Text>
            <Text variant="labelLarge" style={{fontSize: 12}}>
              {props.userAddresses[selectedOption]['subtitle']}
            </Text>
          </View>

          <View style={{flexGrow: 1}} />

          <IconButton
            onPress={props.onPress}
            icon="chevron-right"
            iconColor={theme.colors.primary}
          />
        </View>
      </TouchableHighlight>
      <CMSBottomSheet
        bottomSheetTitle={intl.formatMessage({
          defaultMessage: 'Choose delivery location',
        })}
        bottomSheetIconColor="#0A2463"
        bottomSheetStyle={{
          backgroundColor: 'white',
          maxHeight: '40%',
          minHeight: '15%',
          paddingBottom: Platform.OS === 'ios' ? 35 : 0,
          bottom: Platform.OS === 'ios' ? 35 : 0,
        }}
        bottomSheetTitleStyle={{color: '#0A2463'}}
        setBottomSheetVisible={setVisible}
        bottomSheetVisible={isVisible}>
        <ScrollView>
          {props.userAddresses &&
            props.userAddresses.map(
              (
                data: {key: number; title: string; subtitle: string},
                index: number,
              ) => (
                <AddressComponent
                  title={data.title}
                  subtitle={data.subtitle}
                  key={data.key}
                  onPress={() => {
                    setSelectedOption(index);
                    setVisible(!isVisible);
                  }}
                />
              ),
            )}
        </ScrollView>
      </CMSBottomSheet>
    </View>
  );
}

const AddressComponent = ({
  title,
  subtitle,
  onPress,
}: {
  title: string;
  subtitle: string;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <SimpleLineIcons name="location-pin" color={'#000'} size={20} />

        <View style={{marginLeft: 15}}>
          <Text style={{color: '#262626', fontSize: 14, fontWeight: '600'}}>
            {title}
          </Text>
          <Text style={{color: '#828282', fontSize: 12, marginVertical: 5}}>
            {subtitle}
          </Text>
        </View>
      </View>
      <Divider style={{marginVertical: 5}} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 6,
    paddingVertical: 5,
    borderRadius: 12,
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  alignCenter: {
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
});

export const DeliveringSelectionCMSInput = {
  _component: HomePageComponentType.DeliveringSelection,
  component: DeliveringSelection,
};
