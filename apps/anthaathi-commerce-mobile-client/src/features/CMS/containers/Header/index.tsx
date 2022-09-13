import React, {useState} from 'react';
import {
  I18nManager,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {Appbar, useTheme, TextInput, Colors, Badge} from 'react-native-paper';
import {CoreComponentType} from '../../types/common';
import RNRestart from 'react-native-restart';
import ChatWootWidget from '@chatwoot/react-native-widget';
import {useRecoilValue} from 'recoil';
import {CartItemData} from '../../context/CartItemContext';
import {useIntl} from 'react-intl';

export interface HeaderProps {
  leftIcon?: string;
  leftOnPress?: () => void;
  cartIcon?: boolean;
  cartOnPress?: () => void;
  languageIcon?: boolean;
  mailIcon?: boolean;
  // translateOnPress?: () => void;
  searchIcon?: boolean;
  title?: string;
  logoImage?: string;
  isInlineSearch?: boolean;
}

const Header = ({
  leftIcon,
  leftOnPress,
  cartIcon = false,
  cartOnPress,
  languageIcon = false,
  mailIcon = false,
  searchIcon = false,
  title = '',
  logoImage,
  isInlineSearch = false,
}: HeaderProps) => {
  const intl = useIntl();
  const [searchShow, setSearchShow] = React.useState(false);
  const [showWidget, toggleWidget] = useState(false);
  const theme = useTheme();
  const cartItem = useRecoilValue(CartItemData);

  const user = {
    identifier: 'john@gmail.com',
    name: 'John Samuel',
    avatar_url: '',
    email: 'john@gmail.com',
    identifier_hash: '',
  };
  const customAttributes = {
    accountId: 1,
    pricingPlan: 'paid',
    status: 'active',
  };

  const websiteToken = 'bsUQcgVTRZ7JGiuXZbeTCGGE';
  const baseUrl = 'https://app.chatwoot.com';
  const locale = 'en';

  async function changeLanguage() {
    if (I18nManager.isRTL) {
      await I18nManager.forceRTL(false);
    } else {
      if (!I18nManager.isRTL) {
        await I18nManager.forceRTL(true);
      }
    }
    RNRestart.Restart();
  }

  return (
    <View testID="header" style={{backgroundColor: '#fff', elevation: 1}}>
      <StatusBar
        animated={true}
        backgroundColor={theme.colors.primary}
        barStyle={
          theme.dark || Platform.OS === 'ios' ? 'dark-content' : 'light-content'
        }
      />
      <Appbar.Header
        statusBarHeight={Platform.OS === 'ios' ? 35 : 0}
        style={{
          height: 56,
          backgroundColor: '#fff', // theme.colors.background,
          elevation: 0,
        }}>
        {leftIcon && (
          <Appbar.Action
            testID="leftOnHandler"
            icon={leftIcon}
            color={Colors.grey800}
            onPress={leftOnPress}
          />
        )}
        {languageIcon && (
          <Appbar.Action
            testID="translateOnHandler"
            icon={'translate'}
            color={Colors.grey800}
            onPress={() => {
              changeLanguage();
            }}
          />
        )}

        {logoImage && (
          <>
            <Appbar.Content
              title={''}
              style={{
                alignItems: 'center',
              }}
            />
            <Image
              testID="headerImage"
              style={[
                {
                  height: 52,
                  width: 70,
                  // alignItems: 'center'
                  // marginLeft: leftIcon ? '14%' : '40%',
                },
              ]}
              source={{
                uri: logoImage,
              }}
            />
          </>
        )}

        <Appbar.Content title={title} />

        {mailIcon && (
          <Appbar.Action
            onPress={() => toggleWidget(true)}
            color={Colors.grey800}
            icon="email-outline"
          />
        )}

        {cartIcon && (
          <View>
            <Appbar.Action
              testID="cartOnHandler"
              icon={'shopping'}
              color={Colors.grey800}
              onPress={cartOnPress}
            />
            {cartItem.length > 0 && (
              <Badge
                style={{
                  backgroundColor: Colors.grey800,
                  position: 'absolute',
                  top: 6,
                }}>
                {cartItem.length}
              </Badge>
            )}
          </View>
        )}

        {searchIcon && (
          <Appbar.Action
            testID="searchOnHandler"
            icon={'magnify'}
            color={Colors.grey800}
            onPress={() => {
              setSearchShow(!searchShow);
            }}
          />
        )}
      </Appbar.Header>
      {(searchShow || isInlineSearch) && (
        <View
          style={[
            I18nManager.isRTL ? styles.containerRTL : styles.containerLTR,
            {paddingTop: 2, paddingBottom: 10},
          ]}>
          <TextInput
            placeholder={intl.formatMessage({defaultMessage: 'Search'})}
            dense
            underlineColor="transparent"
          />
        </View>
      )}

      {showWidget && (
        <ChatWootWidget
          websiteToken={websiteToken}
          locale={locale}
          baseUrl={baseUrl}
          closeModal={() => toggleWidget(false)}
          isModalVisible={showWidget}
          user={user}
          customAttributes={customAttributes}
        />
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerAlign: {
    alignItems: 'center',
  },
  containerLTR: {
    paddingRight: 24,
    paddingLeft: 8,
  },
  containerRTL: {
    paddingLeft: 48,
    paddingRight: 0,
  },
});

export const HeaderCMSInput = {
  _component: CoreComponentType.Header,
  component: Header,
};
