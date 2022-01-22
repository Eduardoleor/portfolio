import { FC } from "react";
import {
    Box,
    IconButton,
    useMediaQuery,
} from '@mui/material';
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";

interface HeaderProps {
    backEnabled?: boolean
}

const Header: FC<HeaderProps> = ({ backEnabled }) => {
    const isDesktop = useMediaQuery('(min-width:600px)');
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                mb: 2,
                display: 'flex',
                width: '100%',
                height: '20vh',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            {backEnabled && (
                <IconButton aria-label="icon-back" onClick={() => navigate('/')}>
                    <ArrowBackIcon />
                </IconButton>
            )}
            <Box
                display="flex"
                width="100%"
                height="100%"
                justifyContent="center"
                alignContent="center"
                alignItems="center">
                <Link to="/">
                    <Box
                        component="img"
                        src="/logo-black.png"
                        alt="Logo Eduardo Leal"
                        sx={{ width: isDesktop ? '80px' : '65px', padding: 1.2 }}
                    />
                </Link>
            </Box>
        </Box>
    )
}

export default Header