import React, {useState} from 'react';
import {Modal, Pressable, StyleSheet, View} from 'react-native';
import {Button, Text, TextInput, useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {MD3Colors} from 'react-native-paper/lib/typescript/types';
import {CartPageComponentType} from '../../../../types/common';
import {useIntl} from 'react-intl';

export interface PromoCodeProps {
  title: string;
}

const PromoCode = (props: PromoCodeProps) => {
  const theme = useTheme();
  const intl = useIntl();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View testID="promoCode">
      <View
        style={{alignItems: 'center', marginVertical: 5, marginHorizontal: 10}}>
        <Pressable
          testID="handlePress"
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
          style={{
            backgroundColor: (theme.colors as MD3Colors).primaryContainer,
            width: '100%',
            height: 48,
            borderRadius: 4,
            justifyContent: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <Text
              style={{
                color: theme.colors.greyTextColor,
                fontSize: 14,
                fontWeight: '500',
              }}>
              {props.title}
            </Text>
            <Icon name="tag" color={theme.colors.primary} size={20} />
          </View>
        </Pressable>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <Pressable
          style={StyleSheet.flatten([
            {
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0, 0, 0, .4)',
            },
          ])}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        />
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text
              style={{
                color: theme.colors.titleTextColor,
                fontSize: 16,
                fontWeight: '700',
              }}>
              {intl.formatMessage({defaultMessage: 'Add New Coupon Code'})}
            </Text>

            <TextInput
              mode="flat"
              autoFocus={true}
              label={intl.formatMessage({defaultMessage: 'Coupon Code'})}
              style={{
                backgroundColor: '#fff',
                fontSize: 14,
                width: '100%',
                height: 56,
                marginVertical: 10,
              }}
              activeUnderlineColor={theme.colors.primary}
            />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 15,
              }}>
              <Button
                mode="outlined"
                style={{
                  borderRadius: 4,
                  borderColor: theme.colors.primary,
                }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                {intl.formatMessage({defaultMessage: 'Cancel'})}
              </Button>
              <Button
                mode="contained"
                style={{
                  borderRadius: 4,
                }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                {intl.formatMessage({defaultMessage: 'Apply'})}
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PromoCode;

export const PromoCodeCMSInput = {
  _component: CartPageComponentType.PromoCode,
  component: PromoCode,
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  modalView: {
    width: '80%',
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: 'white',
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
