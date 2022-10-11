import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import {RootStackParamList} from '../../types/Route';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import CMSRenderer from '../../features/CMS';
import {CoreComponentType} from '../../features/CMS/types/common';
import {Button, Divider, TextInput, useTheme} from 'react-native-paper';
import {useIntl} from 'react-intl';
import {useDimension} from '../../features/CMS/utils/useDimension';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ApplyCouponPage: React.FC<
  NativeStackScreenProps<RootStackParamList, 'ApplyCouponPage'>
> = props => {
  const theme = useTheme();
  const intl = useIntl();
  const [getWidth] = useDimension();

  return (
    <View style={{flex: 1}}>
      <CMSRenderer
        components={[
          {
            _component: CoreComponentType.Header,
            key: '142',
            title: 'Coupons',
            leftIcon: 'close',
            leftOnPress: () => {
              props.navigation.goBack();
            },
          },
        ]}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 10,
          marginHorizontal: 10,
          elevation: 20,
        }}>
        <TextInput
          mode="flat"
          label={intl.formatMessage({
            defaultMessage: 'Enter coupon code',
          })}
          style={{
            backgroundColor: '#fff',
            fontSize: 14,
            height: 56,
            width: getWidth - 130,
            marginHorizontal: 5,
          }}
          activeUnderlineColor="#0f8443"
        />
        <Button
          mode="text"
          style={{
            borderRadius: 4,
            height: 56,
            width: 100,
            borderColor: theme.colors.primary,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            props.navigation.navigate('CartPage');
          }}>
          {intl.formatMessage({defaultMessage: 'Apply'})}
        </Button>
      </View>
      <Divider style={{marginHorizontal: 10}} />
      <ScrollView
        style={{
          paddingHorizontal: 10,
          flex: 1,
          backgroundColor: '#fff',
        }}>
        <Text
          style={{
            color: '#364A15',
            fontSize: 18,
            fontWeight: '600',
            paddingVertical: 10,
          }}>
          Available Coupons
        </Text>
        <View style={{marginTop: 14}} />
        {item.map((_, index) => (
          <ListItemRenderer
            key={index}
            title="Get up to AED 50 cashback using ADCB card"
            subtitle="Valid on total value of items worth AED 500 or more."
            handlePress={() => {
              props.navigation.navigate('CartPage');
            }}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default ApplyCouponPage;

const item = [1, 2, 3, 4, 5, 6, 7, 8];

const ListItemRenderer = ({
  title,
  subtitle,
  handlePress,
}: {
  title: string;
  subtitle: string;
  handlePress?: () => void;
}) => {
  const theme = useTheme();
  const intl = useIntl();

  return (
    <View style={{}}>
      <Image
        testID="productImage"
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Abu_Dhabi_Commercial_Bank_logo.svg/220px-Abu_Dhabi_Commercial_Bank_logo.svg.png',
        }}
        style={{
          height: 32,
          width: 80,
          resizeMode: 'contain',
          marginVertical: 2,
        }}
      />
      <Text style={{color: '#364A15', fontSize: 16, fontWeight: '500'}}>
        {title}
      </Text>
      <TouchableOpacity
        onPress={() => {
          console.log('pressed');
        }}>
        <Text
          style={{
            marginTop: 5,
            color: '#364A15',
            fontSize: 12,
            fontWeight: '400',
          }}>
          {subtitle}
        </Text>

        <Text style={{color: '#364A15', fontSize: 14, fontWeight: '500'}}>
          View Details
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 7,
        }}>
        <Text
          style={{
            borderStyle: 'dashed',
            borderWidth: 1,
            borderRadius: 4,
            borderColor: theme.colors.primary,
            width: 120,
            paddingVertical: 5,
            textAlign: 'center',
          }}>
          ADCBOFFER
        </Text>
        <Button
          mode="text"
          style={{
            borderRadius: 4,
            borderColor: theme.colors.primary,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          labelStyle={{
            fontSize: 13,
          }}
          uppercase={false}
          onPress={handlePress}>
          {intl.formatMessage({defaultMessage: 'Apply'})}
        </Button>
      </View>
      <Divider style={{marginHorizontal: 5, marginVertical: 10}} />
    </View>
  );
};
