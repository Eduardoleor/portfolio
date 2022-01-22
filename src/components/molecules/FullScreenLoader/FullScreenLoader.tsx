import { Box, CircularProgress, Typography } from '@mui/material';
import { useTranslation } from "react-i18next";
import { FC } from 'react';

const FullScreenLoader: FC = () => {
    const { t } = useTranslation('common');

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            width: '100%',
            height: '100vh',
            alignItems: 'center',
            justifyContent: 'center',
        }}
        >
            <CircularProgress color="inherit" variant="indeterminate" />
            <Typography mt={2}>{t('loading')}</Typography>
        </Box>
    );
};

export default FullScreenLoader;