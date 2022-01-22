import {
    Box,
    Grid,
    Typography,
    useMediaQuery,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FC } from 'react';

import TechnologieItem from 'components/atoms/TechnologiesItem';
import { backendListIcon } from 'utils/technologies';

const Backend: FC = () => {
    const { t } = useTranslation('develop');
    const isDesktop = useMediaQuery('(min-width:600px)');

    return (
        <Box id="frontend">
            <Box sx={{ height: isDesktop ? 130 : '100%' }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {t('back.title')}
                </Typography>
                <Typography>
                    {t('back.desc')}
                </Typography>
            </Box>
            <Grid container spacing={2} mt={3} mb={3}>
                {
                    backendListIcon.map((item) => {
                        const { name, icon } = item;
                        return (
                            <Grid item xs={isDesktop ? undefined : 4} key={Math.random()}>
                                <TechnologieItem title={name} icon={icon} color="rgba(207, 216, 220, 0.5)" />
                            </Grid>
                        );
                    })
                }
            </Grid>
        </Box>
    );
};
export default Backend;