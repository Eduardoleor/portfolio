import {
    Box,
    Grid,
    Typography,
    useMediaQuery,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FC } from 'react';

import TechnologieItem from 'components/atoms/TechnologiesItem';
import { randomRGBA } from 'utils/colors';
import { toolsListIcon } from 'utils/technologies';

const Tools: FC = () => {
    const { t } = useTranslation('develop');
    const isDesktop = useMediaQuery('(min-width:600px)');

    return (
        <Box id="frontend">
            <Box sx={{ height: isDesktop ? 130 : '100%' }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {t('tools.title')}
                </Typography>
                <Typography>
                    {t('tools.desc')}
                </Typography>
            </Box>
            <Grid container spacing={2} mt={3} mb={3}>
                {
                    toolsListIcon.map((item) => {
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
export default Tools;