import Develop from "components/organisms/Develop";
import Header from "components/organisms/Header";
import Layout from "components/templates/Layout";
import { FC } from "react";

const Development: FC = () => {
    return (
        <Layout>
            <Header backEnabled />
            <Develop />
        </Layout>
    )
}

export default Development;