import * as React from 'react';
import {useIntl} from 'react-intl';
import {Image, Pressable, View} from 'react-native';
import {Badge, Button, Divider, List, Text} from 'react-native-paper';
import {useResponsiveValue} from '../../../../utils/useResponsiveValue';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {HomePageComponentType} from '../../../../types/common';

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
}

function FeaturedProduct(props: ProductDetailsProps) {
  const itemWidth = useResponsiveValue(['80%', '70%', '70%', '70%']);
  const [imageIndex, setImageIndex] = React.useState(0);
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  const intl = useIntl();

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

          <ImageSelection
            id={imageIndex}
            onChange={setImageIndex}
            imageLength={props.productInfo.image.length}
          />
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
          <Button
            testID="handleAddToCart"
            mode="outlined"
            onPress={props.handleAddToCart}
            labelStyle={{color: '#313652'}}
            style={{
              borderColor: '#313652',
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
              backgroundColor: '#313652',
              borderRadius: 1,
              marginBottom: 10,
            }}>
            {intl.formatMessage({defaultMessage: 'Buy it now'})}
          </Button>
        </View>
      </View>
      <>
        {props.productInfo.listInfo && (
          <List.Section>
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
              expanded={expanded}
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
