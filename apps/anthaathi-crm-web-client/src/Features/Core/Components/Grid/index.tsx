import { styled } from 'baseui';

export const StandardGrid = styled('div', ({ $theme }) => ({
  display: 'grid',
  gridColumnGap: '12px',
  gridRowGap: 0,
  marginRight: '12px',
  gridTemplateColumns: 'repeat(4, 1fr)',
  [$theme.mediaQuery.small]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
  [$theme.mediaQuery.medium]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [$theme.mediaQuery.large]: {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
}));
