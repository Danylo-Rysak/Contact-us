// Libs
import { useEffect, useState } from 'react';
// Constants
import { MIN_DESKTOP_WIDTH } from 'utils/constants';

const useDesktop = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowWidth > MIN_DESKTOP_WIDTH;
};

export default useDesktop;
