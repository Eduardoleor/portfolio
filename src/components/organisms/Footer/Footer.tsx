import { FC } from "react";
import { useTranslation } from "react-i18next";

import {
    Box,
    Button,
    Divider,
    Grid,
    IconButton,
    Typography,
    Tooltip,
} from '@mui/material';

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import {
    email,
    mailtoEmail,
    github,
    onOpenUrl,
    twitter,
    linkedin,
    instagram,
} from "utils/links";
import TextHyperlink from "components/atoms/TextHyperlink";

type mediaType = 'github' | 'email' | 'twitter' | 'linkedin' | 'instagram';
const Footer: FC = () => {
    const { t } = useTranslation('footer');


    const onPressMedia = (media: mediaType) => {
        switch (media) {
            case 'email':
                onOpenUrl(mailtoEmail);
                break;
            case 'github':
                onOpenUrl(github);
                break;
            case 'twitter':
                onOpenUrl(twitter);
                break;
            case 'instagram':
                onOpenUrl(instagram);
                break;
            case 'linkedin':
                onOpenUrl(linkedin);
                break;
            default:
                onOpenUrl(mailtoEmail);
        }
    };

    return (
        <Box sx={{ flexGrow: 1, mb: 3, mt: 5 }}>
            <Grid container spacing={2}>
                <Grid item xs={6} md={3}>
                    <Typography fontWeight="bold" gutterBottom>{t('apps.title')}</Typography>
                    <TextHyperlink link="/development">{t('apps.mobile')}</TextHyperlink>
                    <TextHyperlink link="/development">{t('apps.web')}</TextHyperlink>
                    <TextHyperlink link="/development">{t('apps.desktop')}</TextHyperlink>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Typography fontWeight="bold" gutterBottom>{t('collaborations.title')}</Typography>
                    <TextHyperlink link="/development">{t('collaborations.web')}</TextHyperlink>
                    <TextHyperlink link="/development">{t('collaborations.mobile')}</TextHyperlink>
                    <TextHyperlink link="/development">{t('collaborations.support')}</TextHyperlink>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Typography fontWeight="bold" gutterBottom>{t('about.title')}</Typography>
                    <TextHyperlink link="/about">{t('about.lastwork')}</TextHyperlink>
                    <TextHyperlink link="/about">{t('about.lastproject')}</TextHyperlink>
                    <TextHyperlink link="/about">{t('about.projects')}</TextHyperlink>
                    <TextHyperlink link="/about">{t('about.location')}</TextHyperlink>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Typography fontWeight="bold" gutterBottom>{t('developers.title')}</Typography>
                    <TextHyperlink link="/">{t('developers.referrals')}</TextHyperlink>
                    <TextHyperlink link="/">{t('developers.forum')}</TextHyperlink>
                </Grid>
            </Grid>
            <Divider sx={{ mt: 1, mb: 1 }} />
            <Grid container>
                <Grid item xs={12} md={4} mt={1}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography>
                            {new Date().getFullYear()}
                            &nbsp;
                            {t('copyright.copy')}
                            ,&nbsp;
                            {t('copyright.from')}
                        </Typography>
                        <IconButton aria-label="public">
                            <Tooltip title="Mexico">
                                <Box
                                    width="20px"
                                    component="img"
                                    src="/mexico-flag.jpeg"
                                    alt="Mexico Pointer"
                                />
                            </Tooltip>
                        </IconButton>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4} mt={1}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Button
                            color="inherit"
                            startIcon={<EmailIcon />}
                            onClick={() => onPressMedia('email')}
                        >
                            {email}
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Tooltip aria-label="linkedin-name" title={linkedin} onClick={() => onPressMedia('linkedin')}>
                            <IconButton aria-label="linkedin" size="large">
                                <LinkedInIcon fontSize="inherit" />
                            </IconButton>
                        </Tooltip>
                        <Tooltip aria-label="github-name" title={github} onClick={() => onPressMedia('github')}>
                            <IconButton aria-label="github" size="large">
                                <GitHubIcon fontSize="inherit" />
                            </IconButton>
                        </Tooltip>
                        <Tooltip aria-label="instagram-name" title={instagram} onClick={() => onPressMedia('instagram')}>
                            <IconButton aria-label="instagram" size="large">
                                <InstagramIcon fontSize="inherit" />
                            </IconButton>
                        </Tooltip>
                        <Tooltip aria-label="twitter-name" title={twitter} onClick={() => onPressMedia('twitter')}>
                            <IconButton aria-label="twitter" size="large">
                                <TwitterIcon fontSize="inherit" />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footer;