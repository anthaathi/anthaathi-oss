export type CommonPlacement =
  | 'auto'
  | 'left'
  | 'right'
  | 'center'
  | 'justify'
  | undefined;

export enum CoreComponentType {
  Header = 'core.header',
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
}

export enum CartPageComponentType {
  BasketItem = 'cart.basket-item',
  PricingCard = 'cart.pricing-card',
  PromoCode = 'cart.promo-code',
  SuggestedItem = 'cart.suggested-item',
}
