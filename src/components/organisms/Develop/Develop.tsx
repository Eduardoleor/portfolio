import { FC } from "react";
import { Box, Divider, Grid, } from '@mui/material';
import Languages from "components/molecules/Develop/Languages";
import Tools from "components/molecules/Develop/Tools";
import FrontEnd from "components/molecules/Develop/FrontEnd";
import BackEnd from "components/molecules/Develop/BackEnd";
import Mobile from "components/molecules/Develop/Mobile";
import Design from "components/molecules/Develop/Design";
import Disclaimer from "components/atoms/Disclaimer";

const Develop: FC = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={5}>
                <Grid item xs={12} md={6}>
                    <Languages />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Tools />
                </Grid>
                <Grid item xs={12} md={6}>
                    <FrontEnd />
                </Grid>
                <Grid item xs={12} md={6}>
                    <BackEnd />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Mobile />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Design />
                </Grid>
            </Grid>
            <Disclaimer />
            <Divider sx={{ mt: 2, mb: 2 }} />
        </Box>
    )
}

export default Develop