import { styled, Theme } from 'baseui';

export const AppWrapper = styled(
  'div',
  ({ $theme, $isDense = false }: { $theme?: Theme; $isDense?: boolean }) => ({
    width: `calc(100% - ${$theme!.sizing.scale400} - ${
      $theme!.sizing.scale400
    })`,
    paddingLeft: $theme!.sizing.scale400,
    paddingRight: $theme!.sizing.scale400,
    paddingTop: $theme!.sizing.scale400,
    paddingBottom: $theme!.sizing.scale400,
    maxWidth: $isDense
      ? $theme!.sizing.maxAppWidthDense
      : $theme!.sizing.maxAppWidth,
    margin: '0 auto',
  })
);
