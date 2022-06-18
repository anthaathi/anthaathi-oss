import {createContext, useContext} from 'react';

export const ResponsiveContext = createContext<{
  small: [number];
  medium: [number, number];
  large: [number, number];
  extraLarge: [number];
}>({
  small: [599],
  medium: [600, 1239],
  large: [1240, 1439],
  extraLarge: [1439],
});

export const useResponsiveMediaQueries = () => useContext(ResponsiveContext);
