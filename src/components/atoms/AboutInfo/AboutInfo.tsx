import { Box, Typography } from '@mui/material';
import { FC } from 'react';

interface AboutProps {
    title: string;
    body: string;
    color?: string;
}

const AboutInfo: FC<AboutProps> = ({ title, body, color }) => (
    <Box
        sx={{
            width: '100%',
            height: '100%',
            borderRadius: 5,
            backgroundColor: color ?? '#bdbdbd',
            transition: 'transform 0.15s ease-in-out',
            '&:hover': {
                cursor: 'pointer',
                transform: 'scale3d(1.04, 1.04, 1)',
                boxShadow: '10px 10px 10px rgba(224, 224, 224, 0.5)',
            },
        }}
    >
        <Box padding={2}>
            <Typography variant="h6" gutterBottom>
                {title}
            </Typography>
            <Typography>
                {body}
            </Typography>
        </Box>
    </Box>
);

export default AboutInfo;