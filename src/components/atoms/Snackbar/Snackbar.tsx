import { Snackbar } from '@mui/material';
import { FC } from 'react';

interface SnackProps {
    open: boolean;
    message: string;
    duration?: number;
    onClose?: () => void;
}

const Snack: FC<SnackProps> = ({
    open = false,
    duration,
    message,
    onClose,
}) => (
    <Snackbar
        open={open}
        key="message"
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }}
        autoHideDuration={duration}
        message={message}
        onClose={onClose}
    />
);

export default Snack;