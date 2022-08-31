import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ProductListPage from '../../pages/ProductListPage';

import CMSRenderer from '../../features/CMS';
import {CoreComponentType} from '../../features/CMS/types/common';
import dataJson from '../../config/data.json';

const Tab = createMaterialTopTabNavigator();

export function ProductTopTab(props: {
  navigation: {navigate: (arg0: string) => void};
}) {
  return (
    <>
      <CMSRenderer
        components={[
          {
            _component: CoreComponentType.Header,
            key: '123',
            title: 'Products',
            leftIcon: 'menu',
            rightIcon: 'account',
            rightOnPress: () => {
              props.navigation.navigate('Profile');
            },
          },
        ]}
      />
      <Tab.Navigator
        style={{marginVertical: 5}}
        screenOptions={{
          tabBarScrollEnabled: true,
          tabBarItemStyle: {width: 120},
          tabBarIndicatorStyle: {backgroundColor: '#364A15'},
        }}>
        {dataJson.core.productListPage.subCategoryList.map(data => (
          <Tab.Screen
            name={data.title}
            component={ProductListPage}
            key={data.id}
          />
        ))}
      </Tab.Navigator>
    </>
  );
}
