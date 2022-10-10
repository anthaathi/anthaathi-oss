import { useStyletron } from '@anthaathi/solid-styletron';
import Facebook from '../../../../icons/facebook.svg';
import Instagram from '../../../../icons/instagram.svg';
import Twitter from '../../../../icons/twitter.svg';
import Tiktok from '../../../../icons/tiktok.svg';
import { Button, Kind } from '../Button';
import { Link } from '@solidjs/router';
import {
  IconEnvelopeOLarge,
  IconPhoneLarge,
  IconSendLarge,
  IconSendOLarge,
} from '@anthaathi/oracle-apex-solid-icons';
import { For, JSX, Show } from 'solid-js';
import { Input } from '~/Features/Core/Components/Input';

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
        <div
          class={css({
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            [$theme.mediaQuery?.md || '']: {
              flexDirection: 'row',
              textAlign: 'left',
            },
            maxWidth: $theme.sizing.maxWidth,
            margin: '0 auto',
            width: '100%',
            padding: $theme.sizing.scale500,
          })}
        >
          <div
            class={css({
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            })}
          >
            <FooterInfoSection />
          </div>
          <div
            class={css({
              flex: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              [$theme.mediaQuery?.md || '']: {
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'space-evenly',
              },
            })}
          >
            <div
              class={css({
                flex: 0.2,
              })}
            ></div>
            <div
              class={css({
                flex: 0.8,
                display: 'flex',
                flexDirection: 'column',
              })}
            >
              <FooterSection {...FooterLinksData[0]} />
              <FooterSection {...FooterLinksData[1]} />
            </div>
            <div
              class={css({
                flex: 0.1,
              })}
            ></div>
            <div
              class={css({
                flex: 0.8,
                display: 'flex',
                flexDirection: 'row',
              })}
            >
              <FooterSection {...FooterLinksData[2]} />
            </div>
            <div
              class={css({
                flex: 0.2,
              })}
            ></div>
          </div>
          <div
            class={css({
              flex: 1,
            })}
          >
            <FooterSocialMediaSection />
          </div>
        </div>
      </footer>
    </div>
  );
}

function FooterSection(props: FooterSection) {
  const [css, $theme] = useStyletron();

  return (
    <ul
      class={css({
        paddingLeft: 0,
        listStyle: 'none',
        paddingTop: 0,
        paddingBottom: $theme.sizing.scale800,
        margin: 0,
      })}
    >
      <Show when={props.title} keyed>
        <li>
          <h6
            class={css({
              marginTop: $theme.sizing.scale200,
              marginBottom: $theme.sizing.scale200,
              fontSize: $theme.typography.font450.fontSize,
              fontWeight: $theme.typography.font550.fontWeight,
            })}
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

function FooterInfoSection() {
  const [css, $theme] = useStyletron();

  return (
    <div
      class={css({
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
      })}
    >
      <div
        class={css({
          margin: $theme.sizing.scale500,
          paddingLeft: $theme.sizing.scale500,
          paddingRight: $theme.sizing.scale500,
        })}
      >
        <img src="https://www.nrtcfresh.com/wp-content/uploads/elementor/thumbs/logo-oxvdmbxi3tcpf189vya3e34nmydvnk8z7t3tmr6um0.png" />
      </div>
      <div
        class={css({
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          [$theme.mediaQuery?.md || '']: {
            justifyContent: 'flex-start',
          },
          gap: $theme.sizing.scale100,
          paddingLeft: $theme.sizing.scale500,
          paddingRight: $theme.sizing.scale500,
          paddingBottom: $theme.sizing.scale700,
        })}
      >
        <img
          class={css({ height: '50px' })}
          src="https://www.nrtcfresh.com/wp-content/uploads/2020/02/logo-img1.png"
        />
        <img
          class={css({ height: '50px' })}
          src="https://www.nrtcfresh.com/wp-content/uploads/2020/02/logo-img3.png"
        />
        <img
          class={css({ height: '50px' })}
          src="https://www.nrtcfresh.com/wp-content/uploads/2020/02/logo-img6.png"
        />
      </div>
      <div
        class={css({
          paddingBottom: $theme.sizing.scale200,
          paddingLeft: $theme.sizing.scale500,
          paddingRight: $theme.sizing.scale500,
          fontSize: $theme.typography.font450.fontSize,
          fontWeight: $theme.typography.font550.fontWeight,
        })}
      >
        Address
      </div>
      <div
        class={css({
          paddingBottom: $theme.sizing.scale700,
          paddingLeft: $theme.sizing.scale500,
          paddingRight: $theme.sizing.scale500,
          fontSize: $theme.typography.LabelLarge.fontSize,
          fontWeight: $theme.typography.LabelLarge.fontWeight,
        })}
      >
        Al Awir Central Market, P.O. Box 21802, Dubai, UAE
      </div>
      <div
        class={css({
          paddingBottom: $theme.sizing.scale200,
          paddingLeft: $theme.sizing.scale500,
          paddingRight: $theme.sizing.scale500,
          fontSize: $theme.typography.font450.fontSize,
          fontWeight: $theme.typography.font550.fontWeight,
        })}
      >
        Contact Number
      </div>
      <div
        class={css({
          paddingLeft: $theme.sizing.scale500,
          paddingBottom: $theme.sizing.scale700,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          [$theme.mediaQuery?.md || '']: {
            justifyContent: 'flex-start',
          },
          columnGap: $theme.sizing.scale500,
        })}
      >
        <Link
          href="https://api.whatsapp.com/send?phone=+971509751445"
          target="_blank"
          class={css({
            textDecoration: 'none',
            color: 'black',
            fontSize: $theme.typography.LabelLarge.fontSize,
            fontWeight: $theme.typography.LabelLarge.fontWeight,
          })}
        >
          <div
            class={css({
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            })}
          >
            <IconPhoneLarge
              class={css({ paddingRight: $theme.sizing.scale100 })}
              width={$theme.sizing.scale800}
              height={$theme.sizing.scale800}
            />
            0509751445
          </div>
        </Link>
        <Link
          href="tel:043208889"
          target="_blank"
          class={css({
            marginLeft: $theme.sizing.scale400,
            textDecoration: 'none',
            color: 'black',
            fontSize: $theme.typography.LabelLarge.fontSize,
            fontWeight: $theme.typography.LabelLarge.fontWeight,
          })}
        >
          <div
            class={css({
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            })}
          >
            <IconSendOLarge
              class={css({ paddingRight: $theme.sizing.scale100 })}
              width={$theme.sizing.scale800}
              height={$theme.sizing.scale800}
            />
            043208889
          </div>
        </Link>
      </div>
      <div
        class={css({
          paddingBottom: $theme.sizing.scale200,
          paddingLeft: $theme.sizing.scale500,
          paddingRight: $theme.sizing.scale500,
          fontSize: $theme.typography.font450.fontSize,
          fontWeight: $theme.typography.font550.fontWeight,
        })}
      >
        Email
      </div>
      <Link
        href="mailto:customercare@nrtcfresh.com"
        target="_blank"
        class={css({
          textDecoration: 'none',
          color: 'black',
          paddingLeft: $theme.sizing.scale500,
          marginBottom: $theme.sizing.scale700,
          fontSize: $theme.typography.LabelLarge.fontSize,
          fontWeight: $theme.typography.LabelLarge.fontWeight,
        })}
      >
        <div
          class={css({
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            [$theme.mediaQuery?.md || '']: {
              justifyContent: 'flex-start',
            },
            columnGap: $theme.sizing.scale500,
            fontSize: $theme.typography.LabelLarge.fontSize,
            fontWeight: $theme.typography.LabelLarge.fontWeight,
          })}
        >
          <IconEnvelopeOLarge
            width={$theme.sizing.scale800}
            height={$theme.sizing.scale800}
          />
          customerservice@gmail.com
        </div>
      </Link>
    </div>
  );
}

function FooterSocialMediaSection() {
  const [css, $theme] = useStyletron();

  return (
    <div
      class={css({
        display: 'flex',
        flexDirection: 'column',
        paddingRight: $theme.sizing.scale500,
      })}
    >
      <div
        class={css({
          paddingBottom: $theme.sizing.scale700,
        })}
      >
        <div
          class={css({
            paddingBottom: $theme.sizing.scale700,
            fontSize: $theme.typography.HeadingMedium.fontSize,
            fontWeight: $theme.typography.HeadingMedium.fontWeight,
          })}
        >
          Subscribe to our mailing list
        </div>
        <div
          class={css({
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            paddingBottom: $theme.sizing.scale700,
          })}
        >
          <div class={css({ flex: 8 })}>
            <Input
              placeholder="Enter email address"
              id="email"
              $overrides={{
                Root: {
                  style: {
                    height: '48px',
                  },
                },
                Input: {
                  style: {
                    backgroundColor: 'white',
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                    ':hover': {
                      borderRightWidth: 0,
                    },
                  },
                },
              }}
            />
          </div>

          <div
            class={css({
              flex: 2,
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
            })}
          >
            <Button
              $startEnhancer={() => <IconSendLarge fill="white" />}
              $override={{
                Root: {
                  style: {
                    flex: 2,
                    marginTop: '4px',
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                    height: '54px',
                    justifyContent: 'center',    
                    width: '100%',
                  },
                },
              }}
            />
          </div>
        </div>
      </div>

      <div
        class={css({
          paddingBottom: $theme.sizing.scale700,
        })}
      >
        <div
          class={css({
            paddingBottom: $theme.sizing.scale500,
            fontSize: $theme.typography.font550.fontSize,
          })}
        >
          Follow us
        </div>
        <div
          class={css({
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            [$theme.mediaQuery?.md || '']: {
              justifyContent: 'flex-start',
            },
            flexWrap: 'wrap',
          })}
        >
          <Button
            $kind={Kind.Tertiary}
            $startEnhancer={() => <Facebook />}
            onClick={() => {
              window.open(
                'https://www.facebook.com/NRTCFRESH',
                '_blank',
                'noopener,noreferrer',
              );
            }}
            $override={{
              Root: {
                style: {
                  height: '50px',
                  width: '50px',
                  background: 'white',
                  ':hover': {
                    border: '1px solid #E5E5EA',
                    background: 'white',
                  },
                  borderTopLeftRadius: '50px',
                  borderTopRightRadius: '50px',
                  borderBottomRightRadius: '50px',
                  borderBottomLeftRadius: '50px',
                  marginBottom: $theme.sizing.scale500,
                  marginRight: $theme.sizing.scale500,
                },
              },
            }}
          />
          <Button
            $kind={Kind.Tertiary}
            $startEnhancer={() => <Instagram />}
            onClick={() => {
              window.open(
                'https://www.instagram.com/nrtcfresh',
                '_blank',
                'noopener,noreferrer',
              );
            }}
            $override={{
              Root: {
                style: {
                  height: '50px',
                  width: '50px',
                  background: 'white',
                  ':hover': {
                    border: '1px solid #E5E5EA',
                    background: 'white',
                  },
                  borderTopLeftRadius: '50px',
                  borderTopRightRadius: '50px',
                  borderBottomRightRadius: '50px',
                  borderBottomLeftRadius: '50px',
                  marginBottom: $theme.sizing.scale500,
                  marginRight: $theme.sizing.scale500,
                },
              },
            }}
          />
          <Button
            $kind={Kind.Tertiary}
            $startEnhancer={() => <Twitter />}
            onClick={() => {
              window.open(
                'https://twitter.com/NRTCGroup',
                '_blank',
                'noopener,noreferrer',
              );
            }}
            $override={{
              Root: {
                style: {
                  height: '50px',
                  width: '50px',
                  background: 'white',
                  ':hover': {
                    border: '1px solid #E5E5EA',
                    background: 'white',
                  },
                  borderTopLeftRadius: '50px',
                  borderTopRightRadius: '50px',
                  borderBottomRightRadius: '50px',
                  borderBottomLeftRadius: '50px',
                  marginBottom: $theme.sizing.scale500,
                  marginRight: $theme.sizing.scale500,
                },
              },
            }}
          />
          <Button
            $kind={Kind.Tertiary}
            $startEnhancer={() => <Tiktok />}
            $override={{
              Root: {
                style: {
                  height: '50px',
                  width: '50px',
                  background: 'white',
                  ':hover': {
                    border: '1px solid #E5E5EA',
                    background: 'white',
                  },
                  borderTopLeftRadius: '50px',
                  borderTopRightRadius: '50px',
                  borderBottomRightRadius: '50px',
                  borderBottomLeftRadius: '50px',
                  marginBottom: $theme.sizing.scale500,
                  marginRight: $theme.sizing.scale500,
                },
              },
            }}
          />
        </div>
      </div>

      <div
        class={css({
          paddingBottom: $theme.sizing.scale700,
        })}
      >
        <div
          class={css({
            paddingBottom: $theme.sizing.scale500,
            fontSize: $theme.typography.font550.fontSize,
          })}
        >
          Download our app
        </div>
        <div
          class={css({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            [$theme.mediaQuery?.md || '']: {
              alignItems: 'flex-start',
            },
            rowGap: $theme.sizing.scale200,
          })}
        >
          <Link
            href="https://apps.apple.com/us/app/nrtc-fresh/id1441972042?ls=1"
            target="_blank"
          >
            <img
              src="https://www.nrtcfresh.com/wp-content/uploads/2020/02/Apple-badeg.svg"
              class={css({ maxHeight: '70px' })}
            />
          </Link>
          <Link
            href="https://play.google.com/store/apps/details?id=app.nrtc.com.nrtc"
            target="_blank"
          >
            <img
              src="https://www.nrtcfresh.com/wp-content/uploads/2020/02/Google-badeg.svg"
              class={css({ maxHeight: '70px' })}
            />
          </Link>
        </div>
      </div>
      <div
        class={css({
          paddingRight: $theme.sizing.scale500,
          paddingTop: $theme.sizing.scale500,
          paddingBottom: $theme.sizing.scale500,
        })}
      >
        Copyright &copy; {new Date().getFullYear()} NRTC Fresh. All rights
        reserved.
      </div>
    </div>
  );
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
              fontSize: $theme.typography.LabelMedium.fontSize,
              fontWeight: $theme.typography.LabelLarge.fontWeight,
              display: 'flex',
              justifyContent: 'center',
              [$theme.mediaQuery?.md || '']: {
                justifyContent: 'flex-start',
              },
            },
          ])}
        >
          {props.item.title}
        </h6>
      </Link>
    </li>
  );
};
