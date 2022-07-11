import type { NextPage } from "next";

import Layout from "@components/Layout";
import Intro from "@layouts/Homepage/Intro";

const Home: NextPage = () => {
  return (
    <Layout title="Jetcap - A hosted REST API ready to respond to your AJAX requests">
      <Intro />
    </Layout>
  );
};

export default Home;
