import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import {
    FC,
    useCallback,
    useState,
    useEffect,
} from 'react';

interface TextProps {
    texts: string[]
}

const TextWrittingAnimation: FC<TextProps> = ({ texts = ['Developer', 'Designer'] }) => {
    const { t } = useTranslation('content');
    const [text, setText] = useState('Eduardo Leal');

    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * texts.length);
        setText(texts[index]);
    }, [texts]);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 7000);
        return () => clearInterval(intervalID);
    }, [shuffle]);

    return (
        <Box display="flex">
            <Typography
                fontWeight="500"
                variant="h5"
                mb={2}
            >
                {t('about.title')}
                &nbsp;
            </Typography>
            <Typography
                fontWeight="500"
                variant="h5"
                mb={2}
            >
                {text}
            </Typography>
        </Box>
    );
};

export default TextWrittingAnimation;