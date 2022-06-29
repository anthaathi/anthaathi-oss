import {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';

export function useDimension() {
  const [[width, height], setHeight] = useState([
    Dimensions.get('screen').width,
    Dimensions.get('screen').height,
  ]);

  useEffect(() => {
    const listener = Dimensions.addEventListener('change', () => {
      setHeight([
        Dimensions.get('screen').width,
        Dimensions.get('screen').height,
      ]);
    });

    return () => {
      listener.remove();
    };
  }, []);

  return [width, height];
}
