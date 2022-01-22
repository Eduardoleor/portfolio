import { Box, Typography } from '@mui/material';
import { FC } from 'react';

interface AchievementsProps {
    count: string | number;
    title: string;
}

const Achievements: FC<AchievementsProps> = ({ count, title }) => (
    <Box
        sx={{
            width: '100%',
            height: '100px',
            borderRadius: 5,
            backgroundColor: '#e0e0e0',
            transition: 'transform 0.15s ease-in-out',
            '&:hover': {
                cursor: 'pointer',
                transform: 'scale3d(1.04, 1.04, 1)',
                boxShadow: '10px 10px 10px rgba(224, 224, 224, 0.5)',
            },
        }}
    >
        <Box padding={2}>
            <Typography variant="h6">
                {count}
                +
            </Typography>
            <Typography variant="body2">
                {title}
            </Typography>
        </Box>
    </Box>
);
export default Achievements;