import {useStyletron} from "@anthaathi/solid-styletron";
import {Link} from "@solidjs/router";
import {AddressBookItemProps} from "~/routes/pages/Account";

export function AddressCard(props: AddressBookItemProps) {
  const [css, $theme] = useStyletron();

  return (
    <div
      class={css({
        display: 'flex',
        flexDirection: 'column',
      })}
    >
      <div
        class={css({
          flex: 1,
          display: 'flex',
          flexDirection: 'row',
          paddingBottom: $theme.sizing.scale700,
        })}
      >
        <div
          class={css({
            flex: 1,
            fontSize: $theme.typography.font650.fontSize,
          })}
        >
          {props.title}
        </div>
        <Link
          href={'/'}
          class={css({
            fontSize: $theme.typography.font150.fontSize,
            alignSelf: 'center',
          })}
        >
          Edit
        </Link>
      </div>
      <div class={css({ paddingBottom: $theme.sizing.scale100 })}>
        {props.name}
      </div>
      <div class={css({ paddingBottom: $theme.sizing.scale100 })}>
        {props.addressLine1}
      </div>
      <div class={css({ paddingBottom: $theme.sizing.scale100 })}>
        {props.addressLine2}
      </div>
      <div class={css({ paddingBottom: $theme.sizing.scale100 })}>
        {props.state}
      </div>
      <div class={css({ paddingBottom: $theme.sizing.scale100 })}>
        {props.country}
      </div>
      <div class={css({ paddingBottom: $theme.sizing.scale700 })}>
        {props.contactInfo}
      </div>
      <div
        class={css({
          paddingBottom: $theme.sizing.scale500,
          marginBottom: $theme.sizing.scale700,
          borderBottom: '1px solid #d9d9d9',
        })}
      ></div>
    </div>
  );
}
