import * as React from 'react';
import {useMemo} from 'react';
import {Text, TouchableRipple} from 'react-native-paper';
import {Image, View, VirtualizedList} from 'react-native';

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
    <>
      <View>
        <Text variant="titleLarge" style={{marginBottom: 9}}>
          {title}
        </Text>

        <View>
          <VirtualizedList<Item[]>
            data={itemsSpited}
            initialNumToRender={4}
            horizontal={true}
            renderItem={({item}) => <ItemRendererColumn item={item} />}
            getItemCount={() => itemsSpited.length}
            keyExtractor={(item, index) => item?.[0]?.key || index + ''}
            getItem={(res, index) => res[index]}
          />
        </View>
      </View>
    </>
  );
}

function ItemRendererColumn({item}: {item: Item[]}) {
  return (
    <View style={{display: 'flex', flexDirection: 'column'}}>
      {item.map(element => (
        <ItemRenderer key={element.key} element={element} />
      ))}
    </View>
  );
}

function ItemRenderer({element}: {element: Item}) {
  const dimension = 97;

  return (
    <TouchableRipple
      onPress={() => {}}
      style={{borderRadius: 12, padding: 4, marginRight: 12}}
    >
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
          variant="labelMedium"
        >
          {element.title}
        </Text>
      </View>
    </TouchableRipple>
  );
}
