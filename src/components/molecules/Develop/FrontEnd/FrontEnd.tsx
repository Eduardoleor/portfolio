import {
    Box,
    Grid,
    Typography,
    useMediaQuery,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FC } from 'react';

import TechnologieItem from 'components/atoms/TechnologiesItem';
import { frontendListIcon } from 'utils/technologies';

const FrontEnd: FC = () => {
    const { t } = useTranslation('develop');
    const isDesktop = useMediaQuery('(min-width:600px)');

    return (
        <Box id="frontend">
            <Box sx={{ height: isDesktop ? 130 : '100%' }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {t('front.title')}
                </Typography>
                <Typography>
                    {t('front.desc')}
                </Typography>
            </Box>
            <Grid container spacing={2} mt={3} mb={3}>
                {
                    frontendListIcon.map((item) => {
                        const { name, icon } = item;
                        return (
                            <Grid item xs={isDesktop ? undefined : 4} key={Math.random()}>
                                <TechnologieItem title={name} icon={icon} color="rgba(251, 233, 231, 0.7)" />
                            </Grid>
                        );
                    })
                }
            </Grid>
        </Box>
    );
};
export default FrontEnd;