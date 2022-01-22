import { Box, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FC } from 'react';

import AboutInfo from 'components/atoms/AboutInfo';

const AboutMe: FC = () => {
    const { t } = useTranslation('technologies');

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" gutterBottom>
                {t('creative.title')}
            </Typography>
            <Grid container rowSpacing={2}>
                <Grid item xs={12}>
                    <AboutInfo
                        title={t('creative.first.title')}
                        body={t('creative.first.desc')}
                        color="#eceff1"
                    />
                </Grid>
                <Grid item xs={12}>
                    <AboutInfo
                        title={t('creative.second.title')}
                        body={t('creative.second.desc')}
                        color="#efebe9"
                    />
                </Grid>
                <Grid item xs={12}>
                    <AboutInfo
                        title={t('creative.third.title')}
                        body={t('creative.third.desc')}
                        color="#e0f2f1"
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default AboutMe;