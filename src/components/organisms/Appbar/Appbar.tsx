import { FC } from "react";
import {
    AppBar,
    Box,
    Button,
    Container,
    Grid,
    Toolbar,
    Typography,
} from '@mui/material';
import MenuLanguage from "components/molecules/MenuLanguage";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Appbar: FC = () => {
    const { t } = useTranslation("navbar");
    const navigate = useNavigate();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="fixed"
                color="transparent"
                sx={{ backdropFilter: 'blur(15px)' }}>
                <Toolbar>
                    <Container>
                        <Grid
                            container
                            justifyContent="space-between"
                            sx={{ alignItems: 'center' }}>
                            <Grid item display="flex" alignItems="center">
                                <Box
                                    component="img"
                                    src="/logo-black.png"
                                    alt="Logo Eduardo Leal"
                                    sx={{ width: '35px', '&:hover': { cursor: 'pointer' } }}
                                    onClick={() => navigate("/")}
                                />
                            </Grid>
                            <Grid item display="flex" alignItems="center">
                                <Button
                                    variant="text"
                                    color="inherit" sx={{ mr: 3, textTransform: "none", fontSize: 16, fontWeight: 300 }}
                                    onClick={() => navigate("/development")}>
                                    <Typography variant="inherit" textOverflow="ellipsis">
                                        {t('development')}
                                    </Typography>
                                </Button>
                                <MenuLanguage />
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </Box>
    )
}

export default Appbar