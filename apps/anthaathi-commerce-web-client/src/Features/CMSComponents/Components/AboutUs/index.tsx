import { Grid } from '~/Features/Core/Components/Grid';
import { useStyletron } from '@anthaathi/solid-styletron';
import { For } from 'solid-js';

export function AboutUs() {
  const [css, $theme] = useStyletron();

  return (
    <div>
      <div
        class={css({
          maxWidth: $theme.sizing.maxWidth,
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingTop: $theme.sizing.scale1000,
        })}
      >
        <h2
          class={css({
            margin: '0 auto',
            paddingBottom: $theme.sizing.scale500,
            textAlign: 'center',
            fontWeight: 400,
            fontSize: '36px',
            lineHeight: '1.2',
            letterSpacing: '0.0em',
          })}
        >
          Why Choose Us
        </h2>
      </div>
      <Grid
        $override={{
          Root: {
            style: {
              maxWidth: $theme.sizing.maxWidth,
              marginLeft: 'auto',
              marginRight: 'auto',
              paddingTop: $theme.sizing.scale800,
              paddingBottom: $theme.sizing.scale800,
              paddingLeft: $theme.sizing.scale500,
              paddingRight: $theme.sizing.scale500,
              gridRowGap: '24px',
              gridColumnGap: '24px',
            },
          },
        }}
        columns={[1, 1, 3, 3]}
      >
        <For each={AboutUsData}>
          {(data) => {
            return (
              <AboutUsCell
                src={data.src}
                srcSet={data.srcSet}
                title={data.title}
                content={data.content}
              />
            );
          }}
        </For>
      </Grid>
    </div>
  );
}

export interface AboutUsCellProps {
  src: string;
  srcSet: string[];
  title: string;
  content: string;
}

export function AboutUsCell(props: AboutUsCellProps) {
  const [css, $theme] = useStyletron();

  return (
    <div
      class={css({
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: $theme.sizing.scale500,
      })}
    >
      <div
        class={css({
          textAlign: 'center',
        })}
      >
        <div
          class={css({
            margin: '0 auto',
            maxWidth: '70px',
          })}
        >
          <img
            src={props.src}
            alt="test"
            class={css({
              width: '100%',
              paddingBottom: $theme.sizing.scale500,
            })}
          />
        </div>
        <h2
          class={css({
            margin: '0 auto',
            paddingBottom: $theme.sizing.scale500,
            fontWeight: 300,
            fontSize: '29px',
            lineHeight: '1.2',
            letterSpacing: '0.0em',
          })}
        >
          {props.title}
        </h2>
        <p
          class={css({
            margin: '0 auto',
            paddingBottom: $theme.sizing.scale500,
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '1.5',
            letterSpacing: '0.025em',
          })}
        >
          {props.content}
        </p>
      </div>
    </div>
  );
}

const AboutUsData = [
  {
    src: 'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/icon-WCU-01_180x.png?v=1653674786',
    srcSet: [
      '//cdn.shopify.com/s/files/1/0648/1303/9842/files/icon-WCU-01_180x.png?v=1653674786 180w',
      ' //cdn.shopify.com/s/files/1/0648/1303/9842/files/icon-WCU-01_360x.png?v=1653674786 360w',
      ' //cdn.shopify.com/s/files/1/0648/1303/9842/files/icon-WCU-01_540x.png?v=1653674786 540w',
      ' //cdn.shopify.com/s/files/1/0648/1303/9842/files/icon-WCU-01_720x.png?v=1653674786 720w',
      ' //cdn.shopify.com/s/files/1/0648/1303/9842/files/icon-WCU-01_900x.png?v=1653674786 900w',
      ' //cdn.shopify.com/s/files/1/0648/1303/9842/files/icon-WCU-01_1080x.png?v=1653674786 1080w',
    ],
    title: 'Save Time',
    content:
      'Grocery shopping online for home delivery allows you the pleasure of shopping from the comfort of your own home.',
  },
  {
    src: 'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/icon-WCU-02_1fcc0ad1-cb59-4a64-a466-5002932dbd25_180x.png?v=1653674657',
    srcSet: [
      '//cdn.shopify.com/s/files/1/0648/1303/9842/files/icon-WCU-02_1fcc0ad1-cb59-4a64-a466-5002932dbd25_180x.png?v=1653674657 180w',
      ' //cdn.shopify.com/s/files/1/0648/1303/9842/files/icon-WCU-02_1fcc0ad1-cb59-4a64-a466-5002932dbd25_360x.png?v=1653674657 360w',
      ' //cdn.shopify.com/s/files/1/0648/1303/9842/files/icon-WCU-02_1fcc0ad1-cb59-4a64-a466-5002932dbd25_540x.png?v=1653674657 540w',
      ' //cdn.shopify.com/s/files/1/0648/1303/9842/files/icon-WCU-02_1fcc0ad1-cb59-4a64-a466-5002932dbd25_720x.png?v=1653674657 720w',
      ' //cdn.shopify.com/s/files/1/0648/1303/9842/files/icon-WCU-02_1fcc0ad1-cb59-4a64-a466-5002932dbd25_900x.png?v=1653674657 900w',
      ' //cdn.shopify.com/s/files/1/0648/1303/9842/files/icon-WCU-02_1fcc0ad1-cb59-4a64-a466-5002932dbd25_1080x.png?v=1653674657 1080w',
    ],
    title: 'Cost-Effective',
    content:
      'We are proud to deliver high quality fresh fruits and vegetables from farm to your home at a competitive price.',
  },
  {
    src: 'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/icon-WCU-03_180x.png?v=1653674893',
    srcSet: [
      '//cdn.shopify.com/s/files/1/0648/1303/9842/files/icon-WCU-03_180x.png?v=1653674893 180w',
      ' //cdn.shopify.com/s/files/1/0648/1303/9842/files/icon-WCU-03_360x.png?v=1653674893 360w',
      ' //cdn.shopify.com/s/files/1/0648/1303/9842/files/icon-WCU-03_540x.png?v=1653674893 540w',
      ' //cdn.shopify.com/s/files/1/0648/1303/9842/files/icon-WCU-03_720x.png?v=1653674893 720w',
      ' //cdn.shopify.com/s/files/1/0648/1303/9842/files/icon-WCU-03_900x.png?v=1653674893 900w',
      ' //cdn.shopify.com/s/files/1/0648/1303/9842/files/icon-WCU-03_1080x.png?v=1653674893 1080w',
    ],
    title: 'Choose your own Delivery day',
    content:
      'You can easily pick the most convenient delivery day and NRTC delivery team will cater to your schedule.',
  },
  {
    src: 'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/icon-WCU-04_180x.png?v=1653674897',
    srcSet: [
      '//cdn.shopify.com/s/files/1/0648/1303/9842/files/icon-WCU-04_180x.png?v=1653674897 180w',
      ' //cdn.shopify.com/s/files/1/0648/1303/9842/files/icon-WCU-04_360x.png?v=1653674897 360w',
      ' //cdn.shopify.com/s/files/1/0648/1303/9842/files/icon-WCU-04_540x.png?v=1653674897 540w',
      ' //cdn.shopify.com/s/files/1/0648/1303/9842/files/icon-WCU-04_720x.png?v=1653674897 720w',
      ' //cdn.shopify.com/s/files/1/0648/1303/9842/files/icon-WCU-04_900x.png?v=1653674897 900w',
      ' //cdn.shopify.com/s/files/1/0648/1303/9842/files/icon-WCU-04_1080x.png?v=1653674897 1080w',
    ],
    title: 'Eat Healthy',
    content:
      'Customer Satisfaction being our prime focus, we source and deliver finest and fully enriched natural fruits and vegetables from exclusive farms.',
  },
  {
    src: 'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/icon-WCU-05_180x.png?v=1653674902',
    srcSet: [
      '//cdn.shopify.com/s/files/1/0648/1303/9842/files/icon-WCU-05_180x.png?v=1653674902 180w',
      ' //cdn.shopify.com/s/files/1/0648/1303/9842/files/icon-WCU-05_360x.png?v=1653674902 360w',
      ' //cdn.shopify.com/s/files/1/0648/1303/9842/files/icon-WCU-05_540x.png?v=1653674902 540w',
      ' //cdn.shopify.com/s/files/1/0648/1303/9842/files/icon-WCU-05_720x.png?v=1653674902 720w',
      ' //cdn.shopify.com/s/files/1/0648/1303/9842/files/icon-WCU-05_900x.png?v=1653674902 900w',
      ' //cdn.shopify.com/s/files/1/0648/1303/9842/files/icon-WCU-05_1080x.png?v=1653674902 1080w',
    ],
    title: 'Complete Support',
    content:
      'For your every query, complaint or assistance required, whether big or small, our customer care will be available whenever you need us.',
  },
  {
    src: 'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/icon-WCU-06_180x.png?v=1653674906',
    srcSet: [
      '//cdn.shopify.com/s/files/1/0648/1303/9842/files/icon-WCU-06_180x.png?v=1653674906 180w',
      ' //cdn.shopify.com/s/files/1/0648/1303/9842/files/icon-WCU-06_360x.png?v=1653674906 360w',
      ' //cdn.shopify.com/s/files/1/0648/1303/9842/files/icon-WCU-06_540x.png?v=1653674906 540w',
      ' //cdn.shopify.com/s/files/1/0648/1303/9842/files/icon-WCU-06_720x.png?v=1653674906 720w',
      ' //cdn.shopify.com/s/files/1/0648/1303/9842/files/icon-WCU-06_900x.png?v=1653674906 900w',
      ' //cdn.shopify.com/s/files/1/0648/1303/9842/files/icon-WCU-06_1080x.png?v=1653674906 1080w',
    ],
    title: 'Made with Love',
    content:
      'We have been delivering freshness since 1973, with a vision to bring in the freshness of premium quality fruits and vegetables',
  },
];
