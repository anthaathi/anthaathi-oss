import * as React from 'react';
import {Text} from 'react-native-paper';
import {
  Image,
  Pressable,
  View,
  VirtualizedList,
  TouchableOpacity,
} from 'react-native';
import {useIntl} from 'react-intl';
import {CartPageComponentType} from '../../../../types/common';

export interface ProductProps {
  id: number;
  name: string;
  description?: string;
  price: number;
  currency: string;
  image: string;
  weight_unit: string;
  packaging: string;
  key: string;
  notes?: string;
}

export interface FeaturedCollectionProps {
  title: string;
  products: ProductProps[];
  handlePress1?: () => void; // view all product link
  handlePress2: (item: ProductProps) => void; // product link
}

export default function SuggestedItem({
  title,
  products,
  handlePress1,
  handlePress2,
}: FeaturedCollectionProps) {
  const intl = useIntl();

  return (
    <View
      testID="suggestedItem"
      style={{marginHorizontal: 10, marginVertical: 5}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text variant="titleLarge" style={{marginBottom: 9, fontSize: 18}}>
          {title}
        </Text>
        <Pressable onPress={handlePress1} testID="handlePressSuggestedItem">
          <Text
            variant="titleMedium"
            style={{
              marginBottom: 9,
              textDecorationLine: 'underline',
              fontSize: 14,
              color: '#008D3E',
            }}>
            {intl.formatMessage({defaultMessage: 'View All'})}
          </Text>
        </Pressable>
      </View>

      <View>
        <VirtualizedList<ProductProps>
          testID="suggestedItemList"
          data={products}
          initialNumToRender={4}
          horizontal
          renderItem={({item}) => (
            <ItemRenderer item={item} handlePress2={handlePress2} />
          )}
          getItemCount={() => products.length}
          keyExtractor={item => item.key}
          getItem={(res, index) => res[index]}
        />
      </View>
    </View>
  );
}

function ItemRenderer({
  item,
  handlePress2,
}: {
  item: ProductProps;
  handlePress2: (item: ProductProps) => void;
}) {
  return (
    <TouchableOpacity
      onPress={() => {
        handlePress2(item);
      }}>
      <View
        style={{
          marginBottom: 5,
          marginRight: 20,
          alignItems: 'center',
          borderColor: '#e7e7e7',
          borderWidth: 1,
          borderRadius: 6,
        }}
        key={item.key}>
        <Image
          style={{
            height: 64,
            width: 58,
            borderTopLeftRadius: 6,
            borderTopRightRadius: 6,
          }}
          source={{
            uri: item.image,
          }}
        />
        <Text
          style={{
            textAlign: 'center',
            paddingVertical: 5,
            color: '#008D3E',
            fontWeight: '700',
            fontSize: 14,
            backgroundColor: '#F1F9F4',
            width: 58,
            borderBottomLeftRadius: 6,
            borderBottomRightRadius: 6,
          }}>
          Add
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export const SuggestedItemCMSInput = {
  _component: CartPageComponentType.SuggestedItem,
  component: SuggestedItem,
};
