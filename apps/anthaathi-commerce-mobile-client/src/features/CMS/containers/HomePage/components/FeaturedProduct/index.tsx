import * as React from 'react';
import {useIntl} from 'react-intl';
import {Image, Pressable, View} from 'react-native';
import {Badge, Button, Text} from 'react-native-paper';
import {useResponsiveValue} from '../../../../utils/useResponsiveValue';

export interface ProductDetails {
  name: string;
  description: string;
  price: string;
  image: string[];
}

export interface ProductDetailsProps {
  productInfo: ProductDetails;
  handleAddToCart?: () => {};
  handleBuyItNow?: () => {};
}

function FeaturedProduct(props: ProductDetailsProps) {
  const itemWidth = useResponsiveValue(['80%', '70%', '70%', '70%']);
  const [imageIndex, setImageIndex] = React.useState(0);
  const intl = useIntl();

  return (
    <View
      style={{
        marginVertical: 10,
        marginHorizontal: 12,
        flexDirection: itemWidth === '80%' ? 'column' : 'row',
      }}
    >
      {itemWidth === '80%' && (
        <Text
          variant="titleLarge"
          style={{marginBottom: 9, fontSize: 20, fontWeight: '600'}}
        >
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
        ]}
      >
        <Image
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
            style={{marginBottom: 9, fontSize: 20, fontWeight: '600'}}
          >
            {props.productInfo.name}
          </Text>
        )}

        <Pricing price={props.productInfo.price} />
        <Text
          variant="titleLarge"
          style={{marginBottom: 9, fontSize: 12, fontWeight: '400'}}
        >
          {props.productInfo.description}
        </Text>
        <Button
          mode="outlined"
          onPress={props.handleAddToCart}
          labelStyle={{color: '#313652'}}
          style={{borderColor: '#313652', borderRadius: 1, marginBottom: 10}}
        >
          {intl.formatMessage({defaultMessage: 'Add to cart'})}
        </Button>

        <Button
          mode="contained"
          onPress={props.handleBuyItNow}
          labelStyle={{color: '#ffffff'}}
          style={{
            backgroundColor: '#313652',
            borderRadius: 1,
            marginBottom: 10,
          }}
        >
          {intl.formatMessage({defaultMessage: 'Buy it now'})}
        </Button>
      </View>
    </View>
  );
}

const Pricing = ({price}: {price: string}) => {
  const intl = useIntl();
  return (
    <>
      <Text variant="titleLarge" style={{fontSize: 16, fontWeight: '500'}}>
        {intl.formatMessage({defaultMessage: 'Price'})}
      </Text>
      <Text
        variant="titleLarge"
        style={{marginBottom: 9, fontSize: 16, fontWeight: '500'}}
      >
        {price}
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
      }}
    >
      {[...Array(imageLength).keys()].map(index => (
        <Pressable
          key={index}
          style={{
            paddingHorizontal: 10,
            paddingVertical: 15,
          }}
          onPress={() => {
            onChange(index);
          }}
        >
          <Badge
            style={{
              backgroundColor: id == index ? '#000000' : '#cccccc',
            }}
            size={id == index ? 12 : 8}
          />
        </Pressable>
      ))}
    </View>
  );
};

export default FeaturedProduct;
