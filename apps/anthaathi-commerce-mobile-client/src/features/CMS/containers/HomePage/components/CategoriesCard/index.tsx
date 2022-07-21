import {Image, View} from 'react-native';
import React from 'react';
import {Text, TouchableRipple} from 'react-native-paper';
import {useResponsiveValue} from '../../../../utils/useResponsiveValue';
import {HomePageComponentType} from '../../../../types/common';

export interface CategoryProps {
  key: string;
  title: string;
  image: string;
}

export interface CategoriesCardProps {
  title?: string;
  categories: CategoryProps[];
}

const CategoriesCard = (props: CategoriesCardProps) => {
  return (
    <View style={{marginHorizontal: 10}} testID="categoryCard">
      <Text variant="titleLarge" style={{marginBottom: 9, fontSize: 20}}>
        {props.title}
      </Text>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        {props.categories.map(item => {
          return <CategoryItemRenderer key={item.key} item={item} />;
        })}
      </View>
    </View>
  );
};

function CategoryItemRenderer({item}: {item: CategoryProps}) {
  const itemHeight = useResponsiveValue([180, 240, 360, 360]);
  const itemWidth = useResponsiveValue(['98%', '48%', '31%', '23%']);

  return (
    <TouchableRipple onPress={() => {}}>
      <View
        style={{
          height: itemHeight,
          width: itemWidth,
          marginVertical: 10,
          marginHorizontal: '1%',
        }}
        key={item.key}>
        <View>
          <Image
            testID="categoryImage"
            source={{
              uri: item.image,
            }}
            style={{height: '85%', width: '100%'}}
          />
          <Text
            style={{
              textAlign: 'center',
              marginBottom: 12,
              marginTop: 6,
              fontWeight: '600',
            }}
            variant="labelMedium">
            {item.title}
          </Text>
        </View>
      </View>
    </TouchableRipple>
  );
}

export default CategoriesCard;

export const CategoriesCardCMSInput = {
  _component: HomePageComponentType.CategoriesCard,
  component: CategoriesCard,
};
