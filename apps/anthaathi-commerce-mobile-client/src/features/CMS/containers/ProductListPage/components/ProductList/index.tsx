import * as React from 'react';
import {Avatar, Text, Title} from 'react-native-paper';
import {Image, Pressable, View, VirtualizedList} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {useResponsiveValue} from '../../../../utils/useResponsiveValue';
import {useIntl} from 'react-intl';
import {ProductListPageComponentType} from '../../../../types/common';
import {useRecoilState} from 'recoil';
import {CartItemData} from '../../../../context/CartItemContext';
import {ItemProps} from '../../../CartPage/components/BasketItem';

export interface ProductProps {
  name: string;
  description?: string;
  price: number;
  currency: string;
  image: string;
  weight_unit: string;
  packaging: string;
  key: string;
  notes: string;
}

export interface ProductListProps {
  products: ProductProps[];
  handlePress: (item: ProductProps) => void;
  handleLongPress: () => void;
}

export default function ProductList({
  products,
  handlePress,
  handleLongPress,
}: ProductListProps) {
  const itemHeight = useResponsiveValue([160, 200, 220, 280]);
  const itemWidth = useResponsiveValue([170, 190, 210, 270]);
  const productSplitted: ProductProps[][] = React.useMemo(() => {
    return products.reduce<ProductProps[][]>(
      (previousValue, currentValue, currentIndex) => {
        if (currentIndex % 2) {
          const newArray: ProductProps[][] = [...previousValue];
          newArray[previousValue.length - 1].push(currentValue);
          return newArray;
        } else {
          return [...previousValue, [currentValue]];
        }
      },
      [],
    );
  }, [products]);

  return (
    <View style={{marginTop: 10}}>
      <VirtualizedList<ProductProps[]>
        data={productSplitted}
        contentContainerStyle={{paddingBottom: 100}}
        testID="productList"
        // initialNumToRender={4}
        // horizontal
        renderItem={({item}) => (
          <ItemRendererColumn
            item={item}
            itemHeight={itemHeight}
            itemWidth={itemWidth}
            handlePress={handlePress || (() => {})}
            handleLongPress={handleLongPress}
          />
        )}
        getItemCount={() => productSplitted.length}
        keyExtractor={(item, index) => item?.[0]?.key || index + ''}
        getItem={(res, index) => res[index]}
      />
    </View>
  );
}

function ItemRendererColumn({
  item,
  itemHeight,
  itemWidth,
  handlePress,
  handleLongPress,
}: {
  item: ProductProps[];
  itemHeight: number;
  itemWidth: number;
  handlePress: (item: ProductProps) => void;
  handleLongPress: () => void;
}) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
        marginHorizontal: 10,
      }}>
      {item.map(element => (
        <ItemRenderer
          key={element.key}
          item={element}
          itemHeight={itemHeight}
          itemWidth={itemWidth}
          handlePress={() => handlePress(element)}
          handleLongPress={handleLongPress}
        />
      ))}
    </View>
  );
}

function ItemRenderer({
  item,
  itemHeight,
  itemWidth,
  handlePress,
  handleLongPress,
}: {
  item: ProductProps;
  itemHeight: number;
  itemWidth: number;
  handlePress: () => void;
  handleLongPress: () => void;
}) {
  const [cartItem, setCartItem] = useRecoilState(CartItemData);

  const cartProductData: ItemProps | undefined = React.useMemo(() => {
    if (cartItem.some(el => el.name === item.name)) {
      let cartObj = cartItem.find(el => el.name === item.name);
      return cartObj;
    }
  }, [cartItem, item.name]);

  const intl = useIntl();
  return (
    <View
      style={{
        marginVertical: 5,
        width: '48%',
        borderColor:
          cartProductData && cartProductData.name === item.name
            ? '#008D3E'
            : '#e7e7e7',
        backgroundColor: '#f0f0f0',
        borderWidth: 1,
        borderRadius: 12,
      }}
      key={item.key}>
      <View>
        <Pressable onPress={handlePress} onLongPress={handleLongPress}>
          <View style={{height: itemHeight, width: '100%'}}>
            <Image
              style={{
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
                height: itemHeight,
                width: '99.9%',
                paddingHorizontal: '0.1%',
                backgroundColor: '#fff',
              }}
              source={{
                uri: item.image,
              }}
            />
            {cartProductData && cartProductData.name === item.name && (
              <>
                <Pressable
                  onPress={() => {
                    if (cartProductData.numberOfItems > 1) {
                      const newState = cartItem.map(obj => {
                        if (obj.name === item.name) {
                          return {
                            ...obj,
                            numberOfItems: obj.numberOfItems - 1,
                          };
                        }
                        return obj;
                      });
                      setCartItem(newState);
                    } else {
                      setCartItem(current =>
                        current.filter(obj => {
                          return obj.name !== item.name;
                        }),
                      );
                    }
                  }}
                  style={{
                    position: 'absolute',
                    left: 5,
                    top: 5,
                  }}>
                  <Avatar.Icon
                    icon="minus"
                    size={32}
                    style={{
                      backgroundColor: 'red',
                    }}
                  />
                </Pressable>
                <Pressable
                  onPress={() => {
                    const newState = cartItem.map(obj => {
                      if (obj.name === item.name) {
                        return {...obj, numberOfItems: obj.numberOfItems + 1};
                      }
                      return obj;
                    });
                    setCartItem(newState);
                  }}
                  style={{
                    position: 'absolute',
                    right: 5,
                    top: 5,
                  }}>
                  <Avatar.Text
                    label={cartProductData.numberOfItems.toString()}
                    size={32}
                  />
                </Pressable>
              </>
            )}
          </View>
          <View
            style={{
              alignItems: 'flex-start',
              backgroundColor: '#f0f0f0',
              paddingVertical: 5,
              paddingHorizontal: 8,
              borderBottomLeftRadius: 12,
              borderBottomRightRadius: 12,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                width: itemWidth,
              }}>
              <Title style={{fontSize: 12, marginRight: 5, fontWeight: 'bold'}}>
                {item.name}
              </Title>
              <Entypo
                name="info-with-circle"
                color="#364A15"
                size={18}
                style={{marginTop: 5}}
              />
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
              }}>
              <Text style={{color: '#008D3E', fontSize: 14, fontWeight: '400'}}>
                {intl.formatNumber(item.price, {
                  style: 'currency',
                  currency: item.currency,
                })}
              </Text>
              <Text style={{color: '#808080', fontSize: 12, fontWeight: '400'}}>
                {' / ' + item.packaging}
              </Text>
            </View>

            {/* <Text style={{color: '#808080', fontSize: 12, fontWeight: '400'}}>
              {item.notes}
            </Text> */}
          </View>
        </Pressable>
      </View>
    </View>
  );
}

export const ProductListCMSInput = {
  _component: ProductListPageComponentType.ProductList,
  component: ProductList,
};
