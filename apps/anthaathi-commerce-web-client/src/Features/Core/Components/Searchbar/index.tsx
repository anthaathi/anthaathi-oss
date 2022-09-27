import { useStyletron } from '@anthaathi/solid-styletron';
import Search from '../../../../icons/search.svg';
import { useCssToken } from '~/Features/Core/Hooks/useCssToken';
import { Input } from '~/Features/Core/Components/Input';
import { Button, Kind } from '~/Features/Core/Components/Button';

export function Searchbar() {
  const [css, $theme] = useStyletron();

  let searchInputRef: HTMLInputElement | null = null;

  const cssVar = useCssToken();

  function onSearchTap() {
    searchInputRef?.focus();
  }

  return (
    <form
      class={css({
        display: 'flex',
        alignItems: 'center',
        backgroundColor: cssVar('search-background-color', '#EFEFEF'),
        borderRadius: cssVar(
          'search-border-radius',
          cssVar('input-border-radius', '4px'),
        ),
        width: '100%',
      })}
    >
      <Input
        type="search"
        placeholder="Search..."
        ref={(ref) => (searchInputRef = ref)}
        $overrides={{
          Root: {
            style: {
              flexGrow: 1,
            },
          },
          Input: {
            style: {},
          },
        }}
      />

      <Button
        $kind={Kind.Tertiary}
        type="button"
        onClick={onSearchTap}
        $startEnhancer={() => <Search />}
      />
    </form>
  );
}
