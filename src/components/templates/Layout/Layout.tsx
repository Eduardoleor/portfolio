import { Container } from "@mui/material";
import Appbar from "components/organisms/Appbar";
import Footer from "components/organisms/Footer";
import { FC } from "react";

const Layout: FC = ({ children }) => {
    return (
        <Container>
            <Appbar />
            {children}
            <Footer />
        </Container>
    )
}

export default Layout;