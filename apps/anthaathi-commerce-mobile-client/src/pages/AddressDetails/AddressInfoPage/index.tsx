import {View} from 'react-native';
import React from 'react';
import {ProfilePageComponentType} from '../../../features/CMS/types/common';
import CMSRenderer from '../../../features/CMS';
import dataJson from '../../../config/data.json';
import {RootStackParamList} from '../../../types/Route';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Header from "../../../features/CMS/containers/Header";

const AddressInfoPage = (
    props: NativeStackScreenProps<RootStackParamList, 'AddressInfo'>,
) => {
    return (
        <View>
            <Header
                leftIcon={'arrow-left'}
                leftOnPress={() => props.navigation.goBack()}
                languageIcon={true}
                cartIcon={true}
                cartOnPress={() => {
                    props.navigation.navigate('CartPage');
                }}
                mailIcon={false}
                searchIcon={true}
                logoImage={'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/everyday_1_256x256.png?v=1662529180'}
            />
            <CMSRenderer
                components={[
                    {
                        _component: ProfilePageComponentType.DeliveryAddresses,
                        key: '3232',
                        title: 'Address information',
                        userAddress: dataJson.core.profilePage.addressInformation,
                        handlePress: () => {
                            props.navigation.navigate('AddEditAddress');
                        },
                    },
                ]}
            />
        </View>
    );
};

export default AddressInfoPage;
