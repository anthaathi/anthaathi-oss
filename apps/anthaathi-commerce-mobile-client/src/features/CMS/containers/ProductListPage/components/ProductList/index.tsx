import * as React from 'react';
import {Avatar, Text, Title, useTheme} from 'react-native-paper';
import {
  Image,
  Pressable,
  TouchableOpacity,
  View,
  VirtualizedList,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {useResponsiveValue} from '../../../../utils/useResponsiveValue';
import {useIntl} from 'react-intl';
import {ProductListPageComponentType} from '../../../../types/common';
import {useRecoilState} from 'recoil';
import {CartItemData} from '../../../../context/CartItemContext';
import {ItemProps} from '../../../CartPage/components/BasketItem';

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
  notes: string;
}

export interface ProductListProps {
  products: ProductProps[];
  handlePress?: (item: ProductProps) => void;
  handleInfoPress?: (item: ProductProps) => void;
}

export default function ProductList({
  products,
  handlePress,
  handleInfoPress,
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
    <View style={{marginTop: 10}} testID="productList">
      <VirtualizedList<ProductProps[]>
        data={productSplitted}
        contentContainerStyle={{paddingBottom: itemHeight * 1.5}}
        testID="productListData"
        // initialNumToRender={4}
        // horizontal
        renderItem={({item}) => (
          <ItemRendererColumn
            item={item}
            itemHeight={itemHeight}
            itemWidth={itemWidth}
            handlePress={handlePress || (() => {})}
            handleInfoPress={handleInfoPress || (() => {})}
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
  handleInfoPress,
}: {
  item: ProductProps[];
  itemHeight: number;
  itemWidth: number;
  handlePress: (item: ProductProps) => void;
  handleInfoPress: (item: ProductProps) => void;
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
          handleInfoPress={() => handleInfoPress(element)}
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
  handleInfoPress,
}: {
  item: ProductProps;
  itemHeight: number;
  itemWidth: number;
  handlePress: () => void;
  handleInfoPress: () => void;
}) {
  const [cartItem, setCartItem] = useRecoilState(CartItemData);

  const cartProductData: ItemProps | undefined = React.useMemo(() => {
    if (cartItem.some(el => el.id === item.id)) {
      let cartObj = cartItem.find(el => el.id === item.id);
      return cartObj;
    }
  }, [cartItem, item.id]);
  const theme = useTheme();
  const intl = useIntl();
  return (
    <View
      style={{
        marginVertical: 5,
        width: '48%',
        borderColor:
          cartProductData && cartProductData.id === item.id
            ? theme.colors.greenTextColor
            : '#e7e7e7',
        backgroundColor: '#f0f0f0',
        borderWidth: 1,
        borderRadius: 12,
      }}
      key={item.key}>
      <View>
        <Pressable onPress={handlePress}>
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
            {cartProductData && cartProductData.id === item.id && (
              <>
                <Pressable
                  onPress={() => {
                    if (cartProductData.numberOfItems > 1) {
                      const newState = cartItem.map(obj => {
                        if (obj.id === item.id) {
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
                          return obj.id !== item.id;
                        }),
                      );
                    }
                  }}
                  style={{
                    position: 'absolute',
                    left: 3,
                    top: 3,
                    paddingTop: 5,
                    paddingLeft: 5,
                    paddingRight: 10,
                    paddingBottom: 10,
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
                      if (obj.id === item.id) {
                        return {...obj, numberOfItems: obj.numberOfItems + 1};
                      }
                      return obj;
                    });
                    setCartItem(newState);
                  }}
                  style={{
                    position: 'absolute',
                    right: 3,
                    top: 3,
                    paddingTop: 5,
                    paddingLeft: 10,
                    paddingRight: 5,
                    paddingBottom: 10,
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
                width: '100%',
              }}>
              <Title
                style={{
                  fontSize: 12,
                  marginRight: 5,
                  fontWeight: 'bold',
                  flexShrink: 1,
                }}>
                {item.name}
              </Title>
              <TouchableOpacity onPress={handleInfoPress}>
                <Entypo
                  name="info-with-circle"
                  color="#364A15"
                  size={18}
                  style={{paddingVertical: 5, paddingLeft: 10}}
                />
              </TouchableOpacity>
            </View>
            <Text
              style={{
                color: theme.colors.greyTextColor,
                fontSize: 12,
                fontWeight: '400',
              }}>
              Dorne
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: theme.colors.greenTextColor,
                  fontSize: 14,
                  fontWeight: '400',
                }}>
                {intl.formatNumber(item.price, {
                  style: 'currency',
                  currency: item.currency,
                })}
              </Text>
              <Text
                style={{
                  color: theme.colors.greyTextColor,
                  fontSize: 12,
                  fontWeight: '400',
                }}>
                {' / ' + item.packaging}
              </Text>
            </View>

            {/* <Text
              style={{
                color: theme.colors.greyTextColor,
                fontSize: 12,
                fontWeight: '400',
              }}>
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
