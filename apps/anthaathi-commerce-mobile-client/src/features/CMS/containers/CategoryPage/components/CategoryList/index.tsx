import {
  ScrollView,
  Text,
  ImageBackground,
  View,
  TouchableOpacity,
  Image,
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
      style={{height: 180, width: itemWidth, margin: 10, borderRadius: 4}}>
      <Image
        source={{
          uri: item.image,
        }}
        style={{
          position: 'absolute',
          height: '100%' as never,
          width: '100%' as never,
          borderRadius: 4,
        }}
      />
      <Text
        style={{
          marginTop: 70,
          textAlign: 'center',
          color: '#000',
          fontSize: 18,
          fontWeight: '700',
          backgroundColor: '#fff',
          paddingVertical: 5,
          marginHorizontal: 20,
        }}>
        {item.title}
      </Text>
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
