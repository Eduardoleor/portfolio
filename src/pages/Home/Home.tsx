import { FC } from "react";
import Content from "components/organisms/Content";
import Header from "components/organisms/Header";
import Layout from "components/templates/Layout";

const Home: FC = () => {

    return (
        <Layout>
            <Header />
            <Content />
        </Layout>
    )
}

export default Home;