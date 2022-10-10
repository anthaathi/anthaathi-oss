import * as React from 'react';
import {useIntl} from 'react-intl';
import {Image, Pressable, View} from 'react-native';
import {
  Avatar,
  Badge,
  Button,
  Colors,
  Divider,
  IconButton,
  List,
  Text,
  useTheme,
} from 'react-native-paper';
import {useResponsiveValue} from '../../../../utils/useResponsiveValue';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {HomePageComponentType} from '../../../../types/common';
import {useRecoilState} from 'recoil';
import {CartItemData} from '../../../../context/CartItemContext';
import {ItemProps} from '../../../CartPage/components/BasketItem';

type BlockInfoProps = {
  freeShipping: string;
  isFresh: string;
  securePayments: string;
  inStock: string;
};

type ListInfoProps = {
  description: string;
  shippingInformation: string;
};
export interface ProductDetails {
  id: number;
  name: string;
  listInfo?: ListInfoProps;
  blockInfo: BlockInfoProps;
  image: string[];
  price: number;
  currency: string;
}

export interface ProductDetailsProps {
  productInfo: ProductDetails;
  handleAddToCart?: () => {};
  handleBuyItNow?: () => {};
  handleMinusPress?: () => {};
  handlePlusPress?: () => {};
}

function FeaturedProduct(props: ProductDetailsProps) {
  const itemWidth = useResponsiveValue(['80%', '70%', '70%', '70%']);
  const [imageIndex, setImageIndex] = React.useState(0);
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
  const [cartItem, setCartItem] = useRecoilState(CartItemData);
  const intl = useIntl();
  const theme = useTheme();
  const cartProductData: ItemProps | undefined = React.useMemo(() => {
    if (cartItem.some(el => el.id === props.productInfo.id)) {
      let cartObj = cartItem.find(el => el.id === props.productInfo.id);
      return cartObj;
    }
  }, [cartItem, props.productInfo.id]);

  return (
    <View testID="featuredProduct">
      <View
        style={{
          marginVertical: 10,
          marginHorizontal: 12,
          flexDirection: itemWidth === '80%' ? 'column' : 'row',
        }}>
        {itemWidth === '80%' && (
          <Text
            variant="titleLarge"
            style={{marginBottom: 9, fontSize: 20, fontWeight: '600'}}>
            {props.productInfo.name}
          </Text>
        )}
        <View
          style={[
            {
              alignItems: 'center',
              justifyContent: 'center',
            },
            itemWidth !== '80%' && {width: '50%'},
          ]}>
          <Image
            testID="productImage"
            style={{
              height: 280,
              width: itemWidth,
              borderRadius: 4,
            }}
            source={{
              uri: props.productInfo.image[imageIndex],
            }}
          />

          {props.productInfo.image.length > 1 ? (
            <ImageSelection
              id={imageIndex}
              onChange={setImageIndex}
              imageLength={props.productInfo.image.length}
            />
          ) : (
            <View style={{paddingVertical: 15}} />
          )}
        </View>
        <View style={[itemWidth !== '80%' && {width: '50%'}]}>
          {itemWidth !== '80%' && (
            <Text
              variant="titleLarge"
              style={{marginBottom: 9, fontSize: 20, fontWeight: '600'}}>
              {props.productInfo.name}
            </Text>
          )}

          <Pricing
            price={props.productInfo.price}
            currency={props.productInfo.currency}
          />
          <BlockInfo data={props.productInfo.blockInfo} />
          {/* {cartProductData && cartProductData.id === props.productInfo.id && ( */}
          <View
            style={{
              width: 110,
              flexDirection: 'row',
              backgroundColor: '#F1F9F4',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: 35,
              marginVertical: 10,
              borderRadius: 50,
            }}>
            <IconButton
              style={{
                borderRadius: 50,
                height: 35,
                marginLeft: 0,
                width: 35,
                backgroundColor: '#D4EDDD',
              }}
              icon={'minus'}
              iconColor={theme.colors.greenTextColor}
              size={20}
              onPress={props.handleMinusPress}
            />
            <Text
              style={{
                marginHorizontal: 5,
                fontSize: 14,
                color: theme.colors.titleTextColor,
                fontWeight: '700',

                textAlign: 'center',
              }}>
              {(cartProductData &&
                cartProductData.numberOfItems !== undefined &&
                cartProductData.numberOfItems.toString()) ||
                '0'}
            </Text>
            <IconButton
              style={{
                borderRadius: 50,
                height: 35,
                marginRight: 0,
                backgroundColor: '#D4EDDD',
                width: 35,
              }}
              icon="plus"
              iconColor={theme.colors.greenTextColor}
              size={20}
              onPress={props.handlePlusPress}
            />
          </View>
          {/* 
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              marginBottom: 10,
            }}>
            <Pressable
              onPress={props.handleMinusPress}
              style={{
                backgroundColor: Colors.grey500,
              }}>
              <Avatar.Icon
                icon="minus"
                size={30}
                style={{
                  backgroundColor: Colors.grey500,
                }}
              />
            </Pressable>
          
            <Text
              style={{
                margin: 'auto',
                minWidth: 40,
                height: '100%',
                // padding: 5,
                textAlign: 'center',
                borderColor: Colors.grey500,
                borderWidth: 1,
                color: Colors.grey800,
                fontWeight: '600',
                textAlignVertical: 'center',
              }}>
              {(cartProductData &&
                cartProductData.numberOfItems !== undefined &&
                cartProductData.numberOfItems.toString()) ||
                '0'}
            </Text>
          
            <Pressable
              onPress={props.handlePlusPress}
              style={{
                backgroundColor: Colors.grey500,
              }}>
              <Avatar.Icon
                icon="plus"
                size={30}
                style={{backgroundColor: Colors.grey500}}
              />
            </Pressable>
          </View> */}
          {/* )} */}
          <Button
            testID="handleAddToCart"
            mode="outlined"
            onPress={props.handleAddToCart}
            labelStyle={{color: Colors.grey800}}
            style={{
              borderColor: Colors.grey800,
              borderRadius: 1,
              marginVertical: 10,
            }}>
            {intl.formatMessage({defaultMessage: 'Add to cart'})}
          </Button>

          <Button
            testID="handleBuyItNow"
            mode="contained"
            onPress={props.handleBuyItNow}
            labelStyle={{color: '#ffffff'}}
            style={{
              backgroundColor: theme.colors.primary,
              borderRadius: 1,
              marginBottom: 10,
            }}>
            {intl.formatMessage({defaultMessage: 'Buy it now'})}
          </Button>
        </View>
      </View>
      <>
        {props.productInfo.listInfo && (
          <List.Section style={{marginBottom: 15}}>
            <List.Accordion
              titleStyle={{
                color: '#000000',
              }}
              title={intl.formatMessage({defaultMessage: 'Description'})}>
              <Text style={{marginHorizontal: 20}}>
                {props.productInfo.listInfo?.description}
              </Text>
            </List.Accordion>
            <Divider />
            <List.Accordion
              titleStyle={{color: '#000000'}}
              title={intl.formatMessage({
                defaultMessage: 'Shipping information',
              })}
              onPress={handlePress}>
              <Text style={{marginHorizontal: 20}}>
                {props.productInfo.listInfo?.shippingInformation}
              </Text>
            </List.Accordion>
            <Divider />
          </List.Section>
        )}
      </>
    </View>
  );
}

const Pricing = ({price, currency}: {price: number; currency: string}) => {
  const intl = useIntl();
  return (
    <>
      <Text variant="titleLarge" style={{fontSize: 16, fontWeight: '500'}}>
        {intl.formatMessage({defaultMessage: 'Price'})}
      </Text>
      <Text
        variant="titleLarge"
        style={{marginBottom: 9, fontSize: 16, fontWeight: '500'}}>
        {intl.formatNumber(price, {
          style: 'currency',
          currency: currency,
        })}
      </Text>
    </>
  );
};

const ImageSelection = ({
  id,
  imageLength,
  onChange,
}: {
  id: number;
  imageLength: number;
  onChange: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      {[...Array(imageLength).keys()].map(index => (
        <Pressable
          key={index}
          style={{
            paddingHorizontal: 10,
            paddingVertical: 15,
          }}
          onPress={() => {
            onChange(index);
          }}>
          <Badge
            testID="badgeSelectImage"
            style={{
              backgroundColor: id === index ? '#000000' : '#cccccc',
            }}
            size={id === index ? 12 : 8}
          />
        </Pressable>
      ))}
    </View>
  );
};

const BlockInfo = ({data}: {data: BlockInfoProps}) => {
  return (
    <>
      <TextIcon title={data.freeShipping} iconName="md-globe-outline" />
      <TextIcon title={data.isFresh} iconName="leaf-outline" />
      <TextIcon title={data.securePayments} iconName="lock-closed-outline" />
      <TextIcon title={data.inStock} iconName="cart-outline" />
    </>
  );
};

const TextIcon = ({iconName, title}: {iconName: string; title: string}) => {
  return (
    <View
      style={{flexDirection: 'row', alignItems: 'center', marginVertical: 2}}>
      <Ionicons name={iconName} size={16} color="#000000" />
      <Text style={{marginLeft: 10, fontSize: 14, fontWeight: '400'}}>
        {title}
      </Text>
    </View>
  );
};

export default FeaturedProduct;

export const FeaturedProductCMSInput = {
  _component: HomePageComponentType.FeaturedProduct,
  component: FeaturedProduct,
};
