import { ServerContext } from 'solid-start/server';
import { useContext } from 'solid-js';
import { SplitSlides } from '~/Features/CMSComponents/Components/SplitSlides';
import { EmailSignup } from '~/Features/CMSComponents/Components/EmailSignup';
import { addServerTiming } from '~/utils/add-server-timing';
import { isServer } from 'solid-js/web';
import { PromoGrid } from '~/Features/CMSComponents/Components/PromoGrid';
import { NewsLetter } from '~/Features/CMSComponents/Components/NewsLetter';
import { ImageAndText } from '~/Features/CMSComponents/Components/ImageAndText';

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
