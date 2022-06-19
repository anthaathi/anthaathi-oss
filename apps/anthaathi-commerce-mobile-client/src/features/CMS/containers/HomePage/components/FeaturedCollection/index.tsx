import * as React from 'react';
import {Card, Text, Title} from 'react-native-paper';
import {Image, Pressable, View, VirtualizedList} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

export interface ProductProps {
  name: string;
  price: number;
  image: string;
  key: string;
}

export interface FeaturedCollectionProps {
  title: string;
  products: ProductProps[];
  handlePress?: () => {}; // view all product link
}

export default function FeaturedCollection({
  title,
  products,
  handlePress,
}: FeaturedCollectionProps) {
  return (
    <>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 10,
          }}
        >
          <Text variant="titleLarge" style={{marginBottom: 9, fontSize: 20}}>
            {title}
          </Text>

          <Pressable onPress={handlePress}>
            <Text
              variant="titleMedium"
              style={{
                marginBottom: 9,
                textDecorationLine: 'underline',
                fontSize: 14,
              }}
            >
              View All
            </Text>
          </Pressable>
        </View>

        <View>
          <VirtualizedList<ProductProps>
            data={products}
            initialNumToRender={4}
            horizontal={true}
            renderItem={({item}) => <ItemRenderer item={item} />}
            getItemCount={() => products.length}
            keyExtractor={item => item.key}
            getItem={(res, index) => res[index]}
          />
        </View>
      </View>
    </>
  );
}

function ItemRenderer({item}: {item: ProductProps}) {
  return (
    <Card
      style={{
        marginVertical: 5,
        marginHorizontal: 10,
      }}
      key={item.key}
    >
      <Card.Content style={{alignItems: 'center'}}>
        <Image
          style={{height: 160, width: 150, borderRadius: 4}}
          source={{
            uri: item.image,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Title style={{fontSize: 14, marginRight: 10, fontWeight: 'bold'}}>
            {item.name}
          </Title>
          <Entypo name="info-with-circle" color="#364A15" size={18} />
        </View>
        <Text style={{color: '#808080', fontSize: 12, fontWeight: '400'}}>
          Dorne
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{color: '#008D3E', fontSize: 12, fontWeight: '400'}}>
            {'AED' + ' '}
          </Text>
          <Text style={{color: '#008D3E', fontSize: 14, fontWeight: '400'}}>
            {item.price}
          </Text>
          <Text style={{color: '#808080', fontSize: 12, fontWeight: '400'}}>
            {' / pack'}
          </Text>
        </View>

        <Text style={{color: '#808080', fontSize: 12, fontWeight: '400'}}>
          {'200g - 300g per pack*'}
        </Text>
      </Card.Content>
    </Card>
  );
}
