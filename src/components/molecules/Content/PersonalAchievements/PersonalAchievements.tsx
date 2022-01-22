import { Box, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FC } from 'react';

import Achievements from 'components/atoms/Achievements';

const PersonalAchievements: FC = () => {
    const { t } = useTranslation('technologies');

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" gutterBottom>{t('personal.title')}</Typography>
            <Grid container spacing={2}>
                <Grid item xs>
                    <Achievements count={20} title={t('personal.projects')} />
                </Grid>
                <Grid item xs>
                    <Achievements count={12} title={t('personal.web')} />
                </Grid>
                <Grid item xs>
                    <Achievements count={10} title={t('personal.mobile')} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default PersonalAchievements;