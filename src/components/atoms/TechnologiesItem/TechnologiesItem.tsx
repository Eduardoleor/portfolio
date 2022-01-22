import {
    Box, IconButton, Tooltip, Typography, useMediaQuery,
} from '@mui/material';
import { FC } from 'react';

interface Item {
    title: string;
    icon: any;
    color?: string;
}

const TechnologiesItem: FC<Item> = ({ title, icon, color }) => {
    const isDesktop = useMediaQuery('(min-width:600px)');

    return (
        <Tooltip title={title}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: isDesktop ? 170 : '100%',
                height: isDesktop ? 120 : 100,
                borderRadius: 5,
                backgroundColor: color ?? 'rgba(38, 50, 56, 0.3)',
            }}
            >
                <IconButton color="inherit">
                    <Box component={icon} />
                </IconButton>
                <Typography variant={isDesktop ? undefined : 'caption'}>{title}</Typography>
            </Box>
        </Tooltip>
    );
};

export default TechnologiesItem;