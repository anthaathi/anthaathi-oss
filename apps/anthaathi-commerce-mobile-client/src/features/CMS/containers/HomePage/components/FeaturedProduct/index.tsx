import * as React from 'react';
import {useIntl} from 'react-intl';
import {Image, Pressable, View} from 'react-native';
import {
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
import CartQuantityChange from "../../../CartPage/components/CartQuantityChange";
import {useState} from "react";
import {useCart} from "../../../../../../hooks/useCart";

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
    handleBuyItNow: () => {};
}

function FeaturedProduct(props: ProductDetailsProps) {
    const itemWidth = useResponsiveValue(['80%', '70%', '70%', '70%']);
    const [imageIndex, setImageIndex] = React.useState(0);
    const [expanded, setExpanded] = React.useState(true);

    const {setCartItem} = useCart();
    const handlePress = () => setExpanded(!expanded);

    const [quantity, setQuantity] = useState(1);
    const intl = useIntl();
    const theme = useTheme();

    const handleAddToCart = () => {
        console.log('caleed');
        setCartItem(props.productInfo.id, quantity, true);
    };

    const handleBuyItNow = () => {
        console.log('caleed');
        handleAddToCart();
        props.handleBuyItNow();
    };

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
                        <View style={{paddingVertical: 15}}/>
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
                    <BlockInfo data={props.productInfo.blockInfo}/>
                    {/* {cartProductData && cartProductData.id === props.productInfo.id && ( */}
                    <CartQuantityChange
                        id={props.productInfo.id}
                        initialValue={quantity}
                        onChangeQuantity={(value) => {
                            setQuantity(value);
                        }}
                    />
                    <Button
                        testID="handleAddToCart"
                        mode="outlined"
                        onPress={() => handleAddToCart()}
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
                        onPress={() => handleBuyItNow()}
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
                        <Divider/>
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
                        <Divider/>
                    </List.Section>
                )}
            </>
        </View>
    );
}

const Pricing = ({price, currency}: { price: number; currency: string }) => {
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

const BlockInfo = ({data}: { data: BlockInfoProps }) => {
    return (
        <>
            <TextIcon title={data.freeShipping} iconName="md-globe-outline"/>
            <TextIcon title={data.isFresh} iconName="leaf-outline"/>
            <TextIcon title={data.securePayments} iconName="lock-closed-outline"/>
            <TextIcon title={data.inStock} iconName="cart-outline"/>
        </>
    );
};

const TextIcon = ({iconName, title}: { iconName: string; title: string }) => {
    return (
        <View
            style={{flexDirection: 'row', alignItems: 'center', marginVertical: 2}}>
            <Ionicons name={iconName} size={16} color="#000000"/>
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
