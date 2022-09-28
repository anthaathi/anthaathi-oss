import { ServerContext } from 'solid-start/server';
import { useContext } from 'solid-js';
import { SplitSlides } from '~/Features/CMSComponents/Components/SplitSlides';
import { EmailSignup } from '~/Features/CMSComponents/Components/EmailSignup';
import { addServerTiming } from '~/utils/add-server-timing';
import { isServer } from 'solid-js/web';
import { PromoGrid } from '~/Features/CMSComponents/Components/PromoGrid';
import { NewsLetter } from '~/Features/CMSComponents/Components/NewsLetter';
import { ImageAndText } from '~/Features/CMSComponents/Components/ImageAndText';
import { SplitOfferCard } from './Components/SplitOfferCard';
import { HeroSlide } from './Components/HeroSlide';

export function RenderCMSComponents() {
  const context = useContext(ServerContext);

  const timeStart = new Date();

  const renderedElements = (
    <>
      <NewsLetter />
      <SplitSlides />
      <PromoGrid />
      <ImageAndText />
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi culpa
      cum dolor doloremque doloribus ea est fugit illum, in laudantium modi
      provident quis quos, recusandae soluta sunt ullam, vitae? Accusamus. Lorem
      ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate doloribus
      eius laboriosam voluptas! Ab accusantium aspernatur beatae dignissimos
      dolorem, eius, eum exercitationem magni, nam officiis recusandae sequi
      suscipit tempora ut? Lorem ipsum dolor sit amet, consectetur adipisicing
      elit. A aperiam, assumenda aut eius eos error ex harum, hic, iusto maxime
      modi nostrum officia perferendis quae quam sequi tempora ullam vitae!
      <EmailSignup />
      <SplitOfferCard
        title={'Get Exclusive Offers'}
        subtitle={
          'Get exclusive offers & more by signing up for our promotional email'
        }
        buttonTitle={'View Offers'}
        image={
          'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/Newsletter_bg_300x.png?v=1653648705'
        }
      />
      <HeroSlide
        backgroundImageSrc="https://cdn.shopify.com/s/files/1/0648/1303/9842/files/fresh-squeezed-orange-juice_300x.jpg?v=1653584430"
        title="Fresh Juices"
        subTitle="Perfect for rich lifestyle photography"
        buttonTitle="View All"
      />
    </>
  );

  const timeEnd = new Date();

  if (isServer) {
    addServerTiming(
      context.responseHeaders,
      'cms-rendered',
      timeEnd.getTime() - timeStart.getTime(),
      'Render CMS Components Dynamic',
    );
  }

  return renderedElements;
}
