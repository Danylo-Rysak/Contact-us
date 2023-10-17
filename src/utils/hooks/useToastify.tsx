// Libs
import { ReactNode, useEffect, useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const useToastify = (
  isOpen: boolean,
  message: string,
  onClose: () => void,
  color: 'error' | 'info' | 'success' | 'warning' = 'error',
  duration = 3000
): ReactNode => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    setIsShow(isOpen);
  }, [isOpen]);

  const handleToastClose = (): void => {
    setIsShow(false);
    onClose();
  };

  return (
    <Snackbar
      open={isShow}
      autoHideDuration={duration}
      onClose={handleToastClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <MuiAlert
        severity={color}
        onClose={handleToastClose}
        elevation={6}
        variant="filled"
      >
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

export default useToastify;
