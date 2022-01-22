import { FC } from "react";
import {
    Box,
    Divider,
    Grid,
    useMediaQuery
} from '@mui/material';
import About from "components/molecules/Content/About";
import Technologies from "components/molecules/Content/Technologies";
import PersonalAchievements from "components/molecules/Content/PersonalAchievements";
import AboutMe from "components/molecules/Content/AboutMe";
import ContactMe from "components/molecules/Content/ContactMe";

const Content: FC = () => {
    const isDesktop = useMediaQuery('(min-width:600px)');

    return (
        <Box sx={{ flexGrow: 1, mb: 3 }}>
            <Grid container spacing={5}>
                <Grid item xs={12} md={5}>
                    <About />
                </Grid>
                <Grid item xs={12} md={7}>
                    {!isDesktop && <Divider sx={{ mt: 2, mb: 2 }} />}
                    <Technologies />
                    <Divider sx={{ mt: 2, mb: 2 }} />
                    <PersonalAchievements />
                    <Divider sx={{ mt: 2, mb: 2 }} />
                    <AboutMe />
                    <Divider sx={{ mt: 2, mb: 2 }} />
                    <ContactMe />
                </Grid>
            </Grid>
            <Divider sx={{ mt: 2 }} />
        </Box>
    )
}

export default Content;