import * as React from 'react';
import {BasketItemCMSInput} from '../containers/CartPage/components/BasketItem';
import {PricingCardCMSInput} from '../containers/CartPage/components/PricingCard';
import {PromoCodeCMSInput} from '../containers/CartPage/components/PromoCode';
import {SuggestedItemCMSInput} from '../containers/CartPage/components/SuggestedItem';
import {DeliveryAddressCardCMSInput} from '../containers/CheckOutPage/components/DeliveryAddressCard';
import {DeliveryDateSelectionCMSInput} from '../containers/CheckOutPage/components/DeliveryDateSelection';
import {PaymentMethodSelectionCMSInput} from '../containers/CheckOutPage/components/PaymentMethodSelection';
import {TimeSlotSelectionCMSInput} from '../containers/CheckOutPage/components/TimeSlotSelection';
import {HeaderCMSInput} from '../containers/Header';
import {BlogPostsCMSInput} from '../containers/HomePage/components/BlogPosts';
import {CategoriesCardCMSInput} from '../containers/HomePage/components/CategoriesCard';
import {DeliveringSelectionCMSInput} from '../containers/HomePage/components/DeliveringSelection';
import {FeaturedCollectionCMSInput} from '../containers/HomePage/components/FeaturedCollection';
import {FeaturedProductCMSInput} from '../containers/HomePage/components/FeaturedProduct';
import {HeroCategoriesCMSInput} from '../containers/HomePage/components/HeroCategories';
import {HeroSlideCMSInput} from '../containers/HomePage/components/HeroSlide';
import {PromotionalGridCMSInput} from '../containers/HomePage/components/PromotionalGrid';
import {PromotionalProductGridCMSInput} from '../containers/HomePage/components/PromotionalProductGrid';
import {SplitOfferCardCMSInput} from '../containers/HomePage/components/SplitOfferCard';
import {TextWithImageCMSInput} from '../containers/HomePage/components/TextWithImage';
import {OrderDetailsListCMSInput} from '../containers/OrderPage/components/OrderDetailsList';
import {SubCategoriesCMSInput} from '../containers/ProductListPage/components/SubCategories';
import {DeliveryAddressesCMSInput} from '../containers/ProfilePage/components/DeliveryAddresses';
import {PersonalInformationCMSInput} from '../containers/ProfilePage/components/PersonalInformation';
import {WalletBalanceCMSInput} from '../containers/ProfilePage/components/WalletBalance';

export interface RendererProps {
  components: object & {_component: string; key: string}[];
}

const renderer = [
  HeaderCMSInput,
  // home page
  DeliveringSelectionCMSInput,
  BlogPostsCMSInput,
  CategoriesCardCMSInput,
  FeaturedCollectionCMSInput,
  FeaturedProductCMSInput,
  HeroCategoriesCMSInput,
  HeroSlideCMSInput,
  PromotionalGridCMSInput,
  PromotionalProductGridCMSInput,
  SplitOfferCardCMSInput,
  TextWithImageCMSInput,
  // cart page
  BasketItemCMSInput,
  PricingCardCMSInput,
  PromoCodeCMSInput,
  SuggestedItemCMSInput,
  // checkout page
  DeliveryAddressCardCMSInput,
  DeliveryDateSelectionCMSInput,
  PaymentMethodSelectionCMSInput,
  TimeSlotSelectionCMSInput,
  // order page
  OrderDetailsListCMSInput,
  // product list page
  SubCategoriesCMSInput,
  // profile page
  DeliveryAddressesCMSInput,
  PersonalInformationCMSInput,
  WalletBalanceCMSInput,
];

const mapConverted: Record<string, React.FunctionComponent> = {};

renderer.forEach(e => {
  mapConverted[e._component] = e.component as never;
});

export default function (props: RendererProps) {
  return (
    <>
      {props.components.map(res => {
        const {_component, ...finalProps} = res;

        return React.createElement(mapConverted[_component], finalProps);
      })}
    </>
  );
}
