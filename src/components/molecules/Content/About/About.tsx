

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import {
    Box, IconButton, Tooltip, Typography,
} from '@mui/material';
import { useTranslation } from "react-i18next";
import { FC } from 'react';

import TextWrittingAnimation from 'components/atoms/TextWrittingAnimation';
import { currentDayName } from 'utils/dates';
import {
    email,
    mailtoEmail,
    github,
    onOpenUrl,
    twitter,
} from 'utils/links';
import { texts } from 'utils/texts';

type mediaType = 'github' | 'email' | 'twitter';

const AboutMe: FC = () => {
    const { t, i18n } = useTranslation('content');

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
            default:
                onOpenUrl(mailtoEmail);
        }
    };

    return (
        <Box>
            <TextWrittingAnimation texts={texts} />
            <Box mb={4}>
                <Typography gutterBottom variant="subtitle1">
                    {t('about.desc')}
                    <Typography
                        component="span"
                        variant="subtitle1"
                        color="inherit"
                        fontWeight="500"
                        onClick={() => onOpenUrl('https://neuralink.com/')}
                        sx={{
                            borderBottom: '2px dotted #000000',
                            '&:hover': {
                                cursor: 'pointer',
                            },
                        }}
                    >
                        {t('about.learn')}
                    </Typography>
                </Typography>
                <Typography mt={3} gutterBottom variant="subtitle1">{t('about.info')}</Typography>
            </Box>
            <Box mb={4}>
                <Tooltip title={github} aria-label="github-name">
                    <IconButton aria-label="github" color="default" onClick={() => onPressMedia('github')}>
                        <GitHubIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title={email} aria-label="email-name">
                    <IconButton aria-label="email" color="inherit" onClick={() => onPressMedia('email')}>
                        <EmailIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title={twitter} aria-label="twitter-name">
                    <IconButton aria-label="twitter" color="default" onClick={() => onPressMedia('twitter')}>
                        <TwitterIcon />
                    </IconButton>
                </Tooltip>
            </Box>
            <Box display="flex" flexDirection="column">
                <Typography variant="caption" color="gray">{t('about.ads')}</Typography>
                <Typography variant="caption" color="gray">
                    {t('about.happy')}
                    &nbsp;
                    {currentDayName(i18n.language)}
                    !
                </Typography>
                <Typography variant="caption" color="gray">
                    ©&nbsp;
                    {new Date().getFullYear()}
                </Typography>
            </Box>
        </Box>
    );
};
export default AboutMe;