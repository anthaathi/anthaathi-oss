import { styled, Theme } from 'baseui';

export const AppContent = styled(
  'div',
  ({ $theme, $small }: { $theme?: Theme; $small: boolean }) => ({
    paddingLeft: $theme!.sizing.scale800,
    paddingRight: $theme!.sizing.scale800,
    maxWidth: $small ? '800px' : 'none',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '0',
    marginBottom: '0',
  }),
);

export default AppContent;
