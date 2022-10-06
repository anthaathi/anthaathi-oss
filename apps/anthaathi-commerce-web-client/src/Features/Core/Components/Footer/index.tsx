import { useStyletron } from '@anthaathi/solid-styletron';
import Facebook from '../../../../icons/facebook.svg';
import Instagram from '../../../../icons/instagram.svg';
import Twitter from '../../../../icons/twitter.svg';
import Tiktok from '../../../../icons/tiktok.svg';
import { Button, Kind } from '../Button';
import { Link } from '@solidjs/router';
import { IconEnvelopeOSmall } from '@anthaathi/oracle-apex-solid-icons';
import { For, JSX, Show } from 'solid-js';
import { Grid } from '~/Features/Core/Components/Grid';

export function Footer() {
  const [css, $theme] = useStyletron();

  // @ts-ignore
  return (
    <div
      class={css({
        backgroundColor: '#EEE',
        paddingTop: $theme.sizing.scale500,
        paddingBottom: $theme.sizing.scale500,
      })}
    >
      <footer
        class={css({
          display: 'flex',
          paddingBottom: $theme.sizing.scale100,
        })}
      >
        <Grid
          $override={{
            Root: {
              style: {
                maxWidth: $theme.sizing.maxWidth,
                margin: '0 auto',
                width: '100%',
                padding: $theme.sizing.scale500,
              },
            },
          }}
        >
          <For each={FooterLinksData}>
            {(item) => <FooterSection {...item} />}
          </For>
        </Grid>
      </footer>
      <div
        class={css({
          display: 'flex',
          alignItems: 'center',
          maxWidth: $theme.sizing.maxWidth,
          margin: '0 auto',
          width: `calc(100% - ${$theme.sizing.scale400} - ${$theme.sizing.scale400})`,
          flexWrap: 'wrap',
          paddingLeft: $theme.sizing.scale400,
          paddingRight: $theme.sizing.scale400,
          flexDirection: 'column',
          [$theme.mediaQuery?.md || '']: {
            flexDirection: 'row',
          },
        })}
      >
        <div class={css({ display: 'flex' })}>
          <Button $kind={Kind.Tertiary} $startEnhancer={() => <Facebook />} />
          <Button $kind={Kind.Tertiary} $startEnhancer={() => <Instagram />} />
          <Button $kind={Kind.Tertiary} $startEnhancer={() => <Twitter />} />
          <Button $kind={Kind.Tertiary} $startEnhancer={() => <Tiktok />} />
        </div>

        <span class={css({ flexGrow: 1 })} />
        <p
          class={css([
            $theme.typography.LabelMedium,
            {
              flexGrow: 1,
              width: '100%',
              textAlign: 'center',
              [$theme.mediaQuery?.md || '']: {
                flexGrow: 'inherit',
                width: 'max-content',
              },
            },
          ])}
        >
          Copyright &copy; {new Date().getFullYear()} NRTC Fresh. All rights
          reserved.
        </p>
      </div>
    </div>
  );
}

function FooterSection(props: FooterSection) {
  const [css, $theme] = useStyletron();

  return (
    <ul
      class={css({
        flexGrow: 1,
        paddingLeft: 0,
        listStyle: 'none',
        width: '100%',
        paddingTop: 0,
        paddingBottom: $theme.sizing.scale800,
        margin: 0,
        gridColumn: props.span,
        [$theme.mediaQuery?.md || '']: { width: 'inherit' },
      })}
    >
      <Show when={props.title} keyed>
        <li>
          <h6
            class={css([
              $theme.typography.LabelLarge,
              {
                marginTop: $theme.sizing.scale200,
                marginBottom: $theme.sizing.scale200,
              },
            ])}
          >
            {props.title}
          </h6>
        </li>
      </Show>

      <For each={props.items}>{(item) => <FooterLinks item={item} />}</For>
    </ul>
  );
}

interface FooterLink {
  title: JSX.Element;
  href: string;
}

interface FooterSection {
  title?: JSX.Element;
  span?: string;
  items: FooterLink[];
}

const FooterLinksData: FooterSection[] = [
  {
    title: 'About',
    items: [
      {
        title: 'About NRTC Fresh',
        href: '/about',
      },
      {
        title: 'Delivery Information',
        href: '/about',
      },
      {
        title: 'Contact Us',
        href: '/about',
      },
      {
        title: 'Terms & Conditions',
        href: '/about',
      },
    ],
  },
  {
    title: 'Customer Service',
    items: [
      {
        title: 'My Account',
        href: '/',
      },
      {
        title: 'Orders',
        href: '/',
      },
      {
        title: 'Addresses',
        href: '/',
      },
      {
        title: 'Account details',
        href: '/',
      },
    ],
  },
  {
    items: [
      {
        title: 'FAQ',
        href: '/',
      },
      {
        title: 'Return Policy',
        href: '/',
      },
      {
        title: 'NRTC Group Website',
        href: '/',
      },
      {
        title: 'Blogs',
        href: '/',
      },
      {
        title: 'Privacy Policy',
        href: '/',
      },
      {
        title: 'Order Cancellation Policy',
        href: '/',
      },
    ],
  },
  {
    title: 'Contact Us',
    items: [
      {
        title: () => {
          const [css] = useStyletron();
          return (
            <>
              <IconEnvelopeOSmall class={css({ marginRight: '12px' })} />{' '}
              <span class={css({ top: '-1px', position: 'relative' })}>
                customerservice@gmail.com
              </span>
            </>
          );
        },
        href: '/',
      },
    ],
  },
  {
    title: 'Office Address',
    items: [
      {
        title: 'Al Awir Central Market, P.O. Box 21802, Dubai, UAE',
        href: '/',
      },
    ],
  },
];

const FooterLinks = (props: { item: FooterLink }) => {
  const [css, $theme] = useStyletron();

  return (
    <li
      class={css({
        paddingBottom: $theme.sizing.scale0,
        paddingTop: $theme.sizing.scale0,
      })}
    >
      <Link
        href={props.item.href}
        class={css({
          textDecoration: 'none',
          color: '#000',
          ':hover': { textDecoration: 'underline' },
          ':focus': { textDecoration: 'underline' },
          ':active': { textDecoration: 'underline' },
          outline: 'none',
        })}
      >
        <h6
          class={css([
            $theme.typography.LabelMedium,
            {
              marginTop: $theme.sizing.scale200,
              marginBottom: $theme.sizing.scale200,
              display: 'flex',
              alignItems: 'center',
            },
          ])}
        >
          {props.item.title}
        </h6>
      </Link>
    </li>
  );
};
