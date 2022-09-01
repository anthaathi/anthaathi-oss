import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ProductListPage from '../../pages/ProductListPage';
import dataJson from '../../config/data.json';
import {Colors} from 'react-native-paper';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/Route';

const Tab = createMaterialTopTabNavigator();

export function ProductTopTab(
  props: NativeStackScreenProps<RootStackParamList, 'ProductListPage1'>,
) {
  return (
    <>
      <Tab.Navigator
        style={{marginVertical: 5}}
        screenOptions={{
          tabBarScrollEnabled: true,
          tabBarItemStyle: {
            height: 34,
            minHeight: 30,
            backgroundColor: Colors.green400,
            padding: 0,
            margin: 6,
            borderRadius: 50,
          },
          tabBarStyle: {
            padding: 0,
            margin: 0,
          },
          tabBarLabelStyle: {
            color: '#FFF',
          },
          tabBarIndicatorStyle: {backgroundColor: Colors.green900},
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
