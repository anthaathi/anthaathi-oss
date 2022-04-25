import { styled } from 'baseui';

export const SkipToContent = styled('div', ({ $theme }) => ({
  background: $theme.colors.accent,
  height: '30px',
  left: '50%',
  padding: '8px',
  position: 'absolute',
  transform: 'translateX(-200%)',
  transition: 'transform 0.3s',
  ':focus': {
    transform: 'translateX(0%)',
  },
  ':active': {
    transform: 'translateX(0%)',
  },
}));

export default SkipToContent;
