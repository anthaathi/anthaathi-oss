import {ScrollView} from 'react-native';
import React from 'react';
import CMSRenderer from '../../features/CMS';
import {HomePageComponentType} from '../../features/CMS/types/common';
import dataJson from '../../config/data.json';
import {RootStackParamList} from '../../types/Route';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useRecoilState} from 'recoil';
import {ProductProps} from '../../features/CMS/containers/HomePage/components/FeaturedCollection';
import Header from '../../features/CMS/containers/Header';
import productJson from '../../config/product.json';
import {ItemProps} from '../../features/CMS/containers/CartPage/components/BasketItem';
import { CartItemData } from '../../hooks/useCart';

const ProductPage = (
    props: NativeStackScreenProps<RootStackParamList, 'ProductPage'>,
) => {
    const productDetails = props.route.params?.productDetails;
    const productList = productJson.featuredCollection.products;
    const product = React.useMemo(() => {
        return productList.find(item => item.id === productDetails?.id);
    }, [productList, productDetails?.id]);

    const [cartItem, setCartItem] = useRecoilState(CartItemData);
    const cartProductData: ItemProps | undefined = React.useMemo(() => {
        if (cartItem.some(el => el.id === productDetails?.id)) {
            let cartObj = cartItem.find(el => el.id === productDetails?.id);
            return cartObj;
        }
    }, [cartItem, productDetails.id]);
    return (
        <>
            <Header
                leftIcon={'arrow-left'}
                leftOnPress={() => props.navigation.goBack()}
                languageIcon={true}
                cartIcon={true}
                cartOnPress={() => {
                    props.navigation.navigate('CartPage');
                }}
                mailIcon={false}
                searchIcon={true}
                logoImage={
                    'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/everyday_1_256x256.png?v=1662529180'
                }
            />

            <ScrollView contentContainerStyle={{paddingHorizontal: 5}}>
                <CMSRenderer
                    components={[
                        {
                            _component: HomePageComponentType.FeaturedProduct,
                            key: '126',
                            productInfo: productDetails,
                            handleBuyItNow: () => {
                                props.navigation.navigate('CartPage');
                            },
                        },
                        {
                            _component: HomePageComponentType.FeaturedCollection,
                            key: '1251',
                            title: 'Related Products',
                            products: dataJson.core.homePage.featuredCollection.products,
                            onProductPress: (item: ProductProps) => {
                                props.navigation.push('ProductPage', {
                                    productDetails: {
                                        id: item.id,
                                        description: item.description,
                                        weight_unit: item.weight_unit,
                                        packaging: item.packaging,
                                        key: item.key,
                                        notes: item.notes,
                                        name: item.name,
                                        listInfo: {
                                            description:
                                                '100% fresh. Sourced from UAE. Benefits: Dates contain vitamins such as B1, B2, B3 and B5, as well as A1 and C. Dates are loaded with potassium and rich in Iron, which is highly recommended for those who suffer from iron deficiency.',
                                            shippingInformation: 'Shipping Information',
                                        },
                                        blockInfo: {
                                            freeShipping: 'Free shipping in UAE',
                                            inStock: 'In stock, ready to ship',
                                            securePayments: 'Secure Payments',
                                            isFresh: 'Fresh',
                                        },
                                        price: item.price,
                                        currency: item.currency,
                                        image: [item.image],
                                    },
                                });
                            },
                        },
                        {
                            _component: HomePageComponentType.FeaturedCollection,
                            key: '1250',
                            title: 'Recently viewed',
                            products: dataJson.core.homePage.featuredCollection.products,
                            onProductPress: (item: ProductProps) => {
                                props.navigation.push('ProductPage', {
                                    productDetails: {
                                        id: item.id,
                                        description: item.description,
                                        weight_unit: item.weight_unit,
                                        packaging: item.packaging,
                                        key: item.key,
                                        notes: item.notes,
                                        name: item.name,
                                        listInfo: {
                                            description:
                                                '100% fresh. Sourced from UAE. Benefits: Dates contain vitamins such as B1, B2, B3 and B5, as well as A1 and C. Dates are loaded with potassium and rich in Iron, which is highly recommended for those who suffer from iron deficiency.',
                                            shippingInformation: 'Shipping Information',
                                        },
                                        blockInfo: {
                                            freeShipping: 'Free shipping in UAE',
                                            inStock: 'In stock, ready to ship',
                                            securePayments: 'Secure Payments',
                                            isFresh: 'Fresh',
                                        },
                                        price: item.price,
                                        currency: item.currency,
                                        image: [item.image],
                                    },
                                });
                            },
                        },
                    ]}
                />
            </ScrollView>
        </>
    );
};

export default ProductPage;
