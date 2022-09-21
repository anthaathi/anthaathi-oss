import { useStyletron } from '@anthaathi/solid-styletron';
import Search from '../../../../icons/search.svg';

export function Searchbar() {
  const [css, $theme] = useStyletron();

  let searchInputRef: HTMLInputElement | null = null;

  function onSearchTap() {
    searchInputRef?.focus();
  }

  return (
    <form
      class={css({
        display: 'flex',
        alignItems: 'center',
        backgroundColor: $theme.tokens.Search.backgroundColor,
        height: '34px',
      })}
    >
      <input
        type="search"
        placeholder="Search..."
        ref={(ref) => (searchInputRef = ref)}
        class={css({
          border: 'none',
          padding: $theme.sizing.scale400,
          outline: 'none',
          color: $theme.tokens.Search.color,
          backgroundColor: 'transparent',
          ...$theme.typography.LabelMedium,
        })}
        onFocus={() => {
          console.log('focus in');
        }}
      />

      <button
        class={css({
          display: 'flex',
          alignItems: 'center',
          placeContent: 'center',
          backgroundColor: 'transparent',
          border: 'none',
          width: '36px',
          height: '100%',
          cursor: 'pointer',
        })}
        type="button"
        onClick={onSearchTap}
      >
        <Search />
      </button>
    </form>
  );
}
