import {
  ScrollView,
  Text,
  ImageBackground,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {CategoryPageComponentType} from '../../../../types/common';
import {useResponsiveValue} from '../../../../utils/useResponsiveValue';

export interface CategoryProps {
  title: string;
  title_ar: string;
  key: string;
  image: string;
}

export interface CategoryListProps {
  list: CategoryProps[];
  onPress?: (key: string) => void;
}

const ItemRenderer = ({
  item,
  itemWidth,
  onPress,
}: {
  item: CategoryProps;
  itemWidth: string;
  onPress: (key: string) => void;
}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(item.key)}
      style={{width: itemWidth, margin: 10}}>
      <ImageBackground
        source={{
          uri: item.image,
        }}
        style={{
          height: 180,
          width: '100%',
        }}>
        <Text
          style={{
            marginTop: 60,
            textAlign: 'center',
            color: '#fff',
            fontSize: 22,
            fontWeight: '700',
          }}>
          {item.title}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const CategoryList = (props: CategoryListProps) => {
  const itemWidth = useResponsiveValue(['44%', '30%', '22%', '22%']);

  return (
    <ScrollView testID="categoryList">
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {props.list.map((data: CategoryProps) => (
          <ItemRenderer
            item={data}
            key={data.key}
            itemWidth={itemWidth}
            onPress={props.onPress || (() => {})}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default CategoryList;

export const CategoryListCMSInput = {
  _component: CategoryPageComponentType.CategoryList,
  component: CategoryList,
};
