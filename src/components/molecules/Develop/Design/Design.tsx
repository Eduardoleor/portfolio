import {
    Box,
    Grid,
    Typography,
    useMediaQuery,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import React, { FC } from 'react';

import TechnologieItem from 'components/atoms/TechnologiesItem';
import { randomRGBA } from 'utils/colors';
import { designListIcon } from 'utils/technologies';

const Design: FC = () => {
    const { t } = useTranslation('develop');
    const isDesktop = useMediaQuery('(min-width:600px)');

    return (
        <Box id="frontend">
            <Box sx={{ height: isDesktop ? 130 : '100%' }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {t('design.title')}
                </Typography>
                <Typography>
                    {t('design.desc')}
                </Typography>
            </Box>
            <Grid container spacing={2} mt={3} mb={3}>
                {
                    designListIcon.map((item) => {
                        const { name, icon } = item;
                        return (
                            <Grid item xs={isDesktop ? undefined : 4} key={Math.random()}>
                                <TechnologieItem title={name} icon={icon} color={randomRGBA()} />
                            </Grid>
                        );
                    })
                }
            </Grid>
        </Box>
    );
};
export default Design;