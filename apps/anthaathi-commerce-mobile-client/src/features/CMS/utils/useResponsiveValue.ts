import {Dimensions, ScaledSize} from 'react-native';
import {useEffect, useMemo, useState} from 'react';
import {useResponsiveMediaQueries} from '../context/ResponsiveContext';

export type ResponsiveInput<T = number | string> = T | [T, T, T, T];

export function useResponsiveValue<T = number | string>(
  input: ResponsiveInput<T>,
): T {
  const [width, setWidth] = useState(Dimensions.get('window').width);
  const [, setHeight] = useState(Dimensions.get('window').height);

  useEffect(() => {
    function handler({window}: {window: ScaledSize; screen: ScaledSize}) {
      setWidth(window.width);
      setHeight(window.height);
    }

    const listener = Dimensions.addEventListener('change', handler);

    return () => {
      listener.remove();
    };
  }, []);

  const responsiveValue = useResponsiveMediaQueries();

  const indexToReturn = useMemo(() => {
    if (width <= responsiveValue.small[0]) {
      return 0;
    } else if (
      width >= responsiveValue.medium[0] &&
      width <= responsiveValue.medium[1]
    ) {
      return 1;
    } else if (
      width >= responsiveValue.large[0] &&
      width <= responsiveValue.large[1]
    ) {
      return 2;
    }
    return 3;
  }, [
    responsiveValue.large,
    responsiveValue.medium,
    responsiveValue.small,
    width,
  ]);

  if (!Array.isArray(input)) {
    return input as T;
  }

  return input[indexToReturn];
}
