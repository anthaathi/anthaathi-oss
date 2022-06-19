import React from 'react';
import {ImageBackground, View, VirtualizedList} from 'react-native';
import {Text, useTheme} from 'react-native-paper';
import {useResponsiveValue} from '../../../../utils/useResponsiveValue';

export interface ProductGridProps {
  name: string;
  description?: string;
  price: string;
  image: string;
  onPress?: () => void;
}

export interface PromotionalProductGridProps {
  products: ProductGridProps[];
}

function PromotionalProductGrid(props: PromotionalProductGridProps) {
  return (
    <View>
      {props.products &&
        props.products.map((product, index) => (
          <View
            key={index}
            style={{
              backgroundColor: '#f8f8f8',
            }}
          >
            <ProductGrid product={product} />
          </View>
        ))}
    </View>
  );
}

export default PromotionalProductGrid;

const ProductGrid = ({product}: {product: ProductGridProps}) => {
  const itemWidth = useResponsiveValue(['80%', '40%', '40%', '40%']);
  const theme = useTheme();

  return (
    <View style={{alignItems: 'center'}}>
      <ImageBackground
        source={{
          uri: product.image,
        }}
        style={{
          height: 240,
          width: itemWidth,
        }}
      >
        <View
          style={{
            // flexGrow: 1,
            // display: 'flex',
            height: '100%',
            width: '100%',
            alignItems: 'flex-end',
            justifyContent: 'flex-start',
          }}
        >
          <Text
            style={{
              color: theme.colors.background,
              fontSize: 16,
              fontWeight: '600',
              paddingHorizontal: 10,
              paddingVertical: 10,
              marginVertical: 5,
              borderRadius: 1,
              backgroundColor: '#313652',
            }}
            variant="titleSmall"
          >
            New
          </Text>
          <Text
            style={{
              color: '#000',
              fontSize: 16,
              fontWeight: '600',
              paddingHorizontal: 10,
              paddingVertical: 10,
              marginVertical: 5,
              borderRadius: 1,
              backgroundColor: theme.colors.background,
            }}
            variant="titleSmall"
          >
            New
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};
