import {useStyletron} from "@anthaathi/solid-styletron";
import {Link} from "@solidjs/router";
import {AccountInfoCard} from "~/Features/Commerce/Components/AccountInfoCard";

export function AccountDashBoard() {
  const [css, $theme] = useStyletron();

  return (
    <div
      class={css({
        paddingBottom: $theme.sizing.scale500,
      })}
    >
      <div
        class={css({
          display: 'flex',
          flexDirection: 'column',
          [$theme.mediaQuery.sm || '']: {
            flexDirection: 'row',
          },
          borderBottom: '1px solid #d9d9d9',
          paddingLeft: $theme.sizing.scale500,
          paddingBottom: $theme.sizing.scale500,
          marginBottom: $theme.sizing.scale500,
        })}
      >
        <div
          class={css({
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
          })}
        >
          <div
            class={css({
              fontSize: $theme.sizing.scale700,
              fontWeight: 700,
            })}
          >
            Anmol K
          </div>
          <div
            class={css({
              fontSize: $theme.sizing.scale500,
              fontWeight: 400,
            })}
          >
            anmol@anthaathi.org
          </div>
        </div>
        <div
          class={css({
            paddingTop: $theme.sizing.scale500,
            paddingBottom: $theme.sizing.scale100,
            [$theme.mediaQuery.lg || '']: {
              alignSelf: 'center',
            },
            fontSize: $theme.sizing.scale500,
          })}
        >
          <Link href={'/'}>Edit account details</Link>
        </div>
      </div>
      <div
        class={css({
          display: 'flex',
          flexDirection: 'column',
          [$theme.mediaQuery.md || '']: {
            flexDirection: 'row',
          },
          paddingBottom: $theme.sizing.scale500,
          gap: $theme.sizing.scale500,
        })}
      >
        <AccountInfoCard
          title="Total Orders"
          content="5"
          urlTitle="All Orders"
          url="/"
        />
        <AccountInfoCard
          title="Total Spent"
          content="AED 618.19"
          urlTitle="Continue Shopping"
          url="/"
        />
        <AccountInfoCard
          title="Wallet Amount"
          content="AED 2.00"
          urlTitle="Add Top up"
          url="/"
        />
      </div>
      <div
        class={css({
          display: 'flex',
          flexDirection: 'column',
          paddingBottom: $theme.sizing.scale500,
        })}
      >
        <AccountInfoCard
          title="Shipping Address"
          content="Some Address, with info, \nWith some other info\nMaharashtra, India"
          urlTitle="View All"
          url="/"
        />
      </div>
      <div
        class={css({
          display: 'flex',
          flexDirection: 'column',
          paddingBottom: $theme.sizing.scale500,
        })}
      >
        <AccountInfoCard
          title="Account Since"
          content="July 8, 2020"
          urlTitle=""
          url=""
        />
      </div>
    </div>
  );
}
