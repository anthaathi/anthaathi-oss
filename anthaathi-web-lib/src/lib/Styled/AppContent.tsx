import { styled, Theme } from 'baseui';

export const AppContent = styled(
  'div',
  ({ $theme, $small }: { $theme?: Theme; $small: boolean }) => ({
    paddingLeft: $theme!.sizing.scale800,
    paddingRight: $theme!.sizing.scale800,
    maxWidth: $small ? '800px' : 'none',
    margin: '0 auto',
  }),
);

export default AppContent;
