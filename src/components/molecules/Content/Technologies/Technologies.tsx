import {
    Box,
    Grid,
    IconButton,
    Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { FC } from 'react';
import { AiOutlineMobile } from 'react-icons/ai';
import { FaReact } from 'react-icons/fa';
import { FiDatabase } from 'react-icons/fi';
import { MdOutlineDesignServices } from 'react-icons/md';

const Technologies: FC = () => {
    const { t } = useTranslation('technologies');

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" gutterBottom>{t('title')}</Typography>
            <Typography gutterBottom>{t('desc')}</Typography>
            <Grid container columnSpacing={3} marginTop={3}>
                <Grid item xs={6}>
                    <Link to="development">
                        <IconButton aria-label="front-end">
                            <FaReact />
                        </IconButton>
                    </Link>
                    <Typography variant="subtitle1">{t('tools.front.title')}</Typography>
                    <Typography variant="subtitle2" gutterBottom>
                        {t('tools.front.desc')}
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Link to="development">
                        <IconButton aria-label="back-end">
                            <FiDatabase />
                        </IconButton>
                    </Link>
                    <Typography variant="subtitle1">{t('tools.back.title')}</Typography>
                    <Typography variant="subtitle2" gutterBottom>
                        {t('tools.back.desc')}
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Link to="development">
                        <IconButton aria-label="mobile">
                            <AiOutlineMobile />
                        </IconButton>
                    </Link>
                    <Typography variant="subtitle1">{t('tools.mobile.title')}</Typography>
                    <Typography variant="subtitle2" gutterBottom>
                        {t('tools.mobile.desc')}
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Link to="development">
                        <IconButton aria-label="design">
                            <MdOutlineDesignServices />
                        </IconButton>
                    </Link>
                    <Typography variant="subtitle1">{t('tools.design.title')}</Typography>
                    <Typography variant="subtitle2" gutterBottom>
                        {t('tools.design.desc')}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};
export default Technologies;