import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ProductListPage from '../../pages/ProductListPage';
// import dataJson from '../../config/data.json';
import categoryJson from '../../config/category.json';
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
        initialRouteName={props?.route?.params?.categoryName}
        style={{marginVertical: 5}}
        screenOptions={{
          tabBarScrollEnabled: true,
          tabBarItemStyle: {
            height: 34,
            minHeight: 30,
            backgroundColor: Colors.green400,
            padding: 0,
            marginVertical: 4,
            marginHorizontal: 6,
            borderRadius: 50,
          },
          tabBarStyle: {
            padding: 0,
            margin: 0,
            height: 42,
          },
          tabBarLabelStyle: {
            color: '#FFF',
          },
          tabBarIndicatorStyle: {backgroundColor: Colors.green900},
          lazy: true,
        }}>
        {categoryJson.heroCategories.items.map(data => (
          <Tab.Screen
            name={data.key}
            component={ProductListPage}
            key={data.id}
            options={{tabBarLabel: data.title}}
          />
        ))}
      </Tab.Navigator>
    </>
  );
}
