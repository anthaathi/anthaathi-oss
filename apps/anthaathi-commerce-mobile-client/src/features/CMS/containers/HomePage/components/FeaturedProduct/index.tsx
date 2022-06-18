import * as React from 'react';
import {Image, Pressable, View} from 'react-native';
import {Badge, Button, Text} from 'react-native-paper';
import {useResponsiveValue} from '../../../../utils/useResponsiveValue';

export interface ProductDetails {
  name: string;
  description: string;
  price: number;
  image: string[];
}

export interface ProductDetailsProps {
  productInfo: ProductDetails;
  handleAddToCart?: () => {};
  handleBuyItNow?: () => {};
}

function FeaturedProduct(props: ProductDetailsProps) {
  const itemWidth = useResponsiveValue(['80%', '50%', '50%', '50%']);
  const [imageIndex, setImageIndex] = React.useState(0);

  const ImageSelection = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 15,
        }}
      >
        <Pressable
          style={{
            paddingHorizontal: 10,
          }}
          onPress={() => {
            setImageIndex(0);
          }}
        >
          <Badge
            style={{
              backgroundColor: imageIndex == 0 ? '#000000' : '#cccccc',
            }}
            size={imageIndex == 0 ? 12 : 8}
          />
        </Pressable>
        <Pressable
          style={{
            paddingHorizontal: 10,
          }}
          onPress={() => {
            setImageIndex(1);
          }}
        >
          <Badge
            style={{
              backgroundColor: imageIndex == 1 ? '#000000' : '#cccccc',
            }}
            size={imageIndex == 1 ? 12 : 8}
          />
        </Pressable>
      </View>
    );
  };

  return (
    <View style={{marginVertical: 10, marginHorizontal: 12}}>
      <Text
        variant="titleLarge"
        style={{marginBottom: 9, fontSize: 20, fontWeight: '600'}}
      >
        {props.productInfo.name}
      </Text>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
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

        <ImageSelection />
      </View>
      <View>
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
          Add to cart
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
          Buy it now
        </Button>
      </View>
    </View>
  );
}

const Pricing = ({price}: {price: number}) => {
  return (
    <>
      <Text variant="titleLarge" style={{fontSize: 16, fontWeight: '500'}}>
        Price
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

export default FeaturedProduct;
