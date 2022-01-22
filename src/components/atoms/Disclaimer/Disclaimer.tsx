import { Typography } from '@mui/material';
import { useTranslation } from "react-i18next";
import { FC } from 'react';

const Disclaimer: FC = () => {
    const { t } = useTranslation('develop');

    return (
        <Typography variant="caption">
            <Typography variant="caption" fontWeight="bold" component="span">
                {t('disc.title')}
            </Typography>
            <br />
            {t('disc.desc')}
        </Typography>
    );
};

export default Disclaimer;