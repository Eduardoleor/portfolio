import { FC } from 'react';
import { Typography } from '@mui/material';
import { Link } from "react-router-dom";

interface TextProps {
    link: string
}

const TextHyperlink: FC<TextProps> = ({ children, link = '/' }) => (
    <Typography
        gutterBottom
        variant="subtitle1"
        sx={{
            outline: 'none !important',
            cursor: 'pointer',
            transition: 'transform 0.15s ease-in-out',
            '&:hover': {
                fontWeight: 500,
                transform: 'scale3d(1.01, 1.01, 1)',
            },
        }}>
        <Link
            to={link}
            style={{
                color: 'black',
                textDecoration: 'none',
            }}>
            {children}
        </Link>
    </Typography>
);

export default TextHyperlink;