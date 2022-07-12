import type { NextPage } from "next";
import dynamic from "next/dynamic";

import Layout from "@components/Layout";
const Intro = dynamic(() => import("@layouts/Homepage/Intro"));

const Home: NextPage = () => {
  return (
    <Layout title="Jetcap - A hosted REST API ready to respond to your AJAX requests">
      <Intro />
    </Layout>
  );
};

export default Home;
