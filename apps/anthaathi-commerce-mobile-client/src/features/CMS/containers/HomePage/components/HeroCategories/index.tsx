import * as React from 'react';
import {useMemo} from 'react';
import {Text} from 'react-native-paper';
import {View, VirtualizedList} from 'react-native';

export interface Item {
  title: string;
  image: string;
  key: string;
}

export interface HeroCategoriesProps {
  title: string;
  items: Item[];
}

export default function HeroCategories({title, items}: HeroCategoriesProps) {
  const itemsSpited: Item[][] = useMemo(() => {
    return items.reduce<Item[][]>(
      (previousValue, currentValue, currentIndex) => {
        if (currentIndex % 2) {
          const newArray = [...previousValue];
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
    <>
      <View style={{marginLeft: 12}}>
        <Text variant="titleLarge">{title}</Text>

        <View>
          <VirtualizedList<Item[][]>
            data={itemsSpited}
            initialNumToRender={4}
            horizontal={true}
            renderItem={({item: Item}) => <ItemRenderer item={item} />}
            getItemCount={() => itemsSpited.length}
            keyExtractor={(item, index) => item[index]?.[0]?.key || index + ''}
            getItem={(res, index) => res[index]}
          />
        </View>
      </View>
    </>
  );
}

function ItemRenderer({item}: {item: Item[][]}) {
  return <Text>{item.title}</Text>;
}
