import React, {useState, useEffect} from 'react';

import {Small, Original} from './styles';

export default function LazyImage({
  smallSource,
  source,
  aspectRatio,
  shouldLoad,
}) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (shouldLoad) {
      /**
        setTimeout(() => {
          setLoaded(true);
        }, 1000);
        */
      setLoaded(true);
    }
  }, [shouldLoad]);

  return (
    <Small
      source={smallSource}
      ratio={aspectRatio}
      resizeMode="contain"
      blurRadius={1}>
      {loaded && (
        <Original source={source} ratio={aspectRatio} resizeMode="contain" />
      )}
    </Small>
  );
}
