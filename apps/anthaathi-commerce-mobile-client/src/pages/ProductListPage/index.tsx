import {View} from 'react-native';
import React from 'react';
import {
  CartPageComponentType,
  CoreComponentType,
  ProductListPageComponentType,
} from '../../features/CMS/types/common';
import CMSRenderer from '../../features/CMS';
import productJson from '../../config/product.json';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/Route';
import {Snackbar} from 'react-native-paper';
import {useRecoilState} from 'recoil';
import {CartItemData} from '../../features/CMS/context/CartItemContext';
import {ItemProps} from '../../features/CMS/containers/CartPage/components/BasketItem';
import {ProductProps} from '../../features/CMS/containers/ProductListPage/components/ProductList';

const ProductListPage = (
  props: NativeStackScreenProps<RootStackParamList, 'ProductListPage'>,
) => {
  const [cartItem, setCartItem] = useRecoilState(CartItemData);
  const [visible, setVisible] = React.useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  const productList = productJson.featuredCollection.products;

  const productFilter = React.useMemo(() => {
    return productList.filter(item => item.category === props.route.name);
  }, [productList, props.route.name]);

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        duration={500}
        action={{
          label: 'Undo',
          onPress: () => {
            // Do something
          },
        }}
        style={{zIndex: 999999}}>
        1 qty added to your basket.
      </Snackbar>
      <CMSRenderer
        components={[
          {
            _component: CartPageComponentType.SuggestedItem,
            key: '14',
            title: 'Suggested',
            products: [
              {
                name: 'Baby Yellow Pepper',
                image:
                  'https://burst.shopifycdn.com/photos/fruit-plate.jpg?width=373&height=373&format=pjpg&exif=1&iptc=1',
                key: '12',
                price: 12,
                currency: 'AED',
                weight_unit: 'KG',
                packaging: 'pack',
              },
              {
                name: 'Capsicum mixed',
                image:
                  'https://burst.shopifycdn.com/photos/red-and-green-gooseberries-against-white.jpg?width=373&format=pjpg&exif=1&iptc=1',
                key: '23',
                price: 23,
                currency: 'AED',
                weight_unit: 'KG',
                packaging: 'pack',
              },
              {
                name: 'Dabbas Dates',
                key: 'test2',
                price: 105.0,
                currency: 'AED',
                weight_unit: 'KG',
                packaging: 'Box',
                image:
                  'https://www.nrtcfresh.com/wp-content/uploads/2021/10/dabbas-500g-pkt-box-500x500.jpg',
              },
              {
                name: 'Sweet Potato Orange (Cut Cube)',
                key: 'test3',
                price: 7.35,
                currency: 'AED',
                weight_unit: 'Pack',
                packaging: 'pack',
                notes: '250g',
                image:
                  'https://www.nrtcfresh.com/wp-content/uploads/2020/11/Sweet_Potato_Orange-1.jpg',
              },
            ],
          },
          {
            _component: ProductListPageComponentType.ProductList,
            key: '1233',
            handlePress: (item: ProductProps) => {
              if (cartItem.some(el => el.name === item.name)) {
                const newState = cartItem.map(obj => {
                  if (obj.name === item.name) {
                    return {...obj, numberOfItems: obj.numberOfItems + 1};
                  }
                  return obj;
                });
                setCartItem(newState);
              } else {
                const copyCartItem: ItemProps[] = [...cartItem];

                copyCartItem.push({
                  name: item.name,
                  image: item.image,
                  price: item.price,
                  currency: item.currency,
                  numberOfItems: 1,
                  packaging: item.packaging,
                  weight_unit: item.weight_unit,
                  key: item.key,
                });
                setCartItem(copyCartItem);
              }
              onToggleSnackBar();
            },
            handleLongPress: () => {
              props.navigation.navigate('ProductPage');
            },
            products: productFilter,
          },
          {
            _component: CoreComponentType.CMSFABButton,
            key: '123',
            title: 'View Basket ' + `(${cartItem.length})`,
            icon: 'cart',
            handlePress: () => {
              props.navigation.navigate('CartPage');
            },
          },
        ]}
      />
    </View>
  );
};

export default ProductListPage;
