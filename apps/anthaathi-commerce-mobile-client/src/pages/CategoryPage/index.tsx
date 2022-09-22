import {View, Text} from 'react-native';
import React from 'react';
import {CategoryPageComponentType} from '../../features/CMS/types/common';
import CMSRenderer from '../../features/CMS';
import categoryJson from '../../config/category.json';
import {RootStackParamList} from '../../types/Route';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const CategoryPage = (
  props: NativeStackScreenProps<RootStackParamList, 'CategoryPage'>,
) => {
  return (
    <View>
      <CMSRenderer
        components={[
          {
            _component: CategoryPageComponentType.CategoryList,
            key: '1',
            list: categoryJson.heroCategories.items,
            onPress: (value: string) => {
              props.navigation.navigate('ProductListPage1', {
                categoryName: value,
              });
            },
          },
        ]}
      />
    </View>
  );
};

export default CategoryPage;
