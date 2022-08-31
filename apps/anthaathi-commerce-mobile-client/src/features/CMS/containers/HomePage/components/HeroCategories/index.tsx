import * as React from 'react';
import {useMemo} from 'react';
import {Text, TouchableRipple} from 'react-native-paper';
import {Image, View, VirtualizedList} from 'react-native';
import {HomePageComponentType} from '../../../../types/common';

export interface Item {
  title: string;
  image: string;
  key: string;
}

export interface HeroCategoriesProps {
  title: string;
  items: Item[];
  onPress?: (key: string) => void;
}

export default function HeroCategories({
  title,
  items,
  onPress,
}: HeroCategoriesProps) {
  const itemsSpited: Item[][] = useMemo(() => {
    return items.reduce<Item[][]>(
      (previousValue, currentValue, currentIndex) => {
        if (currentIndex % 2) {
          const newArray: Item[][] = [...previousValue];
          newArray[previousValue.length - 1].push(currentValue);
          return newArray;
        } else {
          return [...previousValue, [currentValue]];
        }
      },
      [],
    );
  }, [items]);

  return (
    <View testID="heroCategory">
      <Text
        style={{
          marginBottom: 9,
          fontSize: 18,
          fontWeight: '600',
          marginHorizontal: 6,
          marginVertical: 6,
        }}>
        {title}
      </Text>

      <View>
        <VirtualizedList<Item[]>
          data={itemsSpited}
          testID="heroCategoriesList"
          initialNumToRender={4}
          horizontal
          renderItem={({item}) => (
            <ItemRendererColumn onPress={onPress || (() => {})} item={item} />
          )}
          getItemCount={() => itemsSpited.length}
          keyExtractor={(item, index) => item?.[0]?.key || index + ''}
          getItem={(res, index) => res[index]}
        />
      </View>
    </View>
  );
}

function ItemRendererColumn({
  item,
  onPress,
}: {
  item: Item[];
  onPress: (key: string) => void;
}) {
  return (
    <View style={{display: 'flex', flexDirection: 'column'}}>
      {item.map(element => (
        <ItemRenderer
          key={element.key}
          element={element}
          onPress={() => onPress(element.key)}
        />
      ))}
    </View>
  );
}

function ItemRenderer({
  element,
  onPress,
}: {
  element: Item;
  onPress?: () => void;
}) {
  const dimension = 97;

  return (
    <TouchableRipple
      testID={`heroItem${element.key}`}
      onPress={onPress}
      style={{borderRadius: 12, padding: 4, marginRight: 12}}>
      <View>
        <Image
          source={{
            uri: element.image,
            height: dimension,
            width: dimension,
          }}
          style={{borderRadius: dimension / 2}}
        />
        <Text
          style={{
            textAlign: 'center',
            marginBottom: 12,
            marginTop: 6,
            fontWeight: '600',
          }}
          variant="labelMedium">
          {element.title}
        </Text>
      </View>
    </TouchableRipple>
  );
}

export const HeroCategoriesCMSInput = {
  _component: HomePageComponentType.HeroCategories,
  component: HeroCategories,
};
