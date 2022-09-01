import React from 'react';
import {
  Modal,
  Pressable,
  SafeAreaView,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

export interface BottomSheetProps {
  bottomSheetStyle?: StyleProp<ViewStyle>;
  bottomSheetTitleStyle?: StyleProp<TextStyle>;
  bottomSheetTitle?: string;
  bottomSheetIconColor?: string;
  bottomSheetVisible: boolean;
  setBottomSheetVisible: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
}

const CMSBottomSheet = (props: BottomSheetProps) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.bottomSheetVisible}
      onRequestClose={() => {
        props.setBottomSheetVisible(!props.bottomSheetVisible);
      }}>
      <View style={styles.centeredView}>
        <Pressable
          onPress={() => {
            props.setBottomSheetVisible(!props.bottomSheetVisible);
          }}
          style={[StyleSheet.absoluteFill]}
        />

        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.2)',
            flexDirection: 'column-reverse',
          }}
          pointerEvents="box-none">
          <View style={[styles.modalView, props.bottomSheetStyle]}>
            <Text
              style={[
                styles.defaultBottomSheetTitleStyle,
                props.bottomSheetTitleStyle,
                {margin: 5},
              ]}>
              {props.bottomSheetTitle}
            </Text>
            <View
              style={{
                marginVertical: 5,
              }}
            />
            <View>{props.children}</View>
          </View>
        </SafeAreaView>
      </View>
    </Modal>
  );
};

export default CMSBottomSheet;

const styles = StyleSheet.create({
  defaultBottomSheetTitleStyle: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 16,
  },
  centeredView: {
    flex: 1,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'flex-end',
  },
  modalView: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
