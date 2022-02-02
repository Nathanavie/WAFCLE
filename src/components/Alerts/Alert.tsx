import React, { ReactElement } from 'react';
import Alert from '@mui/material/Alert';

interface AlertProps {
  isOpen: boolean;
  message: string;
  variant?: 'error' | 'success' | 'warning';
}

const CommonAlert = ({
  isOpen,
  message,
  variant,
}: AlertProps): ReactElement | null => {
  if (!isOpen) return null;
  return (
    <Alert className="alert" severity={variant} icon={false}>
      {message}
    </Alert>
  );
};

export default CommonAlert;

CommonAlert.defaultProps = {
  variant: 'warning',
};
