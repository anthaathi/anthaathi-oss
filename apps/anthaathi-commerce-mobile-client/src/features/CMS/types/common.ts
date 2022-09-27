export type CommonPlacement =
  | 'auto'
  | 'left'
  | 'right'
  | 'center'
  | 'justify'
  | undefined;

export enum CoreComponentType {
  Header = 'core.header',
  DatePicker = 'core.date-picker',
  CMSAvatar = 'core.cms-avatar',
  Notification = 'core.notification',
  CMSText = 'core.cms-text',
  CMSTextInput = 'core.cms-text-input',
  CMSButton = 'core.cms-button',
  CMSFABButton = 'core.cms-fab-button',
  CMSSelectOption = 'core.cms-select-option',
}

export enum HomePageComponentType {
  BlogPosts = 'home.blog-posts',
  CategoriesCard = 'home.categories-card',
  DeliveringSelection = 'home.delivering-selection',
  FeaturedCollection = 'home.featured-collection',
  FeaturedProduct = 'home.featured-product',
  HeroCategories = 'home.hero-categories',
  HeroSlide = 'home.hero-slide',
  PromotionalGrid = 'home.promotional-grid',
  PromotionalProductGrid = 'home.promotional-product-grid',
  Spacer = 'home.spacer',
  SplitOfferCard = 'home.split-offer-card',
  TextWithImage = 'home.text-with-image',
  ChatFloatingButton = 'home.chat-floating-button',
}

export enum CategoryPageComponentType {
  CategoryList = 'category-page.category-list',
}

export enum OrderDetailsPageComponentType {
  DeliveryAddressDetailsCard = 'order-details-page.delivery-address-details-card',
  OrderedItems = 'order-details-page.ordered-items',
}

export enum CartPageComponentType {
  BasketItem = 'cart-page.basket-item',
  PricingCard = 'cart-page.pricing-card',
  PromoCode = 'cart-page.promo-code',
  SuggestedItem = 'cart-page.suggested-item',
  CartCard = 'cart-page.cart-card',
}

export enum CheckOutPageComponentType {
  DeliveryAddressCard = 'checkout-page.delivery-address-card',
  DeliveryDateSelection = 'checkout-page.delivery-date-selection',
  PaymentMethodSelection = 'checkout-page.payment-method-selection',
  TimeSlotSelection = 'checkout-page.time-slot-selection',
}

export enum OrderPageComponentType {
  OrderDetailsList = 'order-page.order-details-list',
}

export enum ProductListPageComponentType {
  SubCategories = 'product-list.sub-categories',
  ProductList = 'product-list.product-list',
}

export enum ProfilePageComponentType {
  DeliveryAddresses = 'profile-page.delivery-addresses',
  PersonalInformation = 'profile-page.personal-information',
  WalletBalance = 'profile-page.wallet-balance',
}
