import React from 'react';
import {ImageBackground, View, VirtualizedList} from 'react-native';
import {Button, Text, useTheme} from 'react-native-paper';
import {useResponsiveValue} from '../../../../utils/useResponsiveValue';

export interface ProductGridProps {
  name: string;
  heading: string;
  description?: string;
  price: string;
  image: string;
  buttonTitle: string;
  label: string;
  onPress?: () => void;
}

export interface PromotionalProductGridProps {
  products: ProductGridProps[];
}

function PromotionalProductGrid(props: PromotionalProductGridProps) {
  const itemWidth = useResponsiveValue(['80%', '100%', '100%', '100%']);
  return (
    <View
      style={{
        flexDirection: itemWidth === '80%' ? 'column' : 'row',
        flexWrap: itemWidth === '80%' ? 'nowrap' : 'wrap',
        marginVertical: 10,
      }}
    >
      {props.products &&
        props.products.map((product, index) => (
          <View key={index}>
            <ProductGrid product={product} />
          </View>
        ))}
    </View>
  );
}

export default PromotionalProductGrid;

const ProductGrid = ({product}: {product: ProductGridProps}) => {
  const itemWidth = useResponsiveValue(['80%', '100%', '100%', '100%']);
  const theme = useTheme();

  return (
    <View
      style={{
        alignItems: 'center',
        marginHorizontal: itemWidth === '80%' ? 20 : 10,
      }}
    >
      <View style={{width: itemWidth, alignItems: 'center'}}>
        <ImageBackground
          source={{
            uri: product.image,
          }}
          style={{
            height: 240,
            width: '99%',
          }}
        >
          <View
            style={{
              height: '100%',
              width: '100%',
              alignItems: 'flex-end',
              justifyContent: 'flex-start',
            }}
          >
            <Text
              style={{
                color: theme.colors.background,
                fontSize: 14,
                fontWeight: '200',
                paddingHorizontal: 10,
                paddingVertical: 10,
                marginVertical: 5,
                borderRadius: 1,
                backgroundColor: '#313652',
              }}
              variant="titleSmall"
            >
              {product.label}
            </Text>
            <Text
              style={{
                color: '#000',
                fontSize: 14,
                fontWeight: '200',
                paddingHorizontal: 10,
                paddingVertical: 10,
                marginVertical: 5,
                borderRadius: 1,
                backgroundColor: theme.colors.background,
              }}
              variant="titleSmall"
            >
              {product.price}
            </Text>
          </View>
        </ImageBackground>
        <View style={{alignItems: 'center', marginBottom: 10}}>
          <Text
            style={{
              color: '#000',
              fontSize: 14,
              fontWeight: '200',
              marginVertical: 5,
            }}
            variant="titleSmall"
          >
            {product.heading}
          </Text>
          <Text
            style={{
              color: '#000',
              fontSize: 18,
              fontWeight: '200',
              marginVertical: 5,
            }}
            variant="titleSmall"
          >
            {product.name}
          </Text>

          <Text
            style={{
              color: '#000',
              fontSize: 14,
              fontWeight: '200',
              marginVertical: 5,
            }}
            variant="titleSmall"
          >
            {product.description}
          </Text>

          <Button
            mode="contained"
            style={{
              backgroundColor: '#000000',
              borderRadius: 1,
              marginVertical: 5,
            }}
            onPress={product.onPress}
          >
            {product.buttonTitle}
          </Button>
        </View>
      </View>
    </View>
  );
};
